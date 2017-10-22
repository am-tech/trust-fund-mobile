import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet
} from 'react-native';

export default class NewCampaignScreen extends React.Component {
  static navigationOptions = {
    title: 'New',
  };

  render() {
    return (
      <ScrollView style={styles.container}>

      </ScrollView>
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
