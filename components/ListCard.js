import React from 'react';
import {View , Center} from 'native-base';
import Card from './common/Card';

const ListCard = () =>{
  return (
    <Center>
      <View style = {{width : 320}}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
    </Center>
  );
};

export default ListCard;