import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Box, Pressable } from 'native-base';

const Card = ({color = false, title, desc, createdAt, id, navigation }) =>{
  const [theme , setTheme ] = useState({
    backgroundColor : 'grey',
    textColor : '#fff',
  });
  
  const colors = [
    {
      backgroundColor : '#cffafe',
      textColor : '#0e7490',
    },
    {
      backgroundColor : '#fce7f3',
      textColor : '#be185d',
    },{
      backgroundColor : '#d1fae5',
      textColor : '#047857',
    },{
      backgroundColor : '#ffe4e6',
      textColor : '#be123c',
    },{
      backgroundColor : '#fee2e2',
      textColor : '#b91c1c',
    },{
      backgroundColor : '#dcfce7',
      textColor : '#15803d',
    },{
      backgroundColor : '#ffedd5',
      textColor : '#c2410c',
    },{
      backgroundColor : '#cffafe',
      textColor : '#0e7490',
    },{
      backgroundColor : '#f5f5f5',
      textColor : '#404040',
    },
  ];

  useEffect(()=>{
    const colorNumber = color ? color : Math.floor(Math.random()*10);
    const themeColor = colors[colorNumber];
    if(themeColor){
      setTheme(themeColor);
    }
  }, []);

  return (
    <Pressable onPress = {()=> navigation.navigate('Detail', {id})}>
      <Box style = {Styles.card({themeColor :theme.backgroundColor})} >
        <Box>
          <Text style = {Styles.head({themeColor : theme.textColor })}>
            {title}
          </Text>
        </Box>
        <Box>
          <Text numberOfLines={3} style = {Styles.desc({themeColor : theme.textColor})}>
          {desc}
          </Text>
        </Box>
        <Box >
        <Text style = {Styles.date({themeColor : theme? theme.textColor : '#fff'})}>
            {createdAt}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
};

const Styles = StyleSheet.create({
  card : ({themeColor}) => ({
      backgroundColor : themeColor, 
      width : '100%', 
      borderRadius : 10, 
      marginBottom : 10,
      padding : 10,
      border : 2
    }),
  head : ({themeColor}) => ({
      fontSize : 28,
      color : themeColor,
      margin : 10
    }),
  desc : ({themeColor}) => ({
    fontSize : 18,
    color : themeColor,
    margin : 10,
  }),
  date : ({themeColor}) => ({
    fontSize : 18,
    color : themeColor,
    textAlign : 'right',
    margin : 20,
  }),
})
export default Card;