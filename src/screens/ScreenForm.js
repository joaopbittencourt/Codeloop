import React, {Component} from 'react';
import { View, TextInput, Button, StyleSheet, StatusBar, Text, ScrollView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FormStudent from '../components/FormStudent';

export default class ScreenForm extends Component{
    render(){
      const undefinedParam = this.props.route.params !== undefined ? false : true; 
         let data = {
          id : !undefinedParam ? this.props.route.params.item.id : Date.now(),
          student : !undefinedParam ? this.props.route.params.item.student : {
              name: '',
              dateOfBirth: '',
              schoolLevel: ''
          },
          address : !undefinedParam ? this.props.route.params.item.address :  {
              codeZip: '',
              publicPlace: '',
              number: '',
              complement: '',
              neighborhood:'',
              city: '',
              state: ''
          },
          mother : !undefinedParam ? this.props.route.params.item.mother :  {
              motherName: '',
              cpf: '',
              preferredDate: ''
          }
      }

      return(
        <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.banner}>
          <Text style={styles.bannerText}>CODELOOP - Cadastro de estudante</Text>
          
      </View>
        <ScrollView>
                <View style={styles.content}>
                    <FormStudent 
                        student = {data.student}
                        address = {data.address}
                        mother = {data.mother}
                    />
                </View>
              </ScrollView>
      </>
      )
    }
}

ScreenForm.navigationOptions = {
  title: 'Formulario',
}

const styles = StyleSheet.create({
  banner: {
    height: 60,
    padding: 20,
    backgroundColor: '#4169E1'  
  },
  bannerText: {
      fontWeight: "bold"
  }
   
  });