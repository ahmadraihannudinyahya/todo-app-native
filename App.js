import React from "react";
import { NativeBaseProvider, StatusBar } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import List from "./screen/List";
import Detail from "./screen/Detail";

// Define the config
const Stack = createStackNavigator();

const config = {
};

export default function App() {
  return (
    <NativeBaseProvider config={config}>
      <NavigationContainer initialRouteName = "Todo List" screenOptions={{headerStyle:{backgroundColor:'#1a91ff'}}}>
        <Stack.Navigator>
          <Stack.Screen name = "Todo List" component = {List}/>
          <Stack.Screen name = "Detail" component = {Detail}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
