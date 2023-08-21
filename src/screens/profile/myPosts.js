import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

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
  {},
];

const MyPosts = () => {
  const renderItem = (item, index) => (
    <TouchableOpacity key={index} style={{padding: 1, height: 128, width: 128}}>
      <Image
        source={require('../../assests/images/user.jpg')}
        style={{width: '100%', height: '100%'}}
      />
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={MYPOSTS}
        keyExtractor={index => index.toString()}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={false}
        renderItem={({item, index}) => renderItem(item, index)}
        numColumns={3}
        stickyHeaderIndices={[1]}
      />
    </View>
  );
};

export default MyPosts;
