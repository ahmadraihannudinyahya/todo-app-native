import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'native-base';
import ApiServices from '../service/ApiServices';

import HeaderEll from '../components/Header';
import ListCard from '../components/ListCard';
import CardAdd from '../components/common/CardAdd';
import ModalTodo from '../components/common/ModalTodo';

const List = () => {
  const [showModal, setShowModal] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    (async ()=>{
      if(!showModal){
        const result = await ApiServices.getTodo();
        setTodos(result);
      }
    })()
  }, [showModal]);
  return(
    <View style = {{ padding : 10 ,paddingTop : 30, paddingBottom : 20, backgroundColor : '#1a91ff', minHeight : '100%'}}>
      <ScrollView>
        <HeaderEll />
        <ListCard todos = {todos}/>
        <CardAdd setShowModal= {setShowModal}/>
      </ScrollView>
      <ModalTodo showModal = {showModal} setShowModal= {setShowModal}/>
    </View>
  );
};

export default List;