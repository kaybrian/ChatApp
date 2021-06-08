import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {ListItem,Avatar} from 'react-native-elements';

const CustomlistItem  = ({id,chatName,enterChat}) => {
    return (
        <ListItem>
           <Avatar 
            rounded
            source={{
                uri:"https://cdn4.vectorstock.com/i/thumb-large/51/48/cartoon-character-in-glasses-avatar-young-man-vector-33215148.jpg",

            }}
           />
           <ListItem.Content>
               <ListItem.Title style={styles.title}>
                   Kayongo Johnson Brian
               </ListItem.Title>
               <ListItem.Subtitle 
                numberOfLines={1} 
                ellipsizeMode="tail">
                    This is the test subtitle in the group 
                    This is the test subtitle in the group 
                     This is the test subtitle in the group 
                     This is the test subtitle in the group 
                     This is the test subtitle in the group 
               </ListItem.Subtitle>
           </ListItem.Content>

        </ListItem>
    )
}

export default CustomlistItem;

const styles = StyleSheet.create({
    title:{
        fontWeight:'bold'
    }
})
