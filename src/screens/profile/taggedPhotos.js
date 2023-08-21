import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

const MYPOSTS = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];

const TaggedPhotos = () => {
  const renderItem = (item, index) => (
    <TouchableOpacity key={index} style={{padding: 1}}>
      <Image
        source={require('../../assests/images/selfie.jpg')}
        style={{height: 126, width: 126}}
        // resizeMode="contain"
      />
    </TouchableOpacity>
  );

  return (
    <View style={{}}>
      <FlatList
        data={MYPOSTS}
        keyExtractor={index => index.toString()}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={false}
        renderItem={({item, index}) => renderItem(item, index)}
        numColumns={3}
      />
    </View>
  );
};

export default TaggedPhotos;
