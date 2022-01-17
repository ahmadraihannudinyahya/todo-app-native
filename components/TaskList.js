import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';
import Task from './common/Task';

const TaskList = ({tasks, toogleStatusTask, deleteTask, toogleModalTask}) =>{
  return(
    <View style = {styles.taskList}>
      {tasks.map(task => <Task key={task.id} {...task} toogleStatusTask = {toogleStatusTask} deleteTask = {deleteTask} toogleModalTask = {toogleModalTask}/>)}
    </View>
  )
}

const styles = StyleSheet.create({
  taskList : {
    marginTop : 10
  },
})
export default TaskList;