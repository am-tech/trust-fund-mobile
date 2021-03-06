import React from 'react';
import { connect } from 'react-redux';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import { WebBrowser } from 'expo';

// import { MonoText } from '../components/StyledText';
import { MainText } from '../components/MainText';
import { CampaignTile } from '../components/CampaignTile';
import { CampaignRow } from '../components/CampaignRow';
import { loadCampaigns, selectCampaign } from '../store/campaigns';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor () {
    super();

    this.state = {
      campaigns: [
        {
          id: 1,
          name: 'Campaign 1',
          imageUrl: 'https://placeimg.com/100/100/tech',
        },
        {
          id: 2,
          name: 'Campaign 2',
          imageUrl: 'https://placeimg.com/100/100/nature',
        },
        {
          id: 3,
          name: 'Campaign 3',
          imageUrl: 'https://placeimg.com/100/100/architecture',
        }
      ],
    };
  }

  componentDidMount () {
    this.props.loadCampaigns();
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}
          </View>

          <View style={styles.campaignContainer}>
            <MainText style={styles.headerText}>My Campaigns</MainText>
            {this.props.isLoading
              ? <ActivityIndicator />
              : <View style={styles.myCampaignCollection}>
                {this.props.myCampaigns.map((campaign, key) => {
                  const imageUrl = campaign.items.length ? campaign.items[0].imageUrl : null;

                  return (
                    <TouchableOpacity
                      key={key}
                      onPress={() => this._handleCampaignPress(campaign.id)}
                    >
                      <CampaignTile
                        source={imageUrl}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            }
          </View>

          <View style={styles.campaignContainer}>
            <MainText style={styles.headerText}>Explore</MainText>
            <View style={styles.exploreCollection}>
              <CampaignRow source="https://placeimg.com/500/100/nature" />
              <CampaignRow source="https://placeimg.com/500/100/animals" />
            </View>
          </View>

        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
        </View>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/development-mode'
    );
  };

  _handleCampaignPress = (id) => {
    this.props.selectCampaign(id);
    this.props.navigation.navigate('Campaign');
  }

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.campaigns.isLoading,
    myCampaigns: state.campaigns.list,
    allCampaigns: state.campaigns.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectCampaign: (id) => dispatch(selectCampaign(id)),
    loadCampaigns: () => dispatch(loadCampaigns()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    color: '#7F96FF',
    fontSize: 24,
  },
  developmentModeText: {
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  campaignContainer: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginLeft: 30,
    marginBottom: 20
  },
  myCampaignCollection: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    overflow: 'hidden'
  },
  exploreCollection: {
    flexDirection: 'column',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
