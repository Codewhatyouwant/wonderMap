import {ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const customDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground
        source={require('../Images/puri_sun.jpg')}
        style={styles.bgDrowerImg}>
        <Image
          source={require('../Images/mk_green.jpg')}
          style={styles.userImg}
        />
        <View style={styles.userName}>
          <Text style={styles.userNameText}>
            Hello,<Text>Mukesh</Text>
          </Text>
          <Text style={styles.userMail}>
            Gmail: <Text>testing@gmail.com</Text>
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.drawerList}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

export default customDrawer;

const styles = StyleSheet.create({
  userImg: {
    width: 85,
    height: 85,
    borderRadius: 50,
    marginTop: 10,
  },
  bgDrowerImg: {
    flex: 1,
    alignItems: 'center',
    height: 160,
    marginTop: -5,
  },
  drawerList: {},
  userName: {
    alignItems: 'center',
    marginTop: 5,
    padding: 4,
    width: '90%',
    height: '30%',
    backgroundColor: '#E6E6E6',
    borderRadius: 3,
  },
  userNameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
