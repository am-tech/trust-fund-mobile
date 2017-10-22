import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import { MainText } from '../components/MainText';
import { ItemTile } from '../components/ItemTile';

class CampaignScreen extends Component {
  static navigationOptions = {
    title: 'Campaign',
  };

  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: 1,
          name: 'Item 1',
          price: '$59',
          imageUrl: 'https://placeimg.com/100/100/tech',
        },
        {
          id: 2,
          name: 'Item 2',
          price: '$179',
          imageUrl: 'https://placeimg.com/100/100/nature',
        },
        {
          id: 3,
          name: 'Item 3',
          price: '$20',
          imageUrl: 'https://placeimg.com/100/100/architecture',
        }
      ]
    };
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.formContainer}>
          <View>
            <MainText style={styles.headerText}>{this.props.campaign.name}</MainText>
            <MainText style={styles.subheaderText}> All the things I need for college! </MainText>
          </View>
          <View style={styles.alignRight}>
            <MainText style={{fontSize: 30, color: '#009900'}}> Total: $248 </MainText>
          </View>

          <View style={styles.itemsCollection}>
          <MainText style={styles.headerText}> Items </MainText>
            {this.state.items.map((item, key) => {
              return (
                <TouchableOpacity
                  key={key}
                  onPress={() => this._handleItemPress(item.id)}
                >
                  <ItemTile
                    source={item.imageUrl}
                    name={item.name}
                    price={item.price}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }

  _handleItemPress = (id) => {
    this.state.navigation.navigate('Item');
  }
}

const mapStateToProps = (state) => {
  return {
    campaign: state.campaigns.list
      .find((campaign) => campaign.id === state.campaigns.selectedCampaignId),
  };
};

export default connect(mapStateToProps)(CampaignScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  formContainer: {
    marginHorizontal: 15,
  },
  alignRight: {
    alignItems: 'flex-end'
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
  }
});
