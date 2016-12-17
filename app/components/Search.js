import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Animated,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

const _ = require('underscore');

import userContainer from '../containers/userContainer';
import meteorContainer from '../containers/meteorContainer';
import Profile from './Profile';
import Visuals from './Visuals';
import Results from './Results';

class Search extends Component{
  constructor (props) {
   super(props);
   this.state = {
     searchTerm: null,
   };
 }

 render() {
   const { user, meteors } = this.props;
   if(user) {
     return (
       <Image source={require('../assets/space-bkgd.png')}
          style={styles.container}>
        <Text style={styles.text}>Search Page</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.props.navigator.push({
            component: Profile,
            title: "Profile"
          })}
        >
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.props.navigator.push({
            component: Visuals,
            title: "Visuals"
          })}
        >
          <Text style={styles.buttonText}>Go To Visualization</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={this._onCallApi.bind(this)}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableHighlight>
        <ScrollView
          style={styles.scrollView}>
          {meteors.map(function(meteor, i) {
            return <Results key={i} meteor={meteor} />}
          )}
        </ScrollView>
      </Image>
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
    .then((responseJSON) => {
      // getMeteors(responseJSON)
      const meteorYearList = responseJSON.map((meteor) => meteor.year);
      const meteorsByYear = _.sortBy(meteorYearList);
      console.log(meteorsByYear);
      const meteorNumber = responseJSON.length;
      // const meteorNames = responseJSON.
      // Alert.alert(
      //   'Success!',
      //   `We found ${meteorNumber} meteors!`,
      //   [
      //     {text: 'OK'},
      //   ]
      // )
    })
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

export default meteorContainer(
                userContainer(Search)
              )

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
    fontWeight: '300',
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
  scrollView: {
    // top: 20,
    // backgroundColor: '#1E77E2',
    // height: 400
  },
});
