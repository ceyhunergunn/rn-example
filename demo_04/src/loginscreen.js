import React, { useState } from "react";
import {
    Text, 
    View, 
    StyleSheet, 
    TouchableOpacity, 
    TextInput, 
    SafeAreaView, 
    ScrollView, 
    FlatList } from "react-native";

export default LoginScreen = () => {
    const [mail,setMail] = useState('');
    const [password,setPassword] = useState('');

    const checkUser = () => {
        if(mail == 'ceyhun@gmail.com' && password  == '123456') {
            alert('Giriş Başarılı')
        }else{
            alert('Başarısız')
        }
    }

    return(
    <View style={{
        flex:1, 
        alignItems:'center', 
        justifyContent:'center',
        padding: 10}}>

        <TextInput 
            value={mail}
            placeholder="E-Mail"
            keyboardType="email-address"
            onChangeText={value=> setMail(value)}
            placeholderTextColor="gray"
            style={{
                borderColor:'blue',
                borderWidth: 1, 
                width:'100%'}}/>

        <TextInput 
            value={password}
            placeholder="Şifre"
            secureTextEntry
            onChangeText={value=> setPassword(value)}
            placeholderTextColor="gray"
            style={{
                borderColor:'blue',
                borderWidth: 1, 
                width:'100%'}}/>

            <TouchableOpacity onPress={()  => checkUser()} 
            style={{
                alignContent:'center',
                alignItems: 'center',
                justifyContent:'center',
                backgroundColor:"blue", 
                padding: 5, 
                width: '100%',
                height:50, 
                borderRadius:30, 
                marginTop:20}}>
                <Text style={{fontSize:25, color : "white"}}>Giriş</Text>
            </TouchableOpacity>




    </View>
       
        
    )
}