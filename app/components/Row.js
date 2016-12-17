import React, { Component } from 'react';

import {
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  TextInput,
  Animated,
  WebView,
  Dimensions
} from 'react-native';

const moment = require('moment');

export default class Row extends Component{
  constructor (props) {
   super(props);
   this.state = {
     showModal: false
   };
 }

  render() {
    const { meteor } = this.props;
    return (
      <View style={styles.meteorRow}>
        <Text style={styles.nameText}>Name: {meteor.name}</Text>
        <Text style={styles.nameText}>Mass: {meteor.mass}</Text>
        <Text style={styles.nameText}>Year: {moment(meteor.year).format('YYYY')}</Text>
      </View>
    );
  }
 }

const styles = StyleSheet.create({
  meteorRow: {
    flex: 1,
    padding: 10,
    margin: 3,
    flexDirection: 'column',
    backgroundColor: '#fff',
    width: 300,
    height: 100,
  },
  nameText: {
    color: 'red',
  },
})
