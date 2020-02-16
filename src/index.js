import React, {Component} from 'react';
import {View, StyleSheet, Container, Animated, ScrollView, Text, StatusBar, SafeAreaView} from 'react-native';

import FormStudent from './components/FormStudent';

let student = {
    name: 'Jooa',
    dateOfBirth: '25/08/2005',
    schoolLevel: '4'
};

let address = {
    codeZip: "85852222",
    publicPlace: "Rua guilhermina",
    number: "5485",
    complement: "Casa",
    neighborhood: "Centro",
    city: "Foz",
    state: "Parana"
}

let mother = {
    motherName: "Maria",
    cpf: "585255",
    preferredDate: "5"
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        margin: 30,
        backgroundColor: '#4169E1'
    },
    banner: {
        height: 60,
        padding: 20,
        backgroundColor: '#4169E1'  
    },
    bannerText: {
        fontWeight: "bold"
    }
  });

  export default class Index extends Component {
      render(){
          return(
          <>
            <StatusBar barStyle="dark-content" />
            <View style={styles.banner}>
                <Text style={styles.bannerText}>CODELOOP - Cadastro de estudante</Text>
            </View>
            <ScrollView>
                <View style={styles.content}>
                    <FormStudent 
                        id="1"
                        student = {student}
                        address = {address}
                        mother = {mother}
                    />
                </View>
            </ScrollView>
          </>
          )
      }
  }