import React,{useState,useLayoutEffect} from 'react';
import { View,StyleSheet,KeyboardAvoidingView } from 'react-native';
import {Button,Input,Text} from 'react-native-elements';
import { auth } from '../../firebase';
 

const RegisterScreen = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle:'login',
        });

    }, [navigation])

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [imageUrl,setImageUrl] = useState('');

    const register = () => {
        auth.createUserWithEmailAndPassword(email,password)
        .then(authUser => {
            authUser.user.updateProfile({
                displayName:name,
                photoURL:imageUrl || 'https://www.happoldfoundation.org/wp-content/uploads/2016/09/man-placeholder.jpg'
            });
        }).catch(
            (error) => alert(error.message)
        )
    };
    
    return (
        
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            
            <Text h4 style={styles.header}>Create Account </Text>

            <View style={styles.InputContainer}>
                <Input 
                    placeholder="Full name" 
                    autoFocus type="text" 
                    value={name} 
                    onChangeText={(text) => setName(text)}
                />
                <Input 
                    placeholder="Email" 
                    type="email" 
                    value={email} 
                    onChangeText={(text) => setEmail(text)}
                />
                <Input 
                    placeholder="Password" 
                    type="password" 
                    secureTextEntry
                    value={password} 
                    onChangeText={(text) => setPassword(text)}
                />
                <Input 
                    placeholder="profile pic (optional)" 
                    type="text" 
                    value={imageUrl} 
                    onChangeText={(text) => setImageUrl(text)}
                    onSubmitEditing={register}
                />
            </View>
            <Button containerStyle={styles.Button} onPress={register} raised  title="Register" />
            <View style={{height:2}} />

        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:2,
        backgroundColor:'white',
    },
    header:{
        marginBottom:2
    },
    InputContainer:{
        width:300
    },
    Button:{
        width:200
    }

})
  