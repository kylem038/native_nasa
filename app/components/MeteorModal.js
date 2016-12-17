import React, { Component } from 'react';
import {
  Modal,
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  TextInput,
  Animated,
  WebView
} from 'react-native';

export default class MeteorModal extends Component{
  constructor (props) {
   super(props);
 }

  render() {
    return(
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={this.props.visible} >
        <View style={styles.modalView} >
          {this.renderName()}
        </View>
      </Modal>
    )
  }

  renderName() {
    const { meteor } = this.props;
      return (
        <View>
          <Text style={styles.nameText}>{meteor.name}</Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  modalView: {
    height: 100,
    width: 200,
  },
  nameText: {
    color: 'red',
    height: 100,
    width: 200,
  },
})
