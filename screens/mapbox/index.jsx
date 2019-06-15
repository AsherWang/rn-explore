import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken('pk.eyJ1Ijoic291bHdyaXRlciIsImEiOiJjand1a3g3em0wMGl5NDhxdXhzcm1vbmJhIn0.vObzfKUO75-yZLQhydsksw');

const styles = StyleSheet.create({
  mapContainer: {
    height: 400,
    width: gScreen.width,
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
});

class MapBoxScreen extends React.Component {
  componentDidMount() {
    MapboxGL.setTelemetryEnabled(false);
  }

  render() {
    return (
      <View style={{
        flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start',
      }}
      >
        <Text>MapBox Test Screen</Text>
        <Text>{$t('hello')}</Text>
        <View style={styles.mapContainer}>
          <MapboxGL.MapView style={styles.map} />
        </View>
      </View>
    );
  }
}

export default MapBoxScreen;
