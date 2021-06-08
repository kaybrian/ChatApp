import { HeaderTitle } from '@react-navigation/stack';
import React,{useState,useLayoutEffect,useEffect} from 'react'
import { StyleSheet,View, Text, ScrollView,SafeAreaView,TouchableOpacity } from 'react-native';
import CustomlistItem from '../custom/customlistitems';
import {ListItem,Avatar} from 'react-native-elements';
import { auth,db } from '../../firebase';
import { AntDesign,SimpleLineIcons } from '@expo/vector-icons';


const HomeScreen = ({navigation}) => {

    const [chats,setChats] = useState([]);

    const signOutUser = () =>{
        auth.signOut().then(() => {
            navigation.replace("Login")
        })
    }

    useEffect(() => {
        const unsubscribe = db.collection('chats').onSnapshot(snapshot =>{
            setChats(snapshot.docs.map(doc => ({
                id:doc.id,
                data:doc.data(),
            })))
        });

        return unsubscribe;
    }, [])

 
    useLayoutEffect(() => {
       navigation.setOptions({
        title:"Ctrl Safe Space",
        headerStyle: {backgroundColor:"white"},
        headerTitleStyle:{color:"black"},
        headerTintColor:"black",
        headerLeft:() => (<View style={styles.headersicons}>
            <TouchableOpacity 
                activeOpacity={0.6} 
                onPress={signOutUser}
            >
                <Avatar
                    rounded
                    source={{
                       uri: auth?.currentUser?.photoURL
                    }}
                />
            </TouchableOpacity> 
        </View>
        ),

        headerRight:() => (
            <View style={styles.headerrightstyle}>
               <TouchableOpacity activeOpacity={0.6}  >
                    <AntDesign name="camera" size={24} color="black" />
               </TouchableOpacity>
               <TouchableOpacity 
                activeOpacitAntDesigny={0.6}
                onPress={() => navigation.navigate("AddChat")}
            >
                    <SimpleLineIcons name="pencil" size={24} color="black" />
               </TouchableOpacity>
            </View>
       ),
       headerTitleAlgin:'start',
       });
    }, [navigation])


    return (
        <SafeAreaView>
            <ScrollView>

                {chats.map(({id, data:{chatName}}) => {
                    <CustomlistItem  />
                })}
                 <CustomlistItem  />
                
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    headersicons:{
        marginLeft:10
    },
    headerrightstyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:60,
        marginRight:20
    }
})
