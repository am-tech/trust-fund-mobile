import React from 'react';
import {
  Image,
  View,
  Text
} from 'react-native';
import { MainText } from './MainText';

export class ItemTile extends React.Component {
  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{width: 200, height: 200, margin: 5, borderRadius: 10}}
          source={{uri:this.props.source}}
          />
          <View style={{flexDirection: 'column', alignItems: 'center', marginLeft: 0}}>
            <Text style={{fontSize: 24, color: '#0A1972'}}>{this.props.name}</Text>
            <Text style={{fontSize: 28, color: '#656565'}}>{this.props.price}</Text>
          </View>
      </View>
    );
  }
}
