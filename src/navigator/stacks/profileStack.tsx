import React from 'react';
import Profile from '../../screens/profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, orientation: 'portrait'}}>
      <Stack.Screen name="HomeScreen" component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
