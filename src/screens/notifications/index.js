import {View, Text} from 'react-native';
import React from 'react';
import {colorPalette} from '../../constants/colorPalette';
import Header from './header';

const Notifications = () => {
  return (
    <View style={{flex: 1, backgroundColor: colorPalette.whiteColor}}>
      <View style={{marginVertical: 18, marginLeft: 20}}>
        <Text
          style={{
            color: colorPalette.blackColor,
            fontSize: 20,
            fontWeight: '600',
          }}>
          Notifications
        </Text>
      </View>
      <Header />
    </View>
  );
};

export default Notifications;
