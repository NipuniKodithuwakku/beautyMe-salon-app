import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './src/components/auth';
import HomeScreen from './src/components/home';
import LoginScreen from './src/components/login';
import RegisterScreen from './src/components/register';
import Services from './src/components/service';
//import { FindSalon } from './src/components/findSalonScreen';
import About from './src/components/aboutus';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SalonRating from './src/components/ratings';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Auth"
            component={AuthScreen}
            options={{
              headerShown: false,
              title: 'Welcome',
              headerStyle: {
                backgroundColor: '#ea3c7b',
              },
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: 'Login',
              headerStyle: {
                backgroundColor: '#ea3c7b',
                color: '#fff',
              },
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              title: 'Register',
              headerStyle: {
                backgroundColor: '#ea3c7b',
                color: '#fff',
              },
            }}
          />
          <Stack.Screen
            name="Services"
            component={Services}
            options={{
              title: 'Services',
              headerStyle: {
                backgroundColor: '#ea3c7b',
                color: '#fff',
              },
            }}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{
              title: 'About',
              headerStyle: {
                backgroundColor: '#ea3c7b',
                color: '#fff',
              },
            }}
          />
          <Stack.Screen
            name="Rating"
            component={SalonRating}
            options={{
              title: 'Rating',
              headerStyle: {
                backgroundColor: '#ea3c7b',
                color: '#fff',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
