import {View, SafeAreaView, Image, StyleSheet, Text} from 'react-native';
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {colorPalette} from '../../constants/colorPalette';
import {TouchableOpacity} from 'react-native';

const Header = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <Image
          source={require('../../assests/images/Instagram.png')}
          style={{width: 116, height: 58, resizeMode: 'contain'}}
        />
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.navigate('Message');
          }}>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <Fontisto
            color="black"
            size={22}
            name="messenger"
            style={{marginRight: 6}}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    // height: 54,
    // display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // width: '92%',
    // alignSelf: 'center',
    marginHorizontal: 12,
    paddingTop: 2,
    // backgroundColor: 'yellow',
  },
  headerText: {color: colorPalette.blackColor, fontSize: 26},
  unreadBadge: {
    backgroundColor: '#FF3250',
    position: 'absolute',
    left: 14,
    bottom: 14,
    width: 20,
    height: 18,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  unreadBadgeText: {
    color: colorPalette.whiteColor,
    fontSize: 10,
    fontWeight: '600',
  },
});

export default Header;
