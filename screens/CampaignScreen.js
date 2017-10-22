import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet
} from 'react-native';
import { MainText } from '../components/MainText';

export default class CampaignScreen extends React.Component {
  static navigationOptions = {
    title: 'Campaign',
  };

  render () {
    return (
      <View>
        <ScrollView style={styles.container}>
          <View>
            <MainText>Campaign Information </MainText>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
