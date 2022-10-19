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

/*

******************erkan yerleştirme*******************

export default App = () => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.text}>HEADER</Text>
            </View>

            <View style={styles.main}>
                <View style={styles.side}>
                    <Text style={styles.text}>SIDE</Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.text}>CONTENT</Text>
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.text}>FOOTER</Text>
            </View>

        </View>
        
        
    )
} 
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: "red",
    }, 
    text:{
        color: "white",
    },
    header:{
        flex: 2,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: "black",
        fontSize: 25,
    },
    main:{
        flexDirection: "row",
        flex: 5,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: "red",
        fontSize:20,
    },
    side:{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: "green",
        fontSize:20,
    },
    content:{
        flex: 3,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: "red",
        fontSize:20,
    },
    footer:{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: "blue",
        fontSize: 15,
    },

})
*/
/*

*****************useState Kullanımı*******************************

export default App = () => {

    const [sayi,setSayi]= useState(0)

    return (
        <View style={{flex:1,alignItems:'center', justifyContent:'center', alignContent: 'center'}}>
            <TouchableOpacity onPress={()=>{
                setSayi(sayi+1);
                console.log(sayi);
            }} style={{backgroundColor:"green", padding: 5, width: 50,height:50, borderRadius:50,marginBottom:30}}>
                <Text style={{fontSize:25, color : "white"}}>+</Text>
            </TouchableOpacity>

            <Text style={{fontSize:36, color: "black"}}> {sayi}</Text>

            <TouchableOpacity onPress={()=>{
                setSayi(sayi-1);
                console.log(sayi);
            }} style={{backgroundColor:"red", padding: 5, width: 50,height:50, borderRadius:50, marginTop:30}}>
                <Text style={{fontSize:25, color : "white"}}>-</Text>
            </TouchableOpacity>

        </View>
       
        
        
    )
} 
*/
/*

********************Form İşlemleri************************


export default App = () => {
    const [sayi,setSayi] = useState('');
    const [faktoriyel,setFaktoriyel] = useState('');

    const getFaktoriyel = val => {
        let f=1
        for (let index = 1; index <= val < index++;)
        {
            f*=index;
        }
        console.log(f)
        return f;
    };

    return(
    <View style={{
        flex:1, 
        alignItems:'center', 
        justifyContent:'center',
        padding: 10}}>

        <TextInput 
        value={sayi}
        placeholder="Sayı Giriniz"
        onChangeText={value=> setSayi(value)}
        placeholderTextColor="gray"
        style={{
            borderColor:'blue',
            borderWidth: 1, 
            width:'100%'}}/>

            <TouchableOpacity onPress={()  => {
                setFaktoriyel(getFaktoriyel(sayi));
            }} 
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
                <Text style={{fontSize:25, color : "white"}}>Hesapla</Text>
            </TouchableOpacity>

            <Text style={{fontSize:25, color : "blue", marginTop: 30}}>{faktoriyel != '' ? sayi + '! = ' +faktoriyel: ''}</Text>


    </View>
       
        
    )
}
*/
/* 

***********************Login Screen Yapımı ************************
export default App = () => {
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
*/
/*
*******************TO DO LİST YAPIMI****************************
export default App = () => {

    let initToDoList =[
        {title:'Yemek Ye',complete:false},
        {title:'Spor Yap',complete:true},
        {title:'Çalış',complete:true},
        {title:'Uyu',complete:false}];

    const [todoTitle,setToDoTitle] = useState('');
    const [todoList,setToDoList] = useState(initToDoList);
    const [isLoading,setIsLoading] = useState(false)

    console.log(todoList)

    const addToDo = async () => {
        try {
            let data = {title: todoTitle , complete: false};
            let newList = todoList;
            await newList.push(data);
            setToDoList(newList);
            setToDoTitle('');
        } catch (error) {
            alert(error)            
        }
        
    }

    const updateToDo = (todo,index) => {
        let newList = [];
            
        todoList.forEach((item,i) => {
            i == index
                ? newList.push({title: item.title, complete: !item.complete})
                : newList.push(item)
        });
        setToDoList(newList);
        setToDoTitle('');
    }
    
    const deleteToDo = (todo,index) => {
        let newList = [];
            
        todoList.forEach((item,i) => {
            if(i != index){
                newList.push(item)
            }
 
        });
        setToDoList(newList);
        setToDoTitle('');
    }

    return(
        
        <SafeAreaView style ={{
            flex:1, 
            alignItems: 'center', 
            justifyContent: 'center'}}>

            <View style ={{
                flex:0.5,
                alignItems:'center',
                justifyContent: 'center',
                padding:10,
                width:"100%"
            }}>
                <TextInput
                onChangeText={value => setToDoTitle(value)}
                value={todoTitle}
                placeholder='Aktiviteyi Yazınız...'
                style={{
                    width:"100%",
                    borderColor: 'blue',
                    borderWidth: 1
                }}/>
            </View>

            <ScrollView style={{
                flex:3,
                width:'100%',
            }}>
                {todoList.map((todo,index) => (
                    <TouchableOpacity 
                    onPress={()=>updateToDo(todo,index)}
                    onLongPress={()=>deleteToDo(todo,index)}
                    style={{
                        alignContent:'center',
                        width:'95%',
                        height:60,
                        borderColor: todo.complete ? 'green':'red',
                        borderWidth: 1,
                        margin: 10,
                        borderRadius: 20,
                        padding: 10,
                        justifyContent: 'center',
                    }}
                    key={index.toString()}>
                        <Text>{todo.title}</Text>
                    
                    </TouchableOpacity>
                ))}
             </ScrollView>

            <TouchableOpacity 
            onPress={()=> addToDo()}
            style={{
                width: 60, 
                height:60, 
                backgroundColor: 'blue',
                alignItems: 'center', 
                justifyContent: 'center',
                alignContent: 'center',
                borderRadius: 30,
                position: 'absolute',
                right:30,
                bottom: 30}}>
                <Text style={{color: 'white', fontSize: 36}}> + </Text>
            </TouchableOpacity>
             
        </SafeAreaView>
    )
}*/
export default ToDoList = () => {

    let initToDoList =[
        {title:'Yemek Ye',complete:false},
        {title:'Spor Yap',complete:true},
        {title:'Çalış',complete:true},
        {title:'Uyu',complete:false},
        {title:'Yemek Ye',complete:false},
        {title:'Spor Yap',complete:true},
        {title:'Çalış',complete:true},
        {title:'Uyu',complete:false},
        {title:'Yemek Ye',complete:false},
        {title:'Spor Yap',complete:true},
        {title:'Çalış',complete:true},
        {title:'Uyu',complete:false},
        {title:'Yemek Ye',complete:false},
        {title:'Spor Yap',complete:true},
        {title:'Çalış',complete:true},
        {title:'Uyu',complete:false}];

    const [todoTitle,setToDoTitle] = useState('');
    const [todoList,setToDoList] = useState(initToDoList);


    const ItemSeparatorComponent = () => {
        return(
            <View
                style={{
                    margin:5,
                    height:1,
                    width:'100%',
                    backgroundColor:'gray'
                }}/>

           
        )}

    const RenderItem = ({item, index}) => {
        return(
        <TouchableOpacity 
            onPress={()=>updateToDo(item,index)}
            onLongPress={()=>deleteToDo(item,index)}
            style={{
                alignContent:'center',
                width:'95%',
                height:60,
                borderColor: item.complete ? 'green':'red',
                borderWidth: 1,
                margin: 10,
                borderRadius: 20,
                padding: 10,
                justifyContent: 'center',
            }}
            key={index.toString()}>
                <Text>{item.title}</Text>
            
            </TouchableOpacity>)
    }

    const addToDo = async () => {
        try {
            let data = {title: todoTitle , complete: false};
            let newList = todoList;
            await newList.push(data);
            setToDoList(newList);
            setToDoTitle('');
        } catch (error) {
            alert(error)            
        }
        
    }

    const updateToDo = (todo,index) => {
        let newList = [];
            
        todoList.forEach((item,i) => {
            i == index
                ? newList.push({title: item.title, complete: !item.complete})
                : newList.push(item)
        });
        setToDoList(newList);
        setToDoTitle('');
    }
    
    const deleteToDo = (todo,index) => {
        let newList = [];
            
        todoList.forEach((item,i) => {
            if(i != index){
                newList.push(item)
            }
 
        });
        setToDoList(newList);
        setToDoTitle('');
    }

    return(
        
        <SafeAreaView style ={{
            flex:1, 
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor:'gray'}}>

            <View style ={{
                flex:1,
                alignItems:'center',
                justifyContent: 'center',
                padding:10,
                width:"100%"
            }}>
                <TextInput
                onChangeText={value => setToDoTitle(value)}
                value={todoTitle}
                placeholder='Aktiviteyi Yazınız..'
                style={{
                    width:"100%",
                    borderColor: 'blue',
                    borderWidth: 1, 
                    margin:45
                }}/>

                <FlatList 
                data={todoList} 
                ItemSeparatorComponent={ItemSeparatorComponent}
                renderItem={RenderItem}
                keyExtractor={(item,index)=> index.toString()}
                style={{
                    flex:1,
                    width:'100%'}}/>
            </View>

            <TouchableOpacity 
            onPress={()=> addToDo()}
            style={{
                width: 60, 
                height:60, 
                backgroundColor: 'blue',
                alignItems: 'center', 
                justifyContent: 'center',
                alignContent: 'center',
                borderRadius: 30,
                position: 'absolute',
                right:30,
                bottom: 30}}>
                <Text style={{color: 'white', fontSize: 36}}> + </Text>
            </TouchableOpacity>
             
        </SafeAreaView>
    )
}
