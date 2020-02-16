import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import App from './screens/App';
import ScreenForm from './screens/ScreenForm';
const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="App"
          component={App}
        />  
        <Stack.Screen 
            name="Formulario" 
            component={ScreenForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}