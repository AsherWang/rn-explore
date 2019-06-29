import React, { useState, useEffect } from 'react';
import { Container, Content } from 'native-base';
import { PermissionsAndroid, Alert, Platform } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken($config.mapBoxAccessToken);

// Checking for the permission just after component loaded
// for android
async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
        title: 'AndoridPermissionExample App Location Permission',
        message: 'AndoridPermissionExample App needs access to your Location',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      // To Check, If Permission is granted
      return true;
    }
    // Alert.alert('CAMERA permission denied');
    return false;
  } catch (err) {
    // Alert.alert('err', err);
    return false;
  }
}

function MapBoxScreen() {
  const [mapHeight, setMapHeight] = useState(0);
  const [permissionGet, setPermissionGet] = useState(false);

  useEffect(() => {
    async function check() {
      MapboxGL.setTelemetryEnabled(false);
      if (Platform.OS === 'android') {
        const ret = await requestLocationPermission();
        setPermissionGet(ret);
      } else {
        Alert.alert('IOS device found');
      }
    }
    check();
  }, []);

  return (
    <Container>
      <Content
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout;
          setMapHeight(height);
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
              // minZoomLevel={14}
              maxZoomLevel={18}
            />
            <MapboxGL.UserLocation />
          </MapboxGL.MapView>
        )}
      </Content>
    </Container>
  );
}

export default MapBoxScreen;
