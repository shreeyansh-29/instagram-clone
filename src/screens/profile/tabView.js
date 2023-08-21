import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import {Divider, Tab, TabView} from 'react-native-elements';
import {colorPalette} from '../../constants/colorPalette';
import MyPosts from './myPosts';
import MyReels from './myReels';
import TaggedPhotos from './taggedPhotos';

const TabView1 = () => {
  const [index, setIndex] = useState(0);
  return (
    <View>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={styles.tabIndicator}
        variant="primary">
        <Tab.Item
          style={{borderBottomWidth: 10}}
          containerStyle={styles.tabItem}
          icon={() =>
            index === 0 ? (
              <Image
                source={require('../../assests/images/grid.png')}
                style={{height: 20, width: 20}}
              />
            ) : (
              <Image
                source={require('../../assests/images/grid1.png')}
                style={{height: 20, width: 20}}
              />
            )
          }
        />
        <Tab.Item
          containerStyle={styles.tabItem}
          icon={() =>
            index === 1 ? (
              <Image
                source={require('../../assests/images/video.png')}
                style={{alignSelf: 'center', height: 22, width: 22}}
              />
            ) : (
              <Image
                source={require('../../assests/images/video1.png')}
                style={{alignSelf: 'center', height: 22, width: 22}}
              />
            )
          }
        />
        <Tab.Item
          containerStyle={styles.tabItem}
          icon={() =>
            index === 2 ? (
              <Image
                source={require('../../assests/images/tag.png')}
                style={{alignSelf: 'center', height: 26, width: 26}}
              />
            ) : (
              <Image
                source={require('../../assests/images/tag1.png')}
                style={{alignSelf: 'center', height: 26, width: 26}}
              />
            )
          }
        />
      </Tab>
      <Divider width={0.2} />
      <TabView value={index} onChange={setIndex} animationType="timing">
        <TabView.Item>
          <MyPosts />
        </TabView.Item>
        <TabView.Item>
          <MyReels />
        </TabView.Item>
        <TabView.Item>
          <TaggedPhotos />
        </TabView.Item>
      </TabView>
    </View>
  );
};

const styles = StyleSheet.create({
  tabIndicator: {
    backgroundColor: colorPalette.blackColor,
    height: 1.2,
  },
  tabItem: {backgroundColor: colorPalette.whiteColor},
  tabItems: {backgroundColor: colorPalette.whiteColor, width: '100%'},
});

export default TabView1;
