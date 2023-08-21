import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React from 'react';
import {colorPalette} from '../../constants/colorPalette';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient';

export const USERS = [
  {
    user: 'rahul.kumar',
    image: '../../assests/images/user.jpg',
  },
  {
    user: 'tripathi.yatin',
    image: '../../assests/images/user.jpg',
  },
  {
    user: 'coolboyBinod',
    image: '../../assests/images/shreeyansh.jpg',
  },

  {
    user: 'Rahul',
    image: '../../assests/images/shreeyansh.jpg',
  },
  {
    user: 'Rahul',
    image: '../../assests/images/shreeyansh.jpg',
  },
  {
    user: 'Rahul',
    image: '../../assests/images/shreeyansh.jpg',
  },
  {
    user: 'Rahul',
    image: '../../assests/images/shreeyansh.jpg',
  },
  {
    user: 'Rahul',
    image: '../../assests/images/shreeyansh.jpg',
  },
  {
    user: 'Rahul',
    image: '../../assests/images/shreeyansh.jpg',
  },
  {
    user: 'Rahul',
    image: '../../assests/images/shreeyansh.jpg',
  },
  {
    user: 'Rahul',
    image: '../../assests/images/shreeyansh.jpg',
  },
  {
    user: 'Rahul',
    image: '../../assests/images/shreeyansh.jpg',
  },
  {
    user: 'Rahul',
    image: '../../assests/images/shreeyansh.jpg',
  },
];

const Stories = () => {
  return (
    <View style={styles.storyContainer}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.storyColor}>
              <View style={styles.extraColor}>
                <Image
                  source={require('../../assests/images/John.jpg')}
                  style={styles.myStory}
                  resizeMode="contain"
                />
                <View style={styles.plusButton}>
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    color="#00acee"
                    size={22}
                  />
                </View>
              </View>
            </View>
            <Text style={styles.textStyle}>Your Story</Text>
          </View>
          {USERS.map((story, index) => (
            <View style={styles.storyView} key={index}>
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
                    source={require('../../assests/images/user.jpg')}
                    style={styles.story}
                    resizeMode="contain"
                  />
                </View>
              </LinearGradient>

              <Text style={styles.textStyle}>
                {story.user.length > 11
                  ? story.user.slice(0, 10).toLowerCase() + '...'
                  : story.user.toLowerCase()}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  storyContainer: {
    // backgroundColor: 'red',
    marginLeft: 12,
    // alignSelf: 'center',
    marginBottom: 13,
  },
  myStory: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    // borderColor: colorPalette.whiteColor,
    // marginBottom: 4,
  },
  plusButton: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: colorPalette.whiteColor,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 4,
    right: 6,
  },
  story: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: colorPalette.whiteColor,
  },
  storyColor: {
    width: 86,
    height: 86,
    borderRadius: 43,
    backgroundColor: colorPalette.whiteColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
    overflow: 'hidden',
  },
  extraColor: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colorPalette.whiteColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: colorPalette.blackColor,
    fontSize: 12,
  },
  storyView: {
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default Stories;
