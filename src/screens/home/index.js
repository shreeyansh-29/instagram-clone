import {View, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Header from './header';
import Stories from './story';
import {colorPalette} from '../../constants/colorPalette';
import Posts, {POSTS} from './post';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Stories />
          {POSTS.map((post, index) => (
            <Posts post={post} key={index} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.whiteColor,
  },
});

export default HomeScreen;
