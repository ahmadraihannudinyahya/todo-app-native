import React, { useEffect, useState } from 'react';
import {Modal, Button, FormControl, Input} from 'native-base';
import ApiServices from '../../service/ApiServices';

const ModalTodo = ({showModal = false, setShowModal, todoId = null}) => {

  const [title , setTitle] = useState('');
  const [desc , setDesc] = useState('');

  useEffect(()=>{
    (async ()=> {
      if(todoId){
        await fetchTodoData();
      }
    })()
  }, []);

  const fetchTodoData = async () =>{
    const todoData = await ApiServices.getTodoById(todoId);
    setTitle(todoData.title);
    setDesc(todoData.desc);
  };

  const hanleInputTitleChange = (text) =>{
    setTitle(text);
  };
  
  const hanleInputDescChange = (text) =>{
    setDesc(text);
  };

  useEffect(()=>{
    if(!showModal){
      setTitle('');
      setDesc('');
    } 
  }, [showModal]);

  const handleSaveTodo = async () => {
    (async ()=>{
      const error = await ApiServices.postTodo({
        title : title, 
        desc : desc, 
      });
      if(error){
        return alert(error);
      };
      setShowModal(false);
    })();
  };

  const handlePatchTodo = async () => {
    const error = await ApiServices.patchTodo({
      title : title, 
      desc : desc, 
    }, todoId);
    if(error){
      return alert(error);
    };
    setShowModal(false);
  };
  return(
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>ADD Your Todo</Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl.Label>Title</FormControl.Label>
            <Input onChangeText = {hanleInputTitleChange} value = {title}/>
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label>Description</FormControl.Label>
            <Input onChangeText = {hanleInputDescChange} value = {desc} multiline = {true} numberOfLines = {3}/>
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button
              variant="ghost"
              colorScheme="blueGray"
              onPress={() => {
                setShowModal(false)
              }}
            >
              Cancel
            </Button>
            <Button onPress = {todoId? handlePatchTodo :handleSaveTodo}>
              Save
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default ModalTodo;