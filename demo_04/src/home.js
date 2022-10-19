import React, {useState} from "react";
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, StatusBar } from "react-native";

const HomeScreen = ({navigation}) => {

    const hidden = true;

    return(
        <SafeAreaView style={{flex:1, width: '100%',alignItems: 'center'}}>
            <StatusBar hidden={hidden}/>
            <ScrollView style={{flex:1, width: '100%'}}>
                <TouchableOpacity 
                onPress={()=>navigation.navigate('ToDoList')}
                style={{
                    flex:1, 
                    margin: 15,
                    width:'90%', 
                    height: 50, 
                    alignItems:'center',
                    justifyContent:'center', 
                    borderRadius: 30,
                    backgroundColor: 'black'}}>
                    <Text style={{
                        color: 'white', 
                        fontWeight:'300',
                        fontSize:26}}> To Do List</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=>navigation.navigate('LoginScreen')}
                style={{
                    flex:1, 
                    margin: 15,
                    width:'90%', 
                    height: 50, 
                    alignItems:'center',
                    justifyContent:'center', 
                    borderRadius: 30,
                    backgroundColor: 'black'}}>
                    <Text style={{
                        color: 'white', 
                        fontWeight:'300',
                        fontSize:26}}>Login Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=>navigation.navigate('ImageBG')}
                style={{
                    flex:1, 
                    margin: 15,
                    width:'90%', 
                    height: 50, 
                    alignItems:'center',
                    justifyContent:'center', 
                    borderRadius: 30,
                    backgroundColor: 'black'}}>
                    <Text style={{
                        color: 'white', 
                        fontWeight:'300',
                        fontSize:26}}>Image Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=>navigation.navigate('ModalScreen')}
                style={{
                    flex:1, 
                    margin: 15,
                    width:'90%', 
                    height: 50, 
                    alignItems:'center',
                    justifyContent:'center', 
                    borderRadius: 30,
                    backgroundColor: 'black'}}>
                    <Text style={{
                        color: 'white', 
                        fontWeight:'300',
                        fontSize:26}}>Modal Screen</Text>
                </TouchableOpacity>
            
                <TouchableOpacity 
                onPress={()=>navigation.navigate('ScrollScreen')}
                style={{
                    flex:1, 
                    margin: 15,
                    width:'90%', 
                    height: 50, 
                    alignItems:'center',
                    justifyContent:'center', 
                    borderRadius: 30,
                    backgroundColor: 'black'}}>
                    <Text style={{
                        color: 'white', 
                        fontWeight:'300',
                        fontSize:26}}>Scroll Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=>navigation.navigate('StatusScreen')}
                style={{
                    flex:1, 
                    margin: 15,
                    width:'90%', 
                    height: 50, 
                    alignItems:'center',
                    justifyContent:'center', 
                    borderRadius: 30,
                    backgroundColor: 'black'}}>
                    <Text style={{
                        color: 'white', 
                        fontWeight:'300',
                        fontSize:26}}>Status Screen</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=>navigation.navigate('SwitchScreen')}
                style={{
                    flex:1, 
                    margin: 15,
                    width:'90%', 
                    height: 50, 
                    alignItems:'center',
                    justifyContent:'center', 
                    borderRadius: 30,
                    backgroundColor: 'black'}}>
                    <Text style={{
                        color: 'white', 
                        fontWeight:'300',
                        fontSize:26}}>Switch Screen</Text>
                </TouchableOpacity>
                
            
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;