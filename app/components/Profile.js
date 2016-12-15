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
          // onPress={}
        >
          <Text>Logout</Text>
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
    height: 300,
    width: 350,
  },
  name: {
    fontSize: 42,
    margin: 20,
    fontWeight: '300',
  },
  email: {
    fontSize: 18,
    margin: 20,
    fontWeight: '100',
  },
  picture: {
    height: 150,
    width: 150,
    borderRadius: 75,
  }
})
