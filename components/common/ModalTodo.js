import React, { useEffect, useState } from 'react';
import {Modal, Button, FormControl, Input} from 'native-base';
import ApiServices from '../../service/ApiServices';

const ModalTodo = ({showModal = false, setShowModal}) => {

  const [title , setTitle] = useState('');
  const [desc , setDesc] = useState('');

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
  }, [showModal])
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
            <Button onPress = {handleSaveTodo}>
              Save
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default ModalTodo;