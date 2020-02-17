import React, {Component} from 'react';
import {View, StyleSheet, Text, Button } from 'react-native';


  export default class Item extends Component<{}> {

    styles = StyleSheet.create({
        banner: {
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#4169E1'
        }
    });

    render(){
        return(
            <View
                style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>{this.props.name}</Text>
                <Text style={styles.sectionDescription}>{this.props.schoolLevel}</Text>
                <Button
                  title="Go to Details"
                  onPress={() => navigation.navigate('FormStudent')}
                />
            </View>
        )
    }
    
  }
  const styles = StyleSheet.create({
   
   
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
    }
  });
  
