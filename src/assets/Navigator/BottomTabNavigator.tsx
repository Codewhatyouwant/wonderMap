import {View, Text} from 'react-native';
import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import NotifiScreen from '../screens/NotifiScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CustomBottomTab from '../components/CustomBottomTab';

export type BottomTabParamList = {
  Notification: undefined;
  Home: undefined;
  Profile: undefined;
};
const CustomBottomTabs = (props: BottomTabBarProps) => {
  return <CustomBottomTab {...props} />;
};

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator<BottomTabParamList>();
  return (
    <Tab.Navigator
      tabBar={CustomBottomTabs}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Notify" component={NotifiScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
