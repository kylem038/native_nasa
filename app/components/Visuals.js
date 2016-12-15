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

export default class Visuals extends Component {
  constructor (props) {
   super(props);
 }

 render() {
    return (
      <View style={styles.visualize} >
        <Text style={styles.text}>Visuals</Text>
        <TouchableHighlight
          onPress={() => this.props.navigator.pop()}
        >
          <Text>Back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  visualize: {
    flex: 1,
    marginTop: 100,
  },
  text: {
    color: '#5D4152',
    textAlign: 'center',
  },
});
