import React from 'react';
import {Text, TextInput, View} from 'react-native';

const Scottie = props => {
  return (
    <View>
      <Text>Hello, I am {props.name}!</Text> 
    </View>
  );
};

const introList = () => {
  return (
    <View>
      <Text>The wait list be like:</Text>
      <Scottie name = "Peter" />
      <Scottie name = "Pete" />
      <Scottie name = "Petah" />
      
    </View>
  )
}; 

export default introList;