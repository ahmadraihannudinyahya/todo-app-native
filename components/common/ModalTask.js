import React, { useEffect, useState } from 'react';
import {Modal, Button, FormControl, Input} from 'native-base';
import ApiServices from '../../service/ApiServices';

const ModalTask = ({showModal, setShowModal, todoId, taskEditPayload}) => {
  const [task , setTask ] = useState('');

  useEffect(()=>{
    if(taskEditPayload){
      setTask(taskEditPayload.task);
    };
    if(showModal === false){
      setTask('');
    }
  }, [showModal]);

  const postTask = async () =>{
    const error = await ApiServices.postTaskByTodoId({task}, todoId);
    if(error){
      return alert(error);
    };
    setShowModal(false);
  };

  const editTask = async () =>{
    const error = await ApiServices.patchTaskById({task}, taskEditPayload.id);
    if(error){
      return alert(error);
    };
    setShowModal(false);
  }

  return(
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>ADD TASK</Modal.Header>
        <Modal.Body>
          <FormControl>
            <Input onChangeText={(text)=>setTask(text)} value={task} placeholder='Task'/>
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
            <Button onPress={taskEditPayload ? editTask : postTask}>
              Save
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default ModalTask;