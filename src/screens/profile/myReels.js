import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colorPalette} from '../../constants/colorPalette';

const REELS = [
  {views: '786k'},
  {views: '1.2M'},
  {views: '7'},
  {views: '6M'},
  {views: '541k'},
  {views: '120k'},
];

const MyReels = () => {
  const renderItem = (item, index) => (
    <TouchableOpacity style={{width: 128, height: 200, padding: 1}} key={index}>
      <Image
        source={require('../../assests/images/sunset.jpg')}
        style={{width: '100%', height: '100%'}}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          bottom: 8,
          left: 8,
        }}>
        <Ionicons
          name="play-outline"
          color={colorPalette.whiteColor}
          size={13}
        />
        <Text
          style={{color: colorPalette.whiteColor, fontSize: 12, marginLeft: 2}}>
          {item.views}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={REELS}
        keyExtractor={index => index.toString()}
        renderItem={({item, index}) => renderItem(item, index)}
        numColumns={3}
      />
    </View>
  );
};

export default MyReels;
