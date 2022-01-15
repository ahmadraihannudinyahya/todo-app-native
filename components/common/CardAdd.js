import React from "react";
import { StyleSheet, Text } from 'react-native';
import { Box, Pressable } from 'native-base';

const CardAdd = ({setShowModal}) =>{
  return(
    <Pressable style = {styles.card} onPress = {() => setShowModal(true)}>
      <Box>
          <Box>
            <Text style = {styles.text}>
              ADD TODO
            </Text>
          </Box>
      </Box>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card : {
    backgroundColor : '#addbff',
    width : '100%', 
    borderRadius : 10, 
    marginBottom : 10,
    padding : 10,
  },
  text : {
    fontSize : 28,
    color : '#1a91ff',
    margin : 10,
    textAlign : 'center',
  }
})

export default CardAdd;