import React from "react";
import { ImageBackground, Text, View } from "react-native";

const ImageBG = () =>{

    return(
    <View style={{flex:1}} >
        <ImageBackground 
        source={require('../assets/camping.jpg')} 
        resizeMode="cover" 
        style={{
            flex:1,
            justifyContent: 'space-evenly',            
        }}>
        <Text style={{
            color: 'white',
            fontSize:42,
            lineHeight:84,
            fontWeight: 'bold',
            textAlign:'center',
            backgroundColor: '#000000c0'
        }}>Image</Text>
        <Text style={{
            color: 'white',
            fontSize:42,
            lineHeight:84,
            fontWeight: 'bold',
            textAlign:'center',
            backgroundColor: '#000000c0'
        }}>Background</Text>
        </ImageBackground>
    </View>
    );
}

export default ImageBG;