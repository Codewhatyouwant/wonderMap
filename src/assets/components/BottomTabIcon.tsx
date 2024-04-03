import {View, Text} from 'react-native';
import React from 'react';
import HomeIcon from '../svg/home.svg';
import NotifyIcon from '../svg/notification.svg';
import ProfileIcon from '../svg/profile.svg';

type Props = {
  route: string;
  isFocused: boolean;
};

const BottomTabIcon = ({route, isFocused}: Props) => {
  const renderIcon = (route: string, isFocused: boolean) => {
    let height: number = 30;
    let width: number = 35;

    switch (route) {
      case 'Home':
        return (
          <HomeIcon
          
            width={width}
            height={height}
            fill={isFocused ? '#FBA834' : 'white'}
          />
        );
        case 'Profile':
        return (
          <ProfileIcon
            width={width}
            height={height}
            fill={isFocused ? '#FBA834' : 'white'}
          />
        );
        case 'Notify':
        return (
          <NotifyIcon
            width={width}
            height={height}
            fill={isFocused ? '#FBA834' : 'white'}
          />
        );

      default:
        break;
    }
  };
  return <View>{renderIcon(route, isFocused)}</View>;
};

export default BottomTabIcon;
