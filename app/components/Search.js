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
import Visuals from './Visuals';

class Search extends Component{
  constructor (props) {
   super(props);
   this.state = {
     searchTerm: null,
   };
 }

 render() {
   const { user } = this.props;
   if(user) {
     return (
       <View style={styles.container}>
        <Text style={styles.text}>The Goonies</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.props.navigator.push({
            component: Visuals,
            title: "Visuals"
          })}
        >
          <Text>Go To Visualization</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={this._onCallApi.bind(this)}
        >
          <Text>Log Data</Text>
        </TouchableHighlight>
       </View>
     )
   }
   return (null)
  }

  _onCallApi() {
    let API_ENDPOINT = `https://data.nasa.gov/resource/y77d-th95.json`;
    fetch(API_ENDPOINT, {
      method: "GET"
    })
    .then((response) => response.json())
    .then((responseJSON) => console.log(responseJSON))
    .catch((error) => {
      Alert.alert(
        'Request Failed',
        [
          {text: 'OK'},
        ]
      )
    });
  }
}

export default userContainer(Search);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 50,
  },
  text: {
    color: '#0A6ECC',
  },
  button: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 5,
  }
});
