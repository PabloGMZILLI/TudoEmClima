import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import About from './src/pages/About';
import Detail from './src/pages/Detail';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#D9CFF3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={
            {
              title: 'Previsão do tempo',
            }
          }
        />
        <Stack.Screen
          name="About"
          component={About}
          options={
            { title: "Sobre" }
          }
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={
            { title: "Previsão detalhada" }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;