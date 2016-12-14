import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

// import userContainer from '../containers/userContainer';
// import Search from './Search';
import Auth0Lock from 'react-native-lock';
const credentials = require('../../auth0-credentials');
const lock = new Auth0Lock(credentials);

export default class Login extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.signInButton}
          onPress={this._onLogin}
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
        name: 'Profile',
        passProps: {
          profile: profile,
          token: token,
        }
      });
    });
  }

  // _onLogin() {

  //   // const { getUser } = this.props;
  //
  //   lock.show({
  //   }, (err, profile, token) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     } else { console.log(profile); }
  //   })
  //   // getUser(profile)
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
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
