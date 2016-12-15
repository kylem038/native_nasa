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
          onPress={() => this.props.navigator.push({
            component: Visuals,
            title: "Visuals"
          })}
        >
          <Text>Go To Visualization</Text>
        </TouchableHighlight>
       </View>
     )
   }
   return (null)
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
  }
});
