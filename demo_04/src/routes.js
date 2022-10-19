import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators } from "@react-navigation/stack";
import React from "react";
import {View} from "react-native";
import HomeScreen from "./home";
import ToDoList from "./todo"


const Stack = createStackNavigator();
const Route = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='HomeScreen'>
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{
                        headerShown: false,
                    }}/>
                <Stack.Screen
                    name="ToDoList"
                    component={ToDoList}
                    options={{
                        title:'To Do List'
                    }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Route;