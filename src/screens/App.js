import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AsyncStorage, FlatList} from 'react-native';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Button } from 'react-native';
import { Item } from '../components/Item';

export default class App extends Component<{}>{
  
  constructor(inProps) {
    super(inProps);
    this.state = { listData : [] };
    
    this.getAll();

  }
  async getAll(){
    try {
      this.state = { listData : [] };
        AsyncStorage.getAllKeys((err, keys) => {
          AsyncStorage.multiGet(keys, (err, datas) => {

          datas.map((result, i, data) => {
            let key = data[i][0];
            let valueParse = [];
            valueParse.push(JSON.parse(data[i][1])[0]);
          
            let listData = {
              id : key,
              student : valueParse[0].student,
              address :valueParse[0].address,
              mother : valueParse[0].mother 
            }
            
            this.state.listData.push(listData);
          
          });
        });
      });
    }catch (error){
      console.log(error);
    } 
  }

  render( ){
    
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={styles.banner}>
                  <Text style={styles.bannerText}>CODELOOP - Cadastro de estudante</Text>
                  <Button title="Add"  onPress={() => this.props.navigation.navigate('Formulario')} ></Button>
              </View>
            <View style={styles.body}>
              <FlatList
                  data={this.state.listData}
                  extraData= {this.state}
                  renderItem={({ item }) => (
                    <View
                      style={styles.sectionContainer}>
                      <Text style={styles.sectionTitle}>{item.student.name}</Text>
                      <Text style={styles.sectionDescription}>{item.student.schoolLevel}</Text>
                      <Button
                        title="Go to Details"
                        onPress={() => this.props.navigation.navigate('Formulario', {item})}
                      />
                    </View>)}
                />
            </View>
            
        </SafeAreaView>
      </>
    );
  }
};

App.navigationOptions = {
  title: 'App',
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#4169E1'  
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#FFF',
  },
  sectionContainer: {
    marginTop: 25,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#000'
  },
  banner: {
    height: 80,
    padding: 20,
    backgroundColor: '#4169E1'  
  },
  bannerText: {
    fontWeight: "bold"
  },
  bottonAdd: {
    width: 10,
    marginTop: 100
  }

});
