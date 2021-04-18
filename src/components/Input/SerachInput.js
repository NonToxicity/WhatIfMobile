import * as React from 'react';
import {View,TextInput,TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {searchInputStyles as styles} from "./styles";
import {Icon} from "../";
import Icons from "../../assets/icons";

class SearchInput extends React.Component {
  render() {
    const { placeholder,onPress,onChangeText,style} = this.props;
    return (
      <View style={[styles.container,style]}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onChangeText}

        />

        <TouchableOpacity>
          <View style={styles.button}>
            <Icon name='search' />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
SearchInput.propTypes = {
  placeholder:PropTypes.string,
  /*seç butonuna tıklanıldığında ne olacağını belirlemek için*/
  onPress:PropTypes.func,
  onChangeText:PropTypes.func,

  style:PropTypes.any,
};
export default SearchInput;
