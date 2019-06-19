import React from 'react';
import { Container, Content } from 'native-base';
import { PermissionsAndroid, Alert, Platform } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken($config.mapBoxAccessToken);

class MapBoxScreen extends React.Component {
  state = {
    mapHeight: 0,
    permissionGet: false,
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      // Calling the permission function
      this.requestLocationPermission();
    } else {
      Alert.alert('IOS device found');
    }
    MapboxGL.setTelemetryEnabled(false);
  }

  // Checking for the permission just after component loaded
  async requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
          title: 'AndoridPermissionExample App Location Permission',
          message: 'AndoridPermissionExample App needs access to your Location',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // To Check, If Permission is granted
        this.setState({
          permissionGet: true,
        });
      } else {
        Alert.alert('CAMERA permission denied');
      }
    } catch (err) {
      Alert.alert('err', err);
      console.warn(err);
    }
  }


  render() {
    const { mapHeight, permissionGet } = this.state;
    return (
      <Container>
        <Content
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            this.setState({ mapHeight: height });
          }}
        >
          {mapHeight > 0 && permissionGet && (
            <MapboxGL.MapView
              showUserLocation
              style={{ flex: 1, height: mapHeight }}
            >
              <MapboxGL.Camera
                centerCoordinate={[113.39921008865942, 23.167083344640833]}
                zoomLevel={16}
              />
              <MapboxGL.UserLocation />
            </MapboxGL.MapView>
          )}
        </Content>
      </Container>
    );
  }
}

export default MapBoxScreen;
