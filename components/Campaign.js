import React from 'react';
import { Image, View } from 'react-native';

export class Campaign extends React.Component {
  render() {
    return (
      <View>
        <Image
          style={{width: 100, height: 100, margin: 5, borderRadius: 5}}
          source={{uri:'https://placeimg.com/100/100/tech'}}
          />
      </View>
    );
  }
}
