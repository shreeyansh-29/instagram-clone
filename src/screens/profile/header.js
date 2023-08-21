import {View, Text} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import Octicons from 'react-native-vector-icons/Octicons';
import {colorPalette} from '../../constants/colorPalette';
import {faSquarePlus} from '@fortawesome/free-regular-svg-icons';

const Header = () => {
  return (
    <View style={{flexDirection: 'row', marginHorizontal: 16, marginTop: 16}}>
      <View
        style={{
          width: '52%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {/* <FontAwesomeIcon icon={faLock} /> */}
        <Octicons name="lock" size={16} color="black" />
        <Text
          style={{
            color: colorPalette.blackColor,
            fontWeight: '600',
            fontSize: 21,
          }}>
          aka.shreeyansh
        </Text>
        <FontAwesomeIcon icon={faChevronDown} size={14} />
      </View>
      <View
        style={{
          width: '48%',
          justifyContent: 'flex-end',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <FontAwesomeIcon
          icon={faSquarePlus}
          color="black"
          size={24}
          style={{marginRight: 20}}
        />
        <FontAwesomeIcon icon={faBars} size={22} color="black" />
      </View>
    </View>
  );
};

export default Header;
