import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './app/components/App';

class Main extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('native_nasa', () => Main);
