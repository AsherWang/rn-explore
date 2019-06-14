/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, Image, ScrollView, RefreshControl, Dimensions } from 'react-native';
import MapboxGL from "@react-native-mapbox-gl/maps";
import * as RNLocalize from "react-native-localize";
import { Container, Button, Text } from 'native-base';
import {translate, setI18nConfig} from './i18n';
import i18n from './i18n';
import AppContainer from './navigator';


MapboxGL.setAccessToken("pk.eyJ1Ijoic291bHdyaXRlciIsImEiOiJjand1a3g3em0wMGl5NDhxdXhzcm1vbmJhIn0.vObzfKUO75-yZLQhydsksw");
const win = Dimensions.get('window');
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const fillZero = (num) => {
  return num > 9 ? num : `0${num}`;
}

const getNowTimeStr = () => {
  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth()+1;
  const d = now.getDate();
  const H = now.getHours();
  const M = now.getMinutes();
  const s = now.getSeconds();
  return `${y}-${m}-${d} ${fillZero(H)}:${fillZero(M)}:${fillZero(s)}`;
}

const Line = props => (
  <View style={styles.block}>
    <Text style={styles.name}>{props.name}</Text>
    <Text style={styles.value}>{JSON.stringify(props.value, null, 2)}</Text>
  </View>
);

type Props = {};
export class App2 extends Component<Props> {
  constructor(props){
    super(props);
    setI18nConfig(); // set initial config
    this.state = {
      list: [],
      refreshing: false,
      timeStr: getNowTimeStr(),
      name: 'Eric',
      unreadCount: 1000,
      checked: false,
      value: ''
    }
  }
  componentDidMount(){
    MapboxGL.setTelemetryEnabled(false);
    RNLocalize.addEventListener("change", this.handleLocalizationChange);
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener("change", this.handleLocalizationChange);
  }

  handleLocalizationChange = () => {
    setI18nConfig();
    this.forceUpdate();
  };

  _onRefresh = () => {
    this.setState({refreshing: true});
    setTimeout(() => {
      const num = Math.floor(Math.random()*6)+2;
      console.log('num',num);
      this.setState({
        list: Array(num).fill(''),
        refreshing: false,
        timeStr: getNowTimeStr()
      });
    }, 1500);
  }

  _onScroll = (evt) => {
    console.log('scroll!!!',evt)
  }

  _onReachBottom = () => {

  }
  onSwitchChange = (nv) => {
    this.setState({
      checked: nv
    })
  }
  onChange = (nv) => {
    this.setState({
      value: nv
    })
  }

  render() {
    const {list,timeStr,name, unreadCount} = this.state;
    return (
        <ScrollView
          bounces={true}
          centerContent={true}
          contentContainerStyle={styles.scroll}
          onScroll={this._onScroll}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
         <Button>
          <Text>
            Button
          </Text>
        </Button>
          {this.state.refreshing && <Text>正在刷新。。。</Text>}
          {/* <Text>上次更新时间 : {timeStr}</Text>
          <Text>{list.length}个图片！</Text> */}
          {/* <Text style={styles.instructions}>{instructions}</Text> */}
          {/* <Text>{languageTag}</Text> */}
          <Text style={styles.instructions}>MapBox 4 React Native Test9</Text>
          <View style={styles.mapContainer}>
            <MapboxGL.MapView style={styles.map} />
          </View>
          <View style={styles.lines}>
            <Line name="Translation example" value={translate("hello")} />
            <Line name="i18n.locale" value={i18n.locale} />
            <Line
                name="RNLocalize.getLocales()"
                value={RNLocalize.getLocales()}
              />
            <Line
              name="RNLocalize.getCurrencies()"
              value={RNLocalize.getCurrencies()}
            />
            <Line
              name="RNLocalize.getCountry()"
              value={RNLocalize.getCountry()}
            />
            <Line
              name="RNLocalize.getCalendar()"
              value={RNLocalize.getCalendar()}
            />
            <Line
              name="RNLocalize.getNumberFormatSettings()"
              value={RNLocalize.getNumberFormatSettings()}
            />
            <Line
              name="RNLocalize.getTemperatureUnit()"
              value={RNLocalize.getTemperatureUnit()}
            />
            <Line
              name="RNLocalize.getTimeZone()"
              value={RNLocalize.getTimeZone()}
            />
            <Line
              name="RNLocalize.uses24HourClock()"
              value={RNLocalize.uses24HourClock()}
            />
            <Line
              name="RNLocalize.usesMetricSystem()"
              value={RNLocalize.usesMetricSystem()}
            />
          </View>
          {list.map((i,idx) => {
            return <View key={idx} style={styles.imgItem}>
              <Text style={styles.imgItemIdx}>{idx+1}</Text>
              <Image style={styles.imgItemImg} source={require('./imgs/test.jpg')} />
            </View>
          })}
          {this.state.refreshing && <Text>正在加载更多内容。。。</Text>}
        </ScrollView>
    );
  }
}
//style

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  scroll: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  mapContainer:{
    height: 400,
    width: win.width,
    backgroundColor: "tomato"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#6cf',
    marginBottom: 5,
  },
  imgItem:{
    position: 'relative'
  },
  imgItemIdx:{
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: 25,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingLeft: 3,
    color: 'white',
    borderBottomLeftRadius: 10
  },
  imgItemImg: {
    width: win.width
  },
  map: {
    flex: 1
  },
  lines:{
    width: win.width,
    textAlign: 'left'
  },
  block: {
    marginBottom: 16,
    alignItems: "flex-start",
  },
  name: {
    textDecorationLine: "underline",
    fontWeight: "500",
    marginBottom: 8,
  },
  value: {
    textAlign: "left",
  },
});
