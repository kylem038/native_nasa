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

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
        <View>
          <Image
            style={styles.picture}
            // source={{uri: this.props.profile.picture}}
          />
          <Text style={styles.name}>Hello User</Text>
          {/* <Text style={styles.email}>{this.props.profile.email}</Text> */}
        </View>
        <TouchableHighlight
          // onPress={}
        >
          <Text>Logout</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'blue',
    justifyContent: 'flex-start',
    alignItems: 'center',
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
