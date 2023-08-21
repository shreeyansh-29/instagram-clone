import {View, Text} from 'react-native';
import React from 'react';
import {colorPalette} from '../../constants/colorPalette';

const MessageSection = () => {
  return (
    <View style={{marginVertical: 18, backgroundColor: 'blue', height: 1000}}>
      <View
        style={{
          flexDirection: 'row',
          width: '92%',
          justifyContent: 'space-between',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            color: colorPalette.blackColor,
            fontSize: 16,
            fontWeight: '600',
          }}>
          Messages
        </Text>
        <Text style={{color: '#00acee', fontSize: 16}}>Requests</Text>
      </View>
    </View>
  );
};

export default MessageSection;
