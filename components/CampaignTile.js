import React from 'react';
import { Image, View } from 'react-native';

export class CampaignTile extends React.Component {
  render() {
    return (
      <View>
        <Image
          style={{width: 90, height: 100, margin: 5, borderRadius: 5}}
          source={{uri:this.props.source}}
          />
      </View>
    );
  }
}
