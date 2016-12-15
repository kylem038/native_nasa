import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  TextInput,
  ScrollView,
  Switch,
  Animated
} from 'react-native';

import userContainer from '../containers/userContainer';
import Search from './Search';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user } = this.props;
    if (user) {
      return(
      <View style={styles.container}>
        <View>
          <Image
            style={styles.picture}
            source={{uri: user.picture}}
          />
          <Text style={styles.name}>Hello {user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
        <TouchableHighlight
          onPress={() => this.props.navigator.pop()}
        >
          <Text>Logout</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.props.navigator.push({
            component: Search,
            title: "Search"
          })}
        >
          <Text>Go To Search</Text>
        </TouchableHighlight>
      </View>);
    } else {
      return null;
    }
  }
}

export default userContainer(Profile);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 350,
    margin: 50,
  },
  name: {
    fontSize: 32,
    margin: 20,
    fontWeight: '300',
  },
  email: {
    fontSize: 18,
    margin: 20,
    fontWeight: '100',
  },
  picture: {
    height: 100,
    width: 100,
  }
})
