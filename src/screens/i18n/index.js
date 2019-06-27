import React from 'react';
import {
  Container, Content, Icon, Picker, Form, Item, Label,
} from 'native-base';

function I18n(props) {
  const { screenProps } = props;

  return (
    <Container>
      <Content>
        <Form>
          <Item inlineLabel picker style={{ justifyContent: 'space-between' }}>
            <Label>{$t('i18n.lng')}</Label>
            <Picker
              mode="dropdown"
              iosHeader="Select your Language"
              iosIcon={<Icon name="arrow-down" />}
              selectedValue={screenProps.locale}
              onValueChange={nv => screenProps.setLocale(nv)}
            >
              {
                i18n.supportedLanguages
                  .map(lng => <Picker.Item key={lng} label={lng} value={lng} />)
              }
            </Picker>
          </Item>
        </Form>
        <Label>{`$t('hello') -> ${$t('hello')}`}</Label>
      </Content>
    </Container>
  );
}

export default I18n;
