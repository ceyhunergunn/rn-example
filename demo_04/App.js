import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators } from "@react-navigation/stack";
import React from "react";
import {View} from "react-native";
import HomeScreen from "./src/home";
import ToDoList from "./src/todo";
import LoginScreen from './src/loginscreen';
import ImageBG from './src/imagebg';
import ModalScreen from './src/modal';
import ScrollScreen from './src/scroll';
import StatusScreen from './src/status';
import SwitchScreen from './src/switch';



const Stack = createStackNavigator();
const App = () => {
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
                        title:'To Do List',
                        headerStyle:{
                            backgroundColor: 'black',
                        },
                        headerTintColor: 'white',
                        headerTitleStyle:{
                            fontWeight: '400',
                            fontSize: 26,
                            color: 'white'
                        }
                    }}/>
                <Stack.Screen 
                    name='LoginScreen'
                    component={LoginScreen}
                    options={{
                        title:'Login Screen',
                        headerStyle:{
                            backgroundColor: 'blue',
                        },
                        headerTintColor: 'white',
                        headerTitleStyle:{
                            fontWeight: '400',
                            fontSize: 26,
                            color: 'white'
                        }
                    }}/>
                <Stack.Screen 
                    name='ImageBG'
                    component={ImageBG}
                    options={{
                        title:'Image Screen',
                        headerStyle:{
                            backgroundColor: 'green',
                        },
                        headerTintColor: 'white',
                        headerTitleStyle:{
                            fontWeight: '400',
                            fontSize: 26,
                            color: 'white'
                        }
                    }}/>

                <Stack.Screen 
                    name='ModalScreen'
                    component={ModalScreen}
                    options={{
                        title:'Modal Screen',
                        headerStyle:{
                            backgroundColor: 'gray',
                        },
                        headerTintColor: 'white',
                        headerTitleStyle:{
                            fontWeight: '400',
                            fontSize: 26,
                            color: 'white'
                        }
                    }}/>
                <Stack.Screen 
                    name='ScrollScreen'
                    component={ScrollScreen}
                    options={{
                        title:'Scroll Screen',
                        headerStyle:{
                            backgroundColor: 'yellow',
                        },
                        headerTintColor: 'black',
                        headerTitleStyle:{
                            fontWeight: '400',
                            fontSize: 26,
                            color: 'black'
                        }
                    }}/>
                <Stack.Screen 
                    name='StatusScreen'
                    component={StatusScreen}
                    options={{
                        title:'Status Screen',
                        headerStyle:{
                            backgroundColor: 'black',
                        },
                        headerTintColor: 'white',
                        headerTitleStyle:{
                            fontWeight: '400',
                            fontSize: 26,
                            color: 'white'
                        }
                    }}/>
                
                <Stack.Screen 
                    name='SwitchScreen'
                    component={SwitchScreen}
                    options={{
                        title:'Switch Screen',
                        headerStyle:{
                            backgroundColor: 'black',
                        },
                        headerTintColor: 'white',
                        headerTitleStyle:{
                            fontWeight: '400',
                            fontSize: 26,
                            color: 'white'
                        }
                    }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default App;