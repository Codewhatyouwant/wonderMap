import {
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import BottomTabIcon from './BottomTabIcon';
import {useAnimatedStyle, withSpring} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

const CustomButtomTab = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  // const {width} = useWindowDimensions;
  const {width} = useWindowDimensions;
  const MARGIN = 20;
  const TAB_BAR_WIDTH = width - MARGIN * 2;
  const TAB_WIDTH = TAB_BAR_WIDTH / state.routes.length;
  const translateAnimation = useAnimatedStyle(() => {
    return {
      transform: [{translateX: withSpring(134 * state.index)}],
    };
  });

  return (
    <View style={styles.tabBarContainer}>
      <Animated.View
        style={[styles.slidingTabContaner, {width: 133}, translateAnimation]}>
        <View style={styles.slidingTab} />
      </Animated.View>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, {merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <View style={styles.contentContainer}>
              <BottomTabIcon route={route.name} isFocused={isFocused} />
              {isFocused && (
                <Text
                  style={{
                    color: isFocused ? '#FBA834' : 'white',
                    fontSize: 15,
                  }}>
                  {route.name}
                </Text>
              )}
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default CustomButtomTab;

const styles = StyleSheet.create({
  tabBarContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 90,
    width: '98%',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#333A73',
    borderRadius: 100,
    justifyContent: 'space-around',
    overflow: 'hidden',
    margin: 10,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  slidingTab: {
    backgroundColor: 'white',
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  slidingTabContaner: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
