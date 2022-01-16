import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, HStack, ScrollView, Text, View, Pressable } from 'native-base';
import DetailTodo from '../components/DetailTodo';
import TaskList from '../components/TaskList';

const Detail = () =>{
  return(
    <View style = {{ padding : 10 ,paddingTop : 40, backgroundColor : 'grey', minHeight : '100%'}}>
      <ScrollView>
        <DetailTodo />
        <TaskList />
      </ScrollView>
    </View>
  )
}

export default Detail;