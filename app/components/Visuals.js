import React, { Component } from 'react';
import { connect } from 'react-redux';
import meteorContainer from '../containers/meteorContainer';
import FellPerYearChart from './FellPerYearChart';

import {
  Alert,
  Animated,
  Image,
  ScrollView,
  Switch,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

class Visuals extends Component {
  constructor (props) {
   super(props);
 }

 render() {
    return (
      <Image source={require('../assets/space-bkgd.png')} style={styles.container}>
        <FellPerYearChart meteors={this.props.meteors}/>
      </Image>
    )
  }
}

export default meteorContainer(Visuals);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: null,
    height: null,
  },
  text: {
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
    top: 20,
  },
  button: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderColor: '#1E77E2',
    borderWidth: 2,
    margin: 10,
    shadowColor: '#1b71E2',
    shadowRadius: 10,
    borderRadius: 5,
    top: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'red',
    fontSize: 25,
  }
});
