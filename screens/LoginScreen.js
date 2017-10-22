import React from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MainText } from '../components/MainText';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <ScrollView style={[styles.container,
                          styles.loginBackground]}>
        <View style={styles.loginLogo}>
          <Image
            source={require('../assets/images/handshake-med.png')}
          />
          <MainText style={styles.loginHeaderText}>TrustFund</MainText>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Ionicons
              name='md-person'
              size={28}
              style={{ marginBottom: -3 }}
              color='#5171FF'
            />
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#93A6F9"
              onChangeText={(username) => this.setState({username})}
              value={this.state.username}
              underlineColorAndroid='#5171FF'
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons
              name='md-lock'
              size={28}
              style={{ marginBottom: -3 }}
              color='#5171FF'
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#93A6F9"
              secureTextEntry={true}
              onChangeText={(password) => this.setState({description})}
              value={this.state.description}
              underlineColorAndroid='#5171FF'
            />
          </View>
          <Button
            style={styles.createButton}
            onPress={this._Login}
            title="Login"
            color="#5171FF"
            accessibilityLabel="Login"
          />
        </View>
      </ScrollView>
    );
  }

  _Login = () => {
    //Authenticate
    this.props.navigation.navigate('Main');
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  loginBackground: {
    backgroundColor: '#ffffff'
  },
  loginLogo: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginHeaderText: {
    fontSize: 40,
    color: '#5171ff'
  },
  formContainer: {
    marginHorizontal: 30,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    //justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  input: {
    height: 60,
    fontSize: 16,
    padding: 10,
    flex: 1

  },
  createButton: {
    fontSize: 20,
    padding: 5,
    height: 60,
  }
});
