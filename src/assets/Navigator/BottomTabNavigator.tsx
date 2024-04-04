import {View, Text} from 'react-native';
import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/DrawerScreen/HomeScreen';
import NotifiScreen from '../screens/NotifiScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CustomBottomTab from '../components/CustomBottomTab';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DrawerIcon from '../svg/menu-fries.svg';
import {useNavigation} from '@react-navigation/native';
import drawerNavigator from './DrawerNavigator';

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
  let height: number = 30;
  let width: number = 30;
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      tabBar={CustomBottomTabs}
      screenOptions={{
        headerShown: true,
        tabBarButton: props => (
          <CustomTabBarButton route="route.name" {...props} />
        ),
        // headerLeft: () => {
        //   return (
        //     <TouchableOpacity
        //       onPress={() => {
        //         navigation.openDrawer();
        //       }}>
        //       <Text>Hello</Text>
        //       {/* <DrawerIcon width={width} height={height} /> */}
        //     </TouchableOpacity>
        //   );
        // },
      }}>
      <Tab.Screen name="Notify" component={NotifiScreen} />
      <Tab.Screen
        name="Home"
        component={drawerNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
