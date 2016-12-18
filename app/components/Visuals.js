import React, { Component } from 'react';
import { connect } from 'react-redux';

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

import MassChart from './MassChart';
import meteorContainer from '../containers/meteorContainer';

class Visuals extends Component {
  constructor (props) {
   super(props);
 }

 render() {
   const { meteors } = this.props;

    return (
      <Image source={require('../assets/space-bkgd.png')} style={styles.container}>
        <Text style={styles.text}>Visuals</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.props.navigator.pop()}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableHighlight>
        <View
          style={styles.visuals}
        >
          <Text style={styles.title}>Meteorite Mass in One Year</Text>
          <MassChart meteors={this.props.meteors}/>
        </View>
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
  },
  visuals: {
    top: 50,
  },
  title: {
    color: 'white',
  }
});
