import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colorPalette} from '../../constants/colorPalette';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

const Header = ({navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: 18,
        marginHorizontal: 18,
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => navigation.pop()} activeOpacity={1}>
        <Image
          source={require('../../assests/images/back.png')}
          style={{height: 24, width: 24}}
        />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: colorPalette.blackColor,
            fontSize: 21,
            fontWeight: '600',
            marginLeft: 30,
          }}>
          aka.shreeyansh
        </Text>
        <TouchableOpacity>
          <FontAwesomeIcon
            icon={faChevronDown}
            size={14}
            style={{marginLeft: 10}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          flexDirection: 'row',
          marginLeft: 50,
        }}>
        <Image
          source={require('../../assests/images/videoCall.png')}
          style={{height: 30, width: 30}}
        />
        <Image
          source={require('../../assests/images/write.png')}
          style={{height: 28, width: 28, marginLeft: 18}}
        />
      </View>
    </View>
  );
};

export default Header;
