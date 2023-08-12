import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../stacks/homeStack';
import SearchStack from '../stacks/searchStack';
import PostStack from '../stacks/postStack';
import ReelStack from '../stacks/reelStack';
import ProfileStack from '../stacks/profileStack';
import Foundation from 'react-native-vector-icons/Foundation';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {faHeart, faSquarePlus} from '@fortawesome/free-regular-svg-icons';

const Tab = createBottomTabNavigator();

const BottomNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {height: 60},
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
            return <Foundation name="home" color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        key={2}
        options={{
          tabBarIcon: (): any => {
            return <EvilIcons name="search" color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="PostStack"
        component={PostStack}
        key={3}
        options={{
          tabBarIcon: (): any => {
            return <FontAwesomeIcon icon={faSquarePlus} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="ReelStack"
        component={ReelStack}
        key={4}
        options={{
          tabBarIcon: (): any => {
            return <FontAwesomeIcon icon={faHeart} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        key={5}
        options={{
          tabBarIcon: (): any => {
            return <EvilIcons name="user" color="black" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
