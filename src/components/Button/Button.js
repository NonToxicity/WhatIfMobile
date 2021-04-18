import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {buttonStyles as styles} from "./styles";


class Button extends React.Component{
  render(){
    return(
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text stle={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
    );
  }
}


