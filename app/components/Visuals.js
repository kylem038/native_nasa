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
        <Text style={styles.text}>Visuals</Text>
        <Text style={styles.text}>Meteors Per Year</Text>
        <FellPerYearChart style={styles.chart} meteors={this.props.meteors}/>
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
  chart: {
    backgroundColor: 'white',
  },

});
