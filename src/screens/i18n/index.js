import React, { Component } from 'react';
import {
  Container, Content, Icon, Picker, Form, Item, Label,
} from 'native-base';

class I18n extends Component {
  onValueChange(value) {
    const { screenProps } = this.props;
    screenProps.setLocale(value);
  }

  render() {
    const { screenProps } = this.props;
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
                onValueChange={nv => this.onValueChange(nv)}
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
}

// export default connect(({ app }) => ({ language: app.language }))(I18n);
export default I18n;
