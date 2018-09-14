import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    ActivityIndicator,
    Image,
} from 'react-native';

export default class Screen1 extends Component {
    render(){
        return(
            <View>
                <View style = {{width:'20%',height:'20%'}} />
                <Text>This is screen 1</Text>
                <View style = {{width:'20%',height:'20%'}} />
                <Button title='Open Drawer' onPress={ () => { this.props.navigation.openDrawer() } } />
            </View>
        );
    }
}