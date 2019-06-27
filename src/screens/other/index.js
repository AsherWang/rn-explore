import React from 'react';
import { Image } from 'react-native';
import {
  Container, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon,
} from 'native-base';
import { connect } from 'react-redux';

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

// eslint-disable-next-line react/prop-types
const Other = ({ counter }) => (
  <Container>
    <View>
      <Text>other screen</Text>
      <Text>{counter}</Text>
      <DeckSwiper
        style={{ height: 300, width: gScreen.width }}
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

export default connect(({ counter }) => ({ counter }))(Other);
