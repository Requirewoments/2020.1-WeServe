import React, { Component } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

import HomePageButton from '../components/HomePageButton'
import HomePageActionButton from '../components/HomePageActionButton'

export default class HomePage extends Component {
  render() {
    return (
      <View style={styles.mainstyling}>
        <Text style={styles.title}>O que você precisa hoje?</Text>
        <View style={styles.horizontalDivider}/>
        <HomePageActionButton
          title="Serviços"
          onPress={() => this.props.navigation.navigate('ServicesIndex')}/>
        <HomePageActionButton
          title="Prestar serviço"
          onPress={() => this.props.navigation.navigate('ServiceSubmit')}/>
        <HomePageActionButton
          title="Requisitar serviço"
          onPress={() => this.props.navigation.navigate('ServiceSubmit')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginVertical: 10,
    fontFamily: 'Raleway-Normal',
    alignSelf: 'center',
    fontSize: 23,
  },
  button: {

  },
  horizontalDivider: {
    marginVertical: 10,
    borderBottomColor: '#bababa',
    borderBottomWidth: 1,
    marginHorizontal: 10
  }
});
