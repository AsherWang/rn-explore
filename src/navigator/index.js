/* eslint-disable react/prop-types */
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import React from 'react';
import { Icon } from 'native-base';
import HomeScreen from '../screens/home';
import MapBoxScreen from '../screens/mapbox';
import UserInfo from '../screens/userinfo';
import I18nPage from '../screens/i18n';
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
      title: $t('home.title'),
      tabBarIcon: tabBarIconHelper('home'),
    }),
  },
  MapBox: {
    screen: MapBoxScreen,
    navigationOptions: () => ({
      title: $t('map.title'),
      tabBarIcon: tabBarIconHelper('pin'),
    }),
  },
  I18n: {
    screen: I18nPage,
    navigationOptions: () => ({
      title: $t('i18n.title'),
      tabBarIcon: tabBarIconHelper('color-wand'),
    }),
  },
  UserInfo: {
    screen: userInfoStack,
    navigationOptions: () => ({
      title: $t('userinfo.title'),
      tabBarIcon: tabBarIconHelper('happy'),
    }),
  },
},
{
  initialRouteName: 'Home', // init tab MapBox,Home
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
// export default connect(
//   ({ app }) => ({ language: app.language }),
// )(createAppContainer(AppNavigators.bottomTabNavigator));
