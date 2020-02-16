import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Button } from 'react-native';

import {
  Header,
  Colors,
} from '../../node_modules/react-native/Libraries/NewAppScreen';

const App: () => React$Node = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View
            
              style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Estudante 1</Text>
              <Text style={styles.sectionDescription}>Joao</Text>
              <Button
                title="Go to Details"
                onPress={() => navigation.navigate('FormStudent')}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Estudane 2</Text>
              <Text style={styles.sectionDescription}>Pedro</Text>
            </View>
            <View
              onResponderMove = {() => navigation.navigate('FormStudent') }
              style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Estudante 1</Text>
              <Text style={styles.sectionDescription}>Joao</Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Estudane 2</Text>
              <Text style={styles.sectionDescription}>Pedro</Text>
            </View>
            <View
              onResponderMove = {() => navigation.navigate('FormStudent') }
              style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Estudante 1</Text>
              <Text style={styles.sectionDescription}>Joao</Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Estudane 2</Text>
              <Text style={styles.sectionDescription}>Pedro</Text>
            </View>
            <View
              onResponderMove = {() => navigation.navigate('FormStudent') }
              style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Estudante 1</Text>
              <Text style={styles.sectionDescription}>Joao</Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Estudane 2</Text>
              <Text style={styles.sectionDescription}>Pedro</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

App.navigationOptions = {
  title: 'App',
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 25,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark
  }
});

export default App;
