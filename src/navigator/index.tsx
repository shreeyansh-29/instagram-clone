import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomNavigator from './bottomNavigator';
import HomeStack from './stacks/homeStack';
import SearchStack from './stacks/searchStack';
import MessagingScreen from '../screens/message';

const Stack = createNativeStackNavigator();

const MainNavigation = (): JSX.Element => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Bottom"
          screenOptions={{headerShown: false, orientation: 'portrait'}}>
          <Stack.Screen name="Bottom" component={BottomNavigator} />
          <Stack.Screen name="HomeStack" component={HomeStack} />
          <Stack.Screen name="SearchStack" component={SearchStack} />
          <Stack.Screen name="PostStack" component={SearchStack} />
          <Stack.Screen name="ReelStack" component={SearchStack} />
          <Stack.Screen name="ProfileStack" component={SearchStack} />
          <Stack.Screen name="Message" component={MessagingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default MainNavigation;
