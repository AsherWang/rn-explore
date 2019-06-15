import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Button } from 'react-native';
import {
  Container, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon,
} from 'native-base';


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

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ret: 'init value',
    };
  }

  // fetchSth: () => {
  //   api.testApi()
  //     .then((res) => {
  //       console.log('res', res);
  //     })
  //     .catch((err) => {
  //       console.log('fetch err', err);
  //     });
  // }

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
    this.props.navigate.navigate('MapBox');
  }

  render() {
    const { ret } = this.state;
    // eslint-disable-next-line
    const { counter, dispatch } = this.props;
    return (
      <Container>
        {/* <Header /> */}
        <View>
          <Button
            title="Go to MapBox"
            onPress={() => this.goMapBoxtest()}
          />
          <Button
            title="INCREMENT"
            onPress={() => dispatch({ type: 'INCREMENT' })}
          />
          <Button
            title="DECREMENT"
            onPress={() => dispatch({ type: 'DECREMENT' })}
          />
          <Button
            title="INCREMENT_ASYNC"
            onPress={() => dispatch({ type: 'INCREMENT_ASYNC' })}
          />
        </View>
        <Text>{ret}</Text>
        <Text>{counter}</Text>

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

const mapStateToProps = state => ({ counter: state });

export default connect(mapStateToProps)(HomeScreen);
