import * as React from 'react';
import { View, Button,Text } from "react-native";

import{headerStyles as styles} from './styles';

class Header extends React.Component{
  render(){
    return(
      <View style={styles.container}>
         <Text style={styles.Thetitel}>WhatIf World</Text>
        <Text style={styles.subtitle}>Click the button to see What If scenarios of the covid-19 pandemic</Text>
      </View>
    );
  }
}
export default Header;
