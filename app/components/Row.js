import React, { Component } from 'react';

import {
  Alert,
  Animated,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const moment = require('moment');

export default class Row extends Component {
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
        <Text style={styles.title}>Name: {meteor.name}</Text>
        <Text style={styles.text}>Mass: {meteor.mass}g</Text>
        <Text style={styles.text}>Year: {moment(meteor.year).format('YYYY')}</Text>
      </View>
    );
  }
 }

const styles = StyleSheet.create({
  meteorRow: {
    flex: 1,
    padding: 10,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'column',
    backgroundColor: '#fff',
    width: 300,
    height: 75,
  },
  title: {
    fontWeight: 'bold',
    color: 'red',
  },
  text: {
    color: 'red',
  },
})
