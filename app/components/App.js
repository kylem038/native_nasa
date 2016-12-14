import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import {
  Text,
  View
} from 'react-native';

import Login from './Login';


export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={styles.hello}>Native NASA</Text>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hello: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    top: 200,
  }
})

AppRegistry.registerComponent('native_nasa', () => App);
