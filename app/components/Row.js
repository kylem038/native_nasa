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

import MeteorModal from './MeteorModal';

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
        <MeteorModal style={styles.modal}
                   visible={this.state.showModal}
                   meteor={meteor} />
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
})
