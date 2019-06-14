import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from '../screens/home';
import MapBoxScreen from '../screens/mapbox';


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  MapBox: MapBoxScreen
},
{
  initialRouteName: "Home"
}
);

export default createAppContainer(AppNavigator);