// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Dashboard';
import Dashboard from './screens/Dashboard';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerStyle: { backgroundColor: '#111' }, headerTintColor: '#fff' }}
      >
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Verses of Assurance' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
