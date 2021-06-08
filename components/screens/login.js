import React,{useState,useEffect} from 'react';
import { View, Text,StyleSheet,KeyboardAvoidingView } from 'react-native';
import {Button,Input,Image} from 'react-native-elements';
import { auth } from '../../firebase';

const LoginScreen = ({navigation}) => {
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) =>{
            if (authUser){
                navigation.replace("Home")
            }
        });

        return unsubscribe;
    }, []);  

    const SignIn = () => {
        auth
        .signInWithEmailAndPassword(email,password)
        .catch(error => alert(error)); 
    };


    return (
        <KeyboardAvoidingView behavior="padding" style={styles.OuterContainer}>
        
            <Image source={{
                    uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/1200px-Signal-Logo.svg.png"
                }} 
                style={styles.imageheight}
            />

            <View style={styles.inputContainer}>
                <Input 
                    placeholder="Email" 
                    autoFocus type="email" 
                    value={email} 
                    onChangeText={(text) => setEmail(text)}
                />
                <Input 
                    placeholder="Password" 
                    secureTextEntry 
                    type="password"
                    value={password} 
                    onChangeText={(text) => setPassword(text)}
                    onSubmitEditing={SignIn}
                />
            </View >
            <Button containerStyle={styles.Button} onPress={SignIn} title="Login" />
            <Button containerStyle={styles.Button}  type="outline" title="Register" onPress={() => navigation.navigate('Register') } />
            <View style={{height:100}} />

        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    OuterContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:5,
        backgroundColor:'white',
    },    
    imageheight:{
        width:200,
        height:200
    },
    Button:{
        width:200,
        marginTop:5,
    },
    inputContainer:{
        width:300
    }
});