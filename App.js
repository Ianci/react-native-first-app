import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Categories } from './screens/Categories';
import { MealDetails } from './screens/MealDetails';
import { MealsScreen } from './screens/MealsScreen';
import { enableScreens } from 'react-native-screens';
import { FilterScreen } from './screens/FilterScreen';

enableScreens();

const Stack = createStackNavigator()
export default function App() {
    return (
    <NavigationContainer>
     
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Categories" component={Categories} 
         options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Meals" component={MealsScreen}
         options={{
           
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
        }}/>
        <Stack.Screen name="Meals details" component={MealDetails} 
         options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
         <Stack.Screen name="Filter" component={FilterScreen}
         options={{
           
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
        }}/>
      </Stack.Navigator>
    </NavigationContainer>

    );
};

