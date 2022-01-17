import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, HStack, Text, View, Pressable } from 'native-base';

const Task = ({id, task, status, toogleStatusTask, deleteTask, toogleModalTask}) => {
  return(
    <View style = {styles.card}>
      <Text style = {styles.title(status)}>
        {task}
      </Text>
      <HStack>
        <Box style = {{width : '33%'}}>
          <Pressable style = {styles.button} onPress={ async ()=> await toogleStatusTask(id)}>
            <Text style = {styles.buttonText}>
              {status === 'onGoing' ? 'Done' : 'Abort'}  
            </Text>
          </Pressable>
        </Box>
        <Box style = {{width : '33%'}}>
          <Pressable style = {styles.button} onPress={()=>toogleModalTask({id, task})}>
            <Text style = {styles.buttonText}>
              Edit
            </Text>
          </Pressable>
        </Box>
        <Box style = {{width : '33%'}}>
          <Pressable style = {styles.button} onPress={ async ()=> await deleteTask(id) }>
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
  title : (status) => {
    const textDecorationLine = status === 'onGoing' ? 'none' : 'line-through';
    return ({
    fontSize : 28,
    fontWeight : 'bold',
    paddingTop : 20,
    color : '#fafafa',
    textDecorationLine,
  })},
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