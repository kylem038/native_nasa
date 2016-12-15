import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
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
