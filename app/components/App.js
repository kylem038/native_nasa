import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import {
  Navigator,
  Text,
  View
} from 'react-native';

import Login from './Login';
import Profile from './Profile';

const routes = [
  { component: Login, title: 'Login to search' },
  { component: Profile, title: 'Profile' },

];

export default class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) => {
          let RouteComponent = route.component;
          return (
            <RouteComponent {...route} navigator={navigator} />
          )
        }}
      />
      //
      // <View>
      //   <Text style={styles.hello}>Native NASA</Text>
      //   <Login />
      // </View>
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
