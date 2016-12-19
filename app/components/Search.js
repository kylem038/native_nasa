import Immutable from 'immutable';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ActivityIndicator,
  Animated,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import userContainer from '../containers/userContainer';
import meteorContainer from '../containers/meteorContainer';
import Profile from './Profile';
import Visuals from './Visuals';
import Row from './Row';

class Search extends Component {
  constructor (props) {
    super(props);
    this.state = {
      searchTerm: null,
      isLoading: false,
    };
  }

  render() {
    const meteors = this.props.meteors.meteors.toJS();
    const { user } = this.props;
    console.log(meteors);
    if(user) {
      return (
        <Image source={require('../assets/space-bkgd.png')}
          style={styles.container}>
          <TouchableHighlight
            style={styles.button}
            onPress={this._onCallApi.bind(this)}
          >
            <Text style={styles.buttonText}>Search for Meteors</Text>
          </TouchableHighlight>
          {/* {spinner = this.state.isLoading ?
            (<ActivityIndicator
                style={styles.spinner}
                size='large'
                color='red'
            /> ) : */}
            <ScrollView
              style={styles.scrollView}>
              {/* {meteors.map(function(meteor, i) {
                return <Row key={i} meteor={meteor} />}
              )} */}
            </ScrollView>
          {/* } */}
        </Image>
      )
    }
    return (null)
  }

  _onCallApi() {
    const component = this;
    const { getMeteors } = this.props;

    let API_ENDPOINT = `https://data.nasa.gov/resource/y77d-th95.json`;
    fetch(API_ENDPOINT, {
      method: "GET"
    })
    .then((response) => response.json())
    .then((responseJSON) => {
      getMeteors(responseJSON);
    })
    .catch((error) => {
      getMeteors([]);
      Alert.alert(
        'Request Failed',
        [
          {text: 'OK'},
        ]
      )
    });
    this.setState({ isLoading: true });
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
    top: 70,
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
    top: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'red',
    fontSize: 25,
  },
  spinner: {
    top: 150,
  },
  scrollView: {
    top: 90,
    backgroundColor: '#1E77E2',
    height: 800,
  },
});
