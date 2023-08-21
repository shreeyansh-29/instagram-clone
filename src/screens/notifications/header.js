import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {colorPalette} from '../../constants/colorPalette';

const Header = () => {
  return (
    <TouchableOpacity
      style={{flexDirection: 'row', marginLeft: 20}}
      activeOpacity={0}>
      <View>
        <View style={styles.unreadBadge}>
          <Text style={styles.unreadBadgeText}>11</Text>
        </View>
        <TouchableOpacity activeOpacity={1}>
          <Image
            source={{uri: 'https://i.stack.imgur.com/l60Hf.png'}}
            style={{width: 48, height: 48, borderRadius: 25}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={{marginLeft: 20, justifyContent: 'center'}}>
        <Text style={{color: colorPalette.blackColor, fontWeight: '600'}}>
          Follow Requests
        </Text>
        <Text style={{color: 'grey'}}>Approve or ignore requests</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  unreadBadge: {
    backgroundColor: '#FF3250',
    position: 'absolute',
    width: 22,
    height: 22,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
    right: -6,
    top: 0,
  },
  unreadBadgeText: {
    color: colorPalette.whiteColor,
    fontSize: 12,
    fontWeight: '600',
  },
});

export default Header;
