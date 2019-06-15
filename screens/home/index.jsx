import React, { Component } from 'react';
import { Image, Button } from 'react-native';
import {
  Container, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon,
} from 'native-base';

const cards = [
  {
    text: '卡片1',
    name: 'One',
    image: require('../../imgs/test.jpg'),
  },
  {
    text: '卡片2',
    name: 'Two',
    image: require('../../imgs/test.jpg'),
  },
  {
    text: '卡片3',
    name: 'Three',
    image: require('../../imgs/test.jpg'),
  },
];

type Props = {
  navigation: Object
}
class HomeScreen extends Component<Props> {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        {/* <Header /> */}
        <View>
          <Button
            title="Go to MapBox"
            onPress={() => navigation.navigate('MapBox')}
          />
        </View>
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

export default HomeScreen;
