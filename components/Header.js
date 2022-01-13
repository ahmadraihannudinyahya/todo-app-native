import React from "react";
import { Text, View } from "native-base";

const HeaderEll = ({header = 'TO DO LIST'}) => {
  return (
    <View style = {{ margin : 20, display : 'flex', justifyContent : 'center'}}>
      <Text fontSize = '4xl' bold color = "#addbff">{header}</Text>
    </View>
  );
};

export default HeaderEll;