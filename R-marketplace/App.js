import React from 'react';
import {Text, TextInput, View} from 'react-native';

const Scottie = () => {
  const username = "ScottieBear";
  return (
    <View>
      <Text>Hello, I am {username}!</Text> 
    </View>
  );
};

const introList = () => {
  return (
    <View>
      <Text>The wait list be like:</Text>
      <Scottie />
      <Scottie />
      <Scottie />
      
    </View>
  )
}; 

export default introList;