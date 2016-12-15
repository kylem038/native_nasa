import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import Login from './Login';
import Profile from './Profile';
import Search from './Search';
import Visuals from './Visuals';

const routes = [
  { component: Login, title: 'Login to search' },
  { component: Profile, title: 'Profile' },
  { component: Search, title: 'Search' },
  { component: Visuals, title: 'Visuals' },
];

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navigator
        initialRoute={routes[2]}
        initialRouteStack={routes}
        renderScene={(route, navigator) => {
          let RouteComponent = route.component;
          return (
              <RouteComponent {...route} navigator={navigator} />
          )
        }}
      />
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
