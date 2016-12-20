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
import Login from './Login';
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
        <Image
          style={styles.picture}
          source={{uri: user.picture}}
        />
        <Text style={styles.name}>Hello</Text>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
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
    backgroundColor: '#1E77E2',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  picture: {
    borderColor: 'red',
    borderRadius: 100,
    borderWidth: 2,
    height: 200,
    width: 200,
    margin: 10,
    top: 20,
  },
  name: {
    color: 'white',
    fontFamily: 'American Typewriter',
    fontWeight: 'bold',
    fontSize: 35,
    margin: 5,
    top: 40,
  },
  email: {
    fontSize: 18,
    fontWeight: '100',
    top: 50,
  },
})
