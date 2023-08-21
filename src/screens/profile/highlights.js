import {View, Text, Image} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import {colorPalette} from '../../constants/colorPalette';
import Feather from 'react-native-vector-icons/Feather';

const HIGHTLIGHTS = [
  {title: 'Pondicherry'},
  {title: 'Virat'},
  {title: 'Lappu Sachin'},
  {title: 'Jhingur'},
  {title: 'Bolta Vo'},
  {title: 'Kuch Hai'},
  {title: 'Nahi'},
  {title: 'Pondicherry'},
  {title: 'Pondicherry'},
  {title: 'Pondicherry'},
  {title: 'Pondicherry'},
  {title: 'Pondicherry'},
];

const Highlights = () => {
  return (
    <View style={{marginVertical: 18}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {HIGHTLIGHTS.map((highlight, index) => (
          <View style={{alignItems: 'center', marginLeft: 16}} key={index}>
            <View
              style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                borderWidth: 1.2,
                borderColor: 'lightgrey',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: 68,
                  height: 68,
                  borderRadius: 80,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../assests/images/selfie.jpg')}
                  style={{width: 62, height: 62, borderRadius: 31}}
                  resizeMode="contain"
                />
              </View>
            </View>
            <Text
              style={{
                color: colorPalette.blackColor,
                marginTop: 2,
                fontSize: 12,
              }}>
              {highlight.title}
            </Text>
          </View>
        ))}
        <View style={{alignItems: 'center', marginLeft: 20, marginRight: 10}}>
          <View
            style={{
              width: 64,
              height: 64,
              borderRadius: 32,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 0.8,
              borderColor: colorPalette.blackColor,
            }}>
            <Feather name="plus" color={colorPalette.blackColor} size={26} />
          </View>
          <Text
            style={{
              color: colorPalette.blackColor,
              marginTop: 2,
              fontSize: 12,
            }}>
            New
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Highlights;
