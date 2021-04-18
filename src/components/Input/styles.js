import { StyleSheet , Platform} from "react-native";
import { colors } from "../../config/colors";

export const searchInputStyles= StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',/*search icon ile search input aynı satırda oldu */
    width:300, /*Container Genişliği*/
    borderWidth:1,
    borderColor:colors.gray,
    borderRadius:Platform.OS === 'ios' ? 8:4,
    overflow:'hidden',/*Search butonu tam sığsın ve ortalansın*/
  },
  input:{
    flex:1,
    paddingHorizontal:12,
    paddingVertical:5,

  },
  button:{
    flex:1,
    width:40,

    /*Search butonu tam sığsın ve ortalansın*/
    alignItems:'center',
    justifyContent:'center',

    backgroundColor:colors.accent,

  },


});
