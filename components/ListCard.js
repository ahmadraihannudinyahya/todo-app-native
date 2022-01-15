import React from 'react';
import {View , Center} from 'native-base';
import Card from './common/Card';

const ListCard = ({todos}) =>{
  return (
    <Center>
      <View style = {{width : 320}}>
        {todos.map(todo => <Card key = {todo.id} color = {todo.id[todo.id.length -1 ]} {...todo}/>)}
      </View>
    </Center>
  );
};

export default ListCard;