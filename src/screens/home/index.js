import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Button } from 'react-native';
import {
  Container, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon,
} from 'native-base';
import Stepper from '../../components/stepper';


const cards = [
  {
    text: '卡片1',
    name: 'One',
    image: require('./test.jpg'),
  },
  {
    text: '卡片2',
    name: 'Two',
    image: require('./test.jpg'),
  },
  {
    text: '卡片3',
    name: 'Three',
    image: require('./test.jpg'),
  },
];

// define Props will cause vs-code check err
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ret: 'loading...',
    };
  }

  componentDidMount() {
    this.fetchSth();
  }

  fetchSth() {
    api.testApi()
      .then((res) => {
        console.log('res', res);
        this.setState({
          ret: res.data,
        });
      })
      .catch((err) => {
        console.log('fetch err', err);
      });
  }

  goMapBoxtest() {
    // no better idea for now
    // eslint-disable-next-line
    this.props.navigation.navigate('MapBox');
  }

  render() {
    const { ret } = this.state;
    // eslint-disable-next-line
    const { counter, dispatch } = this.props;
    return (
      <Container>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        >
          <Stepper
            style={{ width: gScreen.width / 2.5 }}
            value={counter}
            onValueChange={nv => dispatch({
              type: 'counter/update',
              payload: nv,
            })}
          />
          <Button
            style={{ width: gScreen.width / 2.5 }}
            title="Go to MapBox"
            onPress={() => this.goMapBoxtest()}
          />

        </View>
        <Text>{`api ret: ${ret}`}</Text>
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item => (
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            )}
          />
        </View>
      </Container>
    );
  }
}

export default connect(({ counter }) => ({ counter }))(HomeScreen);
