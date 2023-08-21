/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../stacks/homeStack';
import SearchStack from '../stacks/searchStack';
import PostStack from '../stacks/postStack';
import ReelStack from '../stacks/reelStack';
import ProfileStack from '../stacks/profileStack';
import Foundation from 'react-native-vector-icons/Foundation';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart, faSquarePlus} from '@fortawesome/free-regular-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {height: 54},
        tabBarInactiveTintColor: '#555',
        tabBarInactiveBackgroundColor: 'white',
        tabBarActiveTintColor: 'red',
        tabBarLabelStyle: {
          fontSize: 16,
          color: 'black',
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        key={1}
        options={{
          tabBarIcon: (): any => {
            return <Foundation name="home" color="black" size={26} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        key={2}
        options={{
          tabBarIcon: (): any => {
            return <FontAwesomeIcon icon={faSearch} color="black" size={22} />;
          },
        }}
      />
      <Tab.Screen
        name="PostStack"
        component={PostStack}
        key={3}
        options={{
          tabBarIcon: (): any => {
            return (
              <FontAwesomeIcon icon={faSquarePlus} color="black" size={24} />
              // <Image
              //   style={{
              //     width: 22,
              //     height: 22,
              //   }}
              //   source={require('../../assests/images/more.png')}
              //   resizeMode="contain"
              // />
            );
          },
        }}
      />
      <Tab.Screen
        name="ReelStack"
        component={ReelStack}
        key={4}
        options={{
          tabBarIcon: (): any => {
            return <FontAwesomeIcon icon={faHeart} color="black" size={24} />;
          },
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        key={5}
        options={{
          tabBarIcon: (): any => {
            return (
              <Image
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                }}
                source={require('../../assests/images/John.jpg')}
                resizeMode="contain"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
