import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, HStack, ScrollView, Text, View, Pressable } from 'native-base';

const DetailTodo = () =>{
  const todo = {
    createdAt: "Saturday, 15 January 2022",
    desc: "Todo App Taskin Native app, Task From Dumbways Id",
    id: "todos-16422174791941",
    title: "Todo App Task",
  };
  return (
    <View style = {styles.card}>
      <Text style = {styles.title}>
        {todo.title}
      </Text>
      <Text style = {styles.desc}>
        {todo.desc}
      </Text>
      <HStack>
        <Box style = {{ width : '50%'}}>
          <Pressable style = {styles.button}>
            <Text style = {styles.buttonText}>
              Edit
            </Text>
          </Pressable>
        </Box>
        <Box style = {{ width : '50%'}}>
          <Pressable style = {styles.button}>
            <Text style = {styles.buttonText}>
              Delete
            </Text>
          </Pressable>
        </Box>
      </HStack>
      <Box style = {{ width : '100%'}}>
          <Pressable style = {styles.button}>
            <Text style = {styles.buttonText}>
              Add Task
            </Text>
          </Pressable>
        </Box>
    </View>
  )
}

const styles = StyleSheet.create({
  card : {
    backgroundColor : '#1a91ff',
    borderRadius : 10,
    padding : 10,
  },
  title : {
    fontSize : 28,
    paddingTop : 10,
    textAlign : 'center',
    fontWeight : 'bold',
    color : '#fafafa'
  },
  desc : {
    fontSize : 18,
    textAlign : 'left',
    margin : 10,
    color : '#fafafa'
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
});

export default DetailTodo;