/* eslint-disable react/prop-types */
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import React from 'react'; // require but don't know why
import { Icon } from 'native-base';
import HomeScreen from '../screens/home';
import MapBoxScreen from '../screens/mapbox';
import UserInfo from '../screens/userinfo';
import OtherScreen from '../screens/other';

// basic use
const stackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: $t('hello'),
      headerBackTitle: null,
    }),
  },
  MapBox: {
    screen: MapBoxScreen,
    navigationOptions: () => ({
      title: 'mapBox Test',
      headerBackTitle: null,
    }),
  },
},
{
  initialRouteName: 'Home',
});

// tabbar

const userInfoStack = createStackNavigator({
  UserInfoHome: {
    screen: UserInfo,
    navigationOptions: () => ({
      header: null, // important, hide header of user tab
    }),
  },
  Other: {
    screen: OtherScreen,
    navigationOptions: () => ({
      // header: null,
      title: '其他页面',
    }),
  },
});
userInfoStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

const tabBarIconHelper = icon => ({
  tintColor,
}) => <Icon name={icon} style={{ color: tintColor }} />;

const bottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: '首页',
      tabBarIcon: tabBarIconHelper('home'),
    }),
  },
  MapBox: {
    screen: MapBoxScreen,
    navigationOptions: () => ({
      title: 'mapBox',
      tabBarIcon: tabBarIconHelper('pin'),
    }),
  },
  UserInfo: {
    screen: userInfoStack,
    navigationOptions: () => ({
      title: 'UserInfo',
      tabBarIcon: tabBarIconHelper('happy'),
    }),
  },
},
{
  initialRouteName: 'Home', // init tab
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
});


// drawer navigator
// 左侧可以划出浮层页面，内容为配置好的页面列表，点击列表项进入对应页面
const drawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: $t('hello'),
      headerBackTitle: null,
    }),
  },
  MapBox: {
    screen: MapBoxScreen,
    navigationOptions: () => ({
      title: 'mapBox Test',
      headerBackTitle: null,
    }),
  },
});

// actually we just need one of them
const AppNavigators = {
  stackNavigator,
  bottomTabNavigator,
  drawerNavigator,
};

export default createAppContainer(AppNavigators.bottomTabNavigator);
