import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';


import Profile from './Profile';
import Auth0Lock from 'react-native-lock';
const credentials = require('../../auth0-credentials');
const lock = new Auth0Lock(credentials);

export default class Login extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.signInButton}
          onPress={this._onLogin.bind(this)}
        >
          <Text>Login</Text>
        </TouchableHighlight>
      </View>
    )
  }

  _onLogin() {
    lock.show({
      closable: true,
    }, (err, profile, token) => {
      if (err) {
        console.log(err);
        return;
      }
      this.props.navigator.push({
        component: Profile,
        title: 'Profile',
        // passProps: {
        //   profile: profile,
        //   token: token,
        // }
      });
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  signInButton: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#D9DADF',
    margin: 100,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
