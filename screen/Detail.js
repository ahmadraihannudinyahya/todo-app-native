import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, HStack, ScrollView, Text, View, Pressable } from 'native-base';
import DetailTodo from '../components/DetailTodo';

const Detail = () =>{
  return(
    <View style = {{ padding : 10 ,paddingTop : 40, backgroundColor : 'grey', minHeight : '100%'}}>
      <ScrollView>
        <DetailTodo />
        <View style = {styles.taskList}>
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
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  taskList : {
    marginTop : 10
  },
  card : {
    backgroundColor : '#1a91ff',
    borderRadius : 10,
    padding : 10,
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
export default Detail;