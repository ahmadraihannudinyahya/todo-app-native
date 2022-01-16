import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, HStack, Text, View, Pressable } from 'native-base';

const Task = () => {
  return(
    <View style = {styles.card}>
      <Text style = {styles.title}>
        Task
      </Text>
      <HStack>
        <Box style = {{width : '33%'}}>
          <Pressable style = {styles.button}>
            <Text style = {styles.buttonText}>
              Done  
            </Text>
          </Pressable>
        </Box>
        <Box style = {{width : '33%'}}>
          <Pressable style = {styles.button}>
            <Text style = {styles.buttonText}>
              Edit
            </Text>
          </Pressable>
        </Box>
        <Box style = {{width : '33%'}}>
          <Pressable style = {styles.button}>
            <Text style = {styles.buttonText}>
              Delete
            </Text>
          </Pressable>
        </Box>
      </HStack>
    </View>
  )
}

const styles = StyleSheet.create({
  card : {
    backgroundColor : '#1a91ff',
    borderRadius : 10,
    padding : 10,
    marginBottom : 10
  },
  title : {
    fontSize : 28,
    fontWeight : 'bold',
    paddingTop : 20,
    color : '#fafafa',
    textDecorationLine : 'line-through'
  },
  button : {
    backgroundColor : '#addbff',
    borderRadius : 10,
    margin : 10
  },
  buttonText : {
    fontSize : 18,
    textAlign : 'center',
    margin : 10,
    fontWeight : 'bold', 
    color : '#1a91ff',
  }
})

export default Task;