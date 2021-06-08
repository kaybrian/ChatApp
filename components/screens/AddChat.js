import React,{useState,useLayoutEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button,Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { db } from '../../firebase';

const AddChat = ({navigation}) => {

    const [input,setInput] = useState('');

    const createChat = async () =>{
        await db.collection('chats').add({
            chatName:input
        }).then(() => {
            navigation.goBack();
        }).catch((error) =>alert(error))
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            title:'Add New Chat',
            headerStyle: {backgroundColor:"white"},
            headerTitleStyle:{color:"black"},
            headerTintColor:"black",
            headerBackTitle:'Chats'
        })
         
    }, [])
    return (
        <View style={styles.container}>
            <Input 
                placeholder="Enter the Chat name"
                value={input}
                onChangeText={(text) =>setInput(text)}
                onSubmitEditing={createChat}
                leftIcon={
                    <Icon name='wechat' type="antidesign" size={24} color="black" />
                }
            />
            <Button onPress={createChat} title="Create new group" />

        </View>
    )
}

export default AddChat;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding:30,
        height:'100%'
    }
})
