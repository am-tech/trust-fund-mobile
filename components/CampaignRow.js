import React from 'react';
import { Image, View } from 'react-native';

export class CampaignRow extends React.Component {
  render() {
    return (
      <View>
        <Image
          style={{width: 300, height: 100, marginVertical: 5, borderRadius: 5}}
          source={{uri:this.props.source}}
          />
      </View>
    );
  }
}
