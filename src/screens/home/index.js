import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import { Image } from 'react-native';
import {
  Container, Card, CardItem, Text, Body, Button, Content, Thumbnail, Left, Icon,
} from 'native-base';

// tried package babel-plugin-module-resolver and failed
import Stepper from '../../components/Stepper';
import AutoHeightImage from '../../components/AutoHeightImage';

const imageSrc = require('./test.jpg');

let count = 0;

// define Props will cause vs-code check err
function HomeScreen({ counter, dispatch, navigation }) {
  const [api1Result, setApi1Result] = useState('loading...');
  const [api2Result, setApi2Result] = useState('loading...');
  const [api3Result, setApi3Result] = useState('loading...');

  useEffect(() => {
    api.testApi()
      .then(({ data }) => setApi1Result(data))
      .catch(err => setApi1Result(`fetch data err: ${err && err.message}`));
    api.testApi2()
      .then(({ data }) => setApi2Result(data))
      .catch(err => setApi2Result(`fetch data err: ${err && err.message}`));
    api.testApi404()
      .then(({ data }) => setApi3Result(data))
      .catch(err => setApi3Result(`fetch data err: ${err && err.message}`));
  }, []);
  count += 1;
  console.log(`homescreen render count: ${count}`);
  return (
    <Container>
      <Content>
        <Card>
          <CardItem header bordered>
            <Text>Custom components & Navigation button</Text>
          </CardItem>
          <CardItem cardBody>
            <Stepper
              style={{
                flex: 1,
                margin: 5,
                borderWidth: 1,
                borderColor: '#EFEFEF',
              }}
              value={counter}
              throttle={1000}
              onValueChange={nv => dispatch({
                type: 'counter/update',
                payload: nv,
              })}
            />
            <Button
              light
              style={{
                marginRight: 5,
                alignSelf: 'center',
              }}
              onPress={() => navigation.navigate('MapBox')}
            >
              <Text>Go to MapBox</Text>
            </Button>
          </CardItem>
        </Card>
        <Card pdder>
          <CardItem header bordered>
            <Text>API1 Result</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{api1Result}</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem header bordered>
            <Text>API2 Result</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{api2Result}</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem header bordered>
            <Text>API3 Result</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{api3Result}</Text>
            </Body>
          </CardItem>
        </Card>
        <Card style={{ flex: 0 }}>
          <CardItem header bordered>
            <Left>
              <Thumbnail source={imageSrc} />
              <Body>
                <Text>NativeBase</Text>
                <Text note>April 15, 2016</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem style={{ padding: 0 }} cardBody>
            <AutoHeightImage source={imageSrc} />
          </CardItem>
          <CardItem footer bordered>
            <Left>
              <Button transparent textStyle={{ color: '#87838B' }}>
                <Icon name="logo-github" />
                <Text>1,926 stars</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

export default connect(({ counter }) => ({ counter }))(HomeScreen);
