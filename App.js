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

const StackNav = createStackNavigator({
	Home: { screen: SearchPage },
	Results: { screen: SearchResults },
	Property: { screen: PropertyView },
});

const App = createDrawerNavigator({
	Drawer : { screen : StackNav }
})

export default App;
