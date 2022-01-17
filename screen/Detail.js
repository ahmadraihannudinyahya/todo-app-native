import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'native-base';
import DetailTodo from '../components/DetailTodo';
import TaskList from '../components/TaskList';
import ModalTask from '../components/common/ModalTask';
import ApiServices from '../service/ApiServices';
import ModalTodo from '../components/common/ModalTodo';

const Detail = ({route, navigation}) =>{
  const [taskModalStatus, toogleModalTask] = useState(false);
  const [todoModalStatus, toogleModalTodo] = useState(false);
  const [todo , setTodo] = useState(null);
  const [tasksData , setTasksData] = useState([]);
  const [taskEditPayload , setTaskEditPayload] = useState(null);
  
  useEffect(()=>{
    (async () => {
      await getTaskByTodoId();
    })();
    if(taskModalStatus === false){
      setTaskEditPayload(null);
    }
  }, [taskModalStatus]);

  useEffect(()=>{
    (async ()=>{
      await fetchTodoData();
    })()
  }, [todoModalStatus]);

  const fetchTodoData = async () =>{
    const getTodo = await ApiServices.getTodoById(route.params.id);
    setTodo(getTodo);
  };

  const showModalEditTask = (payload) => {
    setTaskEditPayload(payload);
    toogleModalTask(true);
  }

  const getTaskByTodoId = async () =>{
    const result = await ApiServices.getTaskInTodo(route.params.id);
    setTasksData(result);
  };

  const toogleStatusTask = async (taskId) =>{
    await ApiServices.toogleStatusTaskById(taskId);
    await getTaskByTodoId()
  };
  const deleteTask = async (taskId) => {
    await ApiServices.deleteTaskById(taskId);
    await getTaskByTodoId();
  };
  return(
    <View style = {{ padding : 10 , backgroundColor : '#addbff', minHeight : '90%'}}>
      <ScrollView>
        <DetailTodo todoId ={route.params.id} todo = {todo} navigation = { navigation } toogleModalTask = {toogleModalTask} toogleModalTodo = {toogleModalTodo}/>
        <TaskList todoId ={route.params.id} tasks = {tasksData} toogleStatusTask = {toogleStatusTask} deleteTask = {deleteTask} toogleModalTask = {showModalEditTask}/>
      </ScrollView>
      <ModalTask todoId ={route.params.id} taskEditPayload = {taskEditPayload} showModal = {taskModalStatus} setShowModal = {toogleModalTask}/>
      <ModalTodo showModal = {todoModalStatus} setShowModal = {toogleModalTodo} todoId ={route.params.id}/>
    </View>
  )
}

export default Detail;