import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { MainText } from '../components/MainText';

export default class ItemSearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Add Items',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.formContainer}>
          <MainText style={styles.headerText}> My College List</MainText>
          <MainText style={styles.subheaderText}> All the things I need for college! </MainText>

          <View style={styles.itemSearchContainer}>
            <TextInput
              style={styles.input}
              placeholder="Search for an item"
            />
            <Button
              style={styles.searchButton}
              onPress={this._createCampaign}
              title="Search"
              color="#5171FF"
              accessibilityLabel="Search for an Item"
            />
          </View>


        </View>
      </ScrollView>
    );
  }

  _createCampaign = () => {

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
  headerText: {
    color: '#7F96FF',
    fontSize: 24,
  },
  subheaderText: {
    color: '#656565',
    fontSize: 18,
  },
  itemSearchContainer: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 50,
  },
  itemsCollection: {
    marginTop: 50,
  },
  input: {
    fontSize: 16,
    padding: 8,
    flex: 1
  },
  searchButton: {
    fontSize: 16,
    padding: 0,
    width: 100,
  }
});
