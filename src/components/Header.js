import React, {Component} from 'react';
import {View, StyleSheet, Text } from 'react-native';


  export default class Header extends Component<{}> {

    styles = StyleSheet.create({
        banner: {
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#4169E1'
        }
    });

    render(){
        return(
            <View style={this.styles.banner}>
                <Text>CODELOOP - Cadastro de estudante</Text>
            </View>
        )
    }
  }