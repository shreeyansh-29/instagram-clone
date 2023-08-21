import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colorPalette} from '../../constants/colorPalette';
import {TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {ScrollView} from 'react-native';
import Suggestion from './suggestion';

const InfoSection = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <LinearGradient
          colors={['#fa7e1e', '#d62976', '#fa7e1e']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={{
            width: 84,
            height: 84,
            borderRadius: 42,
            backgroundColor: 'pink',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 2,
          }}>
          <View style={styles.extraColor}>
            <Image
              source={require('../../assests/images/shreeyansh.jpg')}
              style={styles.story}
              resizeMode="contain"
            />
          </View>
        </LinearGradient>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              color: colorPalette.blackColor,
              fontWeight: '600',
              fontSize: 18,
            }}>
            18
          </Text>
          <Text style={{color: colorPalette.blackColor}}>Posts</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              color: colorPalette.blackColor,
              fontWeight: '600',
              fontSize: 18,
            }}>
            577
          </Text>
          <Text style={{color: colorPalette.blackColor}}>Followers</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              color: colorPalette.blackColor,
              fontWeight: '600',
              fontSize: 18,
            }}>
            345
          </Text>
          <Text style={{color: colorPalette.blackColor}}>Following</Text>
        </View>
      </View>
      <View style={{marginLeft: 16, marginVertical: 10}}>
        <Text style={{color: colorPalette.blackColor, fontWeight: '600'}}>
          Shreeyansh Singh Rawat
        </Text>
        <Text style={{color: colorPalette.blackColor}}>Jai Shree Ram</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <TouchableOpacity
          style={{
            paddingVertical: 8,
            paddingHorizontal: 44,
            backgroundColor: 'lightgrey',
            borderRadius: 8,
          }}>
          <Text style={{color: colorPalette.blackColor, fontWeight: '600'}}>
            Edit profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingVertical: 8,
            paddingHorizontal: 44,
            backgroundColor: 'lightgrey',
            borderRadius: 8,
          }}>
          <Text style={{color: colorPalette.blackColor, fontWeight: '600'}}>
            Share profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleClick()}
          style={{
            padding: 8,
            backgroundColor: 'lightgrey',
            borderRadius: 8,
          }}>
          <FontAwesomeIcon
            icon={faUserPlus}
            style={{transform: [{rotateY: '180deg'}]}}
            color={colorPalette.blackColor}
          />
        </TouchableOpacity>
      </View>
      {clicked && <Suggestion />}
    </>
  );
};

const styles = StyleSheet.create({
  extraColor: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colorPalette.whiteColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {color: colorPalette.blackColor, fontSize: 12},
  story: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: colorPalette.whiteColor,
  },
});

export default InfoSection;
