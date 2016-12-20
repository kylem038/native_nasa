import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import Profile from './Profile';
import userContainer from '../containers/userContainer';
import Auth0Lock from 'react-native-lock';
const credentials = require('../../auth0-credentials');
const lock = new Auth0Lock(credentials);

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Image source={require('../assets/space-bkgd.png')} style={styles.container}>
        <TouchableHighlight
          style={styles.signInButton}
          onPress={this._onLogin.bind(this)}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
        <Text style={styles.text}>Native NASA</Text>
      </Image>
    )
  }

  _onLogin() {
    const { getUser } = this.props

    lock.show({
      closable: true,
    }, (err, profile, token) => {
      if (err) {
        console.log(err);
        return;
      }
      getUser(profile)
      this.props.navigator.push({
        component: Profile,
        title: 'Profile',
        profile: profile,
        token: token,
      });
    });
  }
}

export default userContainer(Login);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    height: null,
    width: null,
  },
  signInButton: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderColor: 'red',
    borderRadius: 100,
    borderWidth: 5,
    height: 120,
    width: 120,
    justifyContent: 'center',
    margin: 10,
    top: 100,
  },
  buttonText: {
    color: 'red',
    fontSize: 25,
    fontWeight: 'bold',
  },
  text: {
    color: 'red',
    fontFamily: 'American Typewriter',
    fontSize: 75,
    fontWeight: 'bold',
    top: 175,
    textAlign: 'center',
  }
});
