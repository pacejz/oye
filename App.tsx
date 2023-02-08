import * as React from 'react';
import OnBoarding from './components/pages/onboarding';
import Tutorial from './components/pages/tutorial';
import Register from './components/pages/register';
import SignIn from './components/pages/signin';
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
        <Stack.Screen
          name="register"
          component={Register}
        />
        <Stack.Screen
          name="signin"
          component={SignIn}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
