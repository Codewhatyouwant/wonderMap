import {} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MedicalScreen from '../screens/DrawerScreen/MedicalScreen';
import LifeStyleScreen from '../screens/DrawerScreen/LifeStyleScreen';
import CustomDrawer from '../components/customDrawer';
import HomeScreen from '../screens/DrawerScreen/HomeScreen';
import GrosseryScreen from '../screens/DrawerScreen/GrosseryScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome6';
import HotelsScreen from '../screens/DrawerScreen/HotelsScreen';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerLabelStyle: {},
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: () => <FontAwesomeIcon icon="fa-solid fa-house" />,
        }}
      />
      <Drawer.Screen
        name="Life Style"
        component={LifeStyleScreen}
        options={{
          drawerIcon: () => <FontAwesomeIcon icon="fa-solid fa-shirt" />,
        }}
      />
      <Drawer.Screen
        name="Grossery"
        component={GrosseryScreen}
        options={{
          drawerIcon: () => (
            <FontAwesomeIcon icon="fa-solid fa-basket-shopping" />
          ),
        }}
      />
      <Drawer.Screen
        name="Medical"
        component={MedicalScreen}
        options={{
          drawerIcon: () => <FontAwesomeIcon icon="fa-solid fa-syringe" />,
        }}
      />
      <Drawer.Screen
        name="Hotels"
        component={HotelsScreen}
        options={{
          drawerIcon: () => <FontAwesomeIcon icon="fa-solid fa-hotel" />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

