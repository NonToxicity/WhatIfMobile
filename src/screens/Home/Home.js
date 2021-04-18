import * as React from 'react';
import {View,ScrollView,Button} from 'react-native';
import{Header} from '../../components';
import {Linking} from 'react-native';

class Home extends React.Component {
  onSearchButton=()=>{
    console.warn('ddddd');
};
  onChangeSearchQuery=(text)=>{
    console.warn('new text='+text);
  };
  render() {
    return (
      <View style={{flex:1}}>
        <ScrollView style={{flex:1}}>
          <Header />
          <Button onPress={this.onPress}
          title="Click me"/>
        </ScrollView>
      </View>
    );
  }
  onPress=()=>{
    Linking.openURL("https://www.brkdgn.com");
  }
};


export default Home;
