import React from "react";
import { View,Text,StyleSheet} from 'react-native'
const Header = props =>
{
    return(
        <View style={styles.header}>  
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>//position title 
    );
};

const styles=StyleSheet.create({
    header:
    {
       width:'100%',
       height:90,
       padding:32,
       backgroundColor:'#f7287b',
       alignItems:'center',
       justifyContent:'center',
       
    },
    headerTitle:
    {
      color:'black',
      fontSize:19,
      fontWeight:'bold',

    }

});
export default Header;