import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navigator from './components/Navigator.js';

export default class App extends React.Component {
  state = { };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>React Native App</Text>
        <Navigator/>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
  eventsContainer: {
    borderWidth: 1,
    borderStyle: 'dotted'
  },
  sectionHeaderStyle:{
    backgroundColor : '#CDDC39',
    fontSize : 20,
    padding: 5,
    color: '#fff',
  }
});
