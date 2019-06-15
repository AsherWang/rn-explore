import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/home';
import MapBoxScreen from '../screens/mapbox';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: $t('hello'),
        headerBackTitle: null,
      }),
    }, // width detailed config
    MapBox: MapBoxScreen, // just view
  },
  {
    initialRouteName: 'Home',
  },
);


export default createAppContainer(AppNavigator);
