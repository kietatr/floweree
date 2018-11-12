import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

export class IntroScreen extends React.Component {
	static navigationOptions = {
		title: 'Intro Screen',
		headerStyle: {
			backgroundColor: '#FFCB8B',
		},
		headerTintColor: '#fff',
	};

  	_onPressButton() {
  		Alert.alert('Here is information on how you play the game')
	}	

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#FFCB8B" }}>
        <Image
        	source = {require('./assets/flowers/homescreenflower.png')}
        	style= {{width: 100, height: 100}}
        />
        <Button
          title= "Play Game"
          onPress={() => this.props.navigation.navigate('Game')}
        />
        <Button
            title= "How to Play"
            onPress={() => this._onPressButton()}
        />
        </View>
    );
  }
}

export default IntroScreen;