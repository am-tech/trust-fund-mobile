import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class NewCampaignScreen extends React.Component {
  static navigationOptions = {
    title: 'New Campaign',
  };

  constructor(props) {
    super(props);

    this.state = {
      campaignName: '',
      description: ''
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Ionicons
              name='md-ribbon'
              size={28}
              style={{ marginBottom: -3 }}
              color='#5171ff'
            />
            <TextInput
              style={styles.input}
              placeholder="Campaign Name"
              onChangeText={(campaignName) => this.setState({campaignName})}
              value={this.state.campaignName}
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons
              name='md-ribbon'
              size={28}
              style={{ marginBottom: -3 }}
              color='#5171ff'
            />
            <TextInput
              style={styles.input}
              placeholder="Description (Optional)"
              multiline={true}
              onChangeText={(description) => this.setState({description})}
              value={this.state.description}
            />
          </View>
          <Button
            style={styles.createButton}
            onPress={this._createCampaign}
            title="Create"
            color="#5171FF"
            accessibilityLabel="Create a New Campaign"
          />
        </View>
      </ScrollView>
    );
  }

  _createCampaign = () => {
    this.props.navigation.navigate('AddItem');
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  formContainer: {
    marginHorizontal: 30,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  input: {
    height: 60,
    fontSize: 16,
    padding: 5
  },
  createButton: {
    fontSize: 20,
    padding: 5,
    height: 60,
  }
});
