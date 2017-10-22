import React from 'react';
import { Image, View } from 'react-native';

export class CampaignRow extends React.Component {
  render() {
    return (
      <View>
        <Image
          style={{width: 500, height: 100, margin: 5, borderRadius: 5}}
          source={{uri:this.props.source}}
          />
      </View>
    );
  }
}
