'use strict';

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {
	createStackNavigator,
	createDrawerNavigator
} from 'react-navigation';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';
import PropertyView from './PropertyView';
import Screen1 from './screen1' ;
import Screen2 from './screen2' ;

const StackNav = createStackNavigator({
	Home: { screen : SearchPage },
	Results: { screen : SearchResults },
	Property: { screen : PropertyView },
	Screen1 : { screen : Screen1  },
	Screen2 : { screen : Screen2 }
});

const App = createDrawerNavigator({
	Screen1 : { screen : Screen1 } ,
	Screen2 : { screen : Screen2 } ,
	Drawer : { screen : StackNav } ,
})

export default App;
