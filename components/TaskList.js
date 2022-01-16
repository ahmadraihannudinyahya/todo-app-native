import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';
import Task from './common/Task';

const TaskList = () =>{
  return(
    <View style = {styles.taskList}>
      <Task />
      <Task />
      <Task />
      <Task />
    </View>
  )
}

const styles = StyleSheet.create({
  taskList : {
    marginTop : 10
  },
})
export default TaskList;