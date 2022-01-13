import React from 'react';
import {ScrollView, View} from 'native-base';

import HeaderEll from '../components/Header';
import ListCard from '../components/ListCard';

const List = () => {
  return(
    <View style = {{ padding : 10 ,paddingTop : 30, paddingBottom : 20, backgroundColor : '#1a91ff'}}>
      <ScrollView>
        <HeaderEll />
        <ListCard />
      </ScrollView>
    </View>
  );
};

export default List;