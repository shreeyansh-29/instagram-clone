import {SafeAreaView, View} from 'react-native';
import React from 'react';
import Header from './header';
import InfoSection from './infoSection';
import Highlights from './highlights';
import {ScrollView} from 'react-native';
import {colorPalette} from '../../constants/colorPalette';
import TabView from './tabView';

const Profile = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colorPalette.whiteColor}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <InfoSection />
        <Highlights />
        <TabView />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
