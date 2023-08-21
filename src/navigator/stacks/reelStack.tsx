import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Notifications from '../../screens/notifications';

const Stack = createNativeStackNavigator();

const ReelStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, orientation: 'portrait'}}>
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
};

export default ReelStack;
