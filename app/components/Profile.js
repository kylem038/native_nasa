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
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1E77E2',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 60,
  },
  picture: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'red',
    borderWidth: 2,
    margin: 10,
    top: 20,
  },
  name: {
    fontSize: 35,
    margin: 5,
    fontWeight: '500',
    color: 'white',
    top: 40,
  },
  email: {
    fontSize: 18,
    fontWeight: '100',
    top: 50,
  },
})
