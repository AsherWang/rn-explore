import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator,
  BottomTabBar,
} from 'react-navigation';
import React from 'react';
import { Icon } from 'native-base';
import HomeScreen from '../screens/home';
import MapBoxScreen from '../screens/mapbox';
import UserInfo from '../screens/userinfo';
import I18nPage from '../screens/i18n';
import OtherScreen from '../screens/other';
import LoginScreen from '../screens/login';
// so these page doesn't look as simple as i expect it to be

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

const TabBarComponent = props => (<BottomTabBar {...props} />);

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
  tabBarComponent: props => (
    <TabBarComponent
      {...props}
      style={{ borderTopColor: '#efefef' }}
    />
  ),
});

const AuthStack = createStackNavigator({ SignIn: LoginScreen });

const AppNavigators = {
  stackNavigator,
  bottomTabNavigator,
};

// export default createAppContainer(AppNavigators.bottomTabNavigator);
export default createAppContainer(createSwitchNavigator(
  {
    // AuthLoading: AuthLoadingScreen,
    App: AppNavigators.bottomTabNavigator,
    Auth: AuthStack,
  },
  {
    // initialRouteName: 'AuthLoading',
    initialRouteName: 'Auth',
  },
));
// export default connect(
//   ({ app }) => ({ language: app.language }),
// )(createAppContainer(AppNavigators.bottomTabNavigator));
