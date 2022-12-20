import React from "react";
import { View,Text,StyleSheet,Button} from 'react-native'
//import { Button } from "react-native-web";
//import GameScreen  from "./GameScreen";
const GameOverScreen = props =>{
    return(
        <View style={styles.screen}>
            <Text>
                GAME IS OVER!
            </Text>
           <Text>NUMBER OF ROUNDS:{props.roundsNumber}</Text>
            <Text>ACTUAL NUMBER WAS:{props.userNumber}</Text>
            <Button title="NEW GAME" onPress={props.onRestart}/>
        </View>

    );
};
const styles=StyleSheet.create({
screen:
{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}
})
export default GameOverScreen;
