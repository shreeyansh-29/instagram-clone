import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Text} from 'react-native';

let NOTE = [
  {name: 'kartik.rawat'},
  {name: 'kartik.rawat'},
  {name: 'kartik.rawat'},
  {name: 'kartik.rawat b c'},
  {name: 'kartik.rawat'},
  {name: 'kartik.rawat'},
  {name: 'kartik.rawat'},
  {name: 'kartik.rawat'},
];

const Note = () => {
  const renderItem = (item: any, index: any) => (
    <TouchableOpacity
      style={{
        // marginRight: 12,
        alignItems: 'center',
        // backgroundColor: 'red',
        paddingHorizontal: 10,
      }}
      key={index}>
      <Image
        source={require('../../assests/images/john1.jpg')}
        style={{width: 74, height: 74, borderRadius: 70}}
        resizeMode="contain"
      />
      <Text style={{color: '#000', marginTop: 4, fontSize: 12}}>
        {item.name.length > 12 ? item.name.slice(0, 10) + '...' : item.name}
      </Text>
    </TouchableOpacity>
  );
  return (
    <View style={{marginTop: 40}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={NOTE}
        keyExtractor={index => index.toString()}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={false}
        renderItem={({item, index}) => renderItem(item, index)}
        ListHeaderComponent={() => (
          <TouchableOpacity
            style={{marginLeft: 24, alignItems: 'center', marginRight: 12}}>
            <Image
              source={require('../../assests/images/waterfall.jpg')}
              style={{width: 74, height: 74, borderRadius: 70}}
              resizeMode="contain"
            />
            <Text style={{color: 'grey', marginTop: 4, fontSize: 12}}>
              Your note
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Note;
