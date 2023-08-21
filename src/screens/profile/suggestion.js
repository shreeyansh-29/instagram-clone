import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import {colorPalette} from '../../constants/colorPalette';

const SUGGESTION = [
  {
    name: 'Shreeyansh',
    followers: [
      'tripathi.yatin',
      'rahul.kumar',
      'Shreeyansh',
      'tripathi.yatin',
      'rahul.kumar',
      'Shreeyansh',
      'tripathi.yatin',
      'rahul.kumar',
      'Shreeyansh',
    ],
  },
  {
    name: 'Sagar Negi',
    followers: [
      'rahul.kumar',
      'Shreeyansh',
      'tripathi.yatin',
      'rahul.kumar',
      'Shreeyansh',
      'tripathi.yatin',
      'rahul.kumar',
      'Shreeyansh',
      'tripathi.yatin',
    ],
  },
  {
    name: 'Shreeyansh',
    followers: [
      'tripathi.yatin',
      'rahul.kumar',
      'Shreeyansh',
      'tripathi.yatin',
      'rahul.kumar',
      'Shreeyansh',
      'tripathi.yatin',
      'rahul.kumar',
      'Shreeyansh',
    ],
  },
  {
    name: 'Sagar Negi',
    followers: [
      'rahul.kumar',
      'Shreeyansh',
      'tripathi.yatin',
      'rahul.kumar',
      'Shreeyansh',
      'tripathi.yatin',
      'rahul.kumar',
      'Shreeyansh',
      'tripathi.yatin',
    ],
  },
  {
    name: 'Shreeyansh',
    followers: [
      'tripathi.yatin',
      'rahul.kumar',
      'Shreeyansh',
      'tripathi.yatin',
      'rahul.kumar',
      'Shreeyansh',
      'tripathi.yatin',
      'rahul.kumar',
      'Shreeyansh',
    ],
  },
  {
    name: 'Sagar Negi',
    followers: [
      'rahul.kumar',
      'Shreeyansh',
      'tripathi.yatin',
      'rahul.kumar',
      'Shreeyansh',
      'tripathi.yatin',
      'rahul.kumar',
      'Shreeyansh',
      'tripathi.yatin',
    ],
  },
];

const Suggestion = () => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => setVisible(!visible);

  const renderItem = (item, index) => {
    return (
      <View
        key={index}
        style={{
          height: 210,
          width: 156,
          borderWidth: 0.6,
          borderColor: 'lightgrey',
          borderRadius: 4,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginLeft: 4,
        }}>
        <View
          style={{
            width: 90,
            height: 90,
            borderRadius: 45,
            overflow: 'hidden',
          }}>
          <Image
            source={require('../../assests/images/waterfall.jpg')}
            resizeMode="contain"
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <Text style={{color: colorPalette.blackColor, fontWeight: '600'}}>
          {item.name}
        </Text>
        <Text
          style={{
            color: 'gray',
            marginHorizontal: 6,
            fontSize: 12,
            textAlign: 'center',
          }}
          numberOfLines={2}>
          Followed by {item.followers[0]} + {item.followers.length} more
        </Text>
        <TouchableOpacity
          style={{
            paddingVertical: 8,
            paddingHorizontal: 44,
            borderRadius: 8,
            backgroundColor: '#00acee',
          }}>
          <Text style={{color: colorPalette.whiteColor, fontWeight: '600'}}>
            Follow
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{marginTop: 18}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 14,
        }}>
        <Text style={{color: colorPalette.blackColor, fontWeight: '600'}}>
          Discover People
        </Text>
        {visible && (
          <Text style={{color: '#00acee', fontWeight: '600'}}>See all</Text>
        )}
      </View>
      <View style={{marginVertical: 10}}>
        <View style={{flexDirection: 'row'}}>
          <FlatList
            onStartReached={() => handleVisible()}
            onEndReached={() => handleVisible()}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={index => index.toString()}
            data={SUGGESTION}
            renderItem={({item, index}) => renderItem(item, index)}
            ListFooterComponent={() => {
              return (
                <View
                  style={{
                    height: 210,
                    width: 150,
                    borderWidth: 0.6,
                    borderColor: 'lightgrey',
                    borderRadius: 4,
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginLeft: 4,
                  }}>
                  <View
                    style={{
                      // backgroundColor: 'red',
                      height: 92,
                      width: 84,
                      position: 'relative',
                    }}>
                    <View
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: 35,
                        overflow: 'hidden',
                        alignSelf: 'flex-start',
                        //   position: 'relative',
                      }}>
                      <Image
                        source={require('../../assests/images/waterfall.jpg')}
                        resizeMode="contain"
                        style={{width: '100%', height: '100%'}}
                      />
                    </View>
                    <View
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: 35,
                        backgroundColor: colorPalette.whiteColor,
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        right: 0,
                        bottom: 0,
                      }}>
                      <View
                        style={{
                          width: 66,
                          height: 66,
                          borderRadius: 33,
                          overflow: 'hidden',
                        }}>
                        <Image
                          source={require('../../assests/images/selfie.jpg')}
                          resizeMode="contain"
                          style={{width: '100%', height: '100%'}}
                        />
                      </View>
                    </View>
                  </View>
                  <Text
                    style={{
                      width: '80%',
                      color: colorPalette.blackColor,
                      fontWeight: '600',
                      // marginHorizontal: 8,
                      textAlign: 'center',
                    }}>
                    Find More People to Follow
                  </Text>

                  <TouchableOpacity
                    style={{
                      paddingVertical: 8,
                      paddingHorizontal: 44,
                      borderRadius: 8,
                      backgroundColor: 'lightgrey',
                    }}>
                    <Text
                      style={{
                        color: colorPalette.blackColor,
                        fontWeight: '600',
                      }}>
                      See all
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Suggestion;
