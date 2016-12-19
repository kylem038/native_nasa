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
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: null,
    height: null,
  },
  signInButton: {
    height: 100,
    width: 100,
    borderRadius: 100,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderColor: 'red',
    borderWidth: 3,
    margin: 10,
    shadowColor: '#1b71E2',
    shadowRadius: 10,
    top: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'red',
    fontSize: 25,
  },
  text: {
    color: 'red',
    fontSize: 35,
    fontWeight: '300',
    top: 250,
  }
});
