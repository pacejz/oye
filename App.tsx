import * as React from 'react';
import OnBoarding from './components/pages/onboarding';
import Tutorial from './components/pages/tutorial';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="onboarding"
          component={OnBoarding}
        />
         <Stack.Screen
          name="tutorial"
          component={Tutorial}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
