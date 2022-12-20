import React,{useState} from "react";
import { View,Text,StyleSheet,Button,Alert, Keyboard} from 'react-native'
import { Colors } from "react-native/Libraries/NewAppScreen";
//import {TextInput } from "react-native-web";

import Card from "./Card";
import colors from "./constants/colors";
import Input from "./input";
import GameScreen from "./GameScreen";

const StartGame = props =>{
    
    const [enteredValue,setEnteredValue] = useState('');
    const [confirmed,setConfirmed]= useState(false);
    const [selectedNumber,setSelectedNumber]= useState();

    const numberInputHandler = inputText =>{
        setEnteredValue(inputText.replace(/^0-9/g,''));
    };
    
    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    };

    const comfirmInputHandler=() => {
        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>=99)
        {
            Alert.alert('Invalid Number', 'Select Between 1-99',[{text:'Okay', style:'destructive', onPress:resetInputHandler}])
        }
           setConfirmed(true)
           setSelectedNumber(chosenNumber);
           setEnteredValue('');
           Keyboard.dismiss();  
    }

let confirmedOUtput;
if(confirmed)
{
    confirmedOUtput=<View style={styles.card}>
        <Text>YOU SELECTED</Text>
        <View style={styles.container}>
        <Text style={styles.number}>{selectedNumber}</Text>
        </View>
        <Button title="START GAME" onPress={()=>props.onStartGame(selectedNumber)}/>
        </View>
}
    return(
           <View style={styles.screen}>
                <Text style={styles.title}>START NEW GAME</Text>
                <Card style={styles.inputContainer}>
                    <Text>SELECT A NUMBER</Text>
                    <Input style={styles.input} 
                    blurOnSubmit 
                    autoCapatilize="none" 
                    autoCorrect={false} 
                    keyboardType="numeric" 
                    maxLength={2}
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                          <View style={styles.button}><Button title="RESET" onPress={resetInputHandler} color={colors.secondary}/></View>
                          <View style={styles.button}><Button title="CONFIRM" onPress={comfirmInputHandler} color={colors.primary}/></View>
                    </View>
                </Card>
                {confirmedOUtput} 
           </View>
    );
};
const styles= StyleSheet.create({
    screen:
    {
        flex:1,
        padding:10,
        alignItems:'center',
    },
    title:
    {
       fontSize:20,
       marginVertical:10
    },
    inputContainer:
    {
       padding:10,
       alignItems:'center',
       width:300,
       maxWidth:'80%',//for responsiveness
       /*elevation:8,
       backgroundColor:'white',
       padding:10,
       borderRadius:10,*/

    },
    buttonContainer:
    {
        flexDirection:'row',
        width:'100%',
        
        justifyContent:'space-between',
        paddingHorizontal:15,
    },
    button:
    {
        width:100,
    },
    input:
    {
      width:60,
      textAlign:'center'
    },
    card:
    {
        
        elevation:8,
        backgroundColor:'white',
        padding:10,
        borderRadius:10,
        marginVertical:10,
        alignItems:'center'
   
    },
    number:
   {
   color:'black',
   fontSize:20,
   alignItems:'center'
   },
   container:
   {
    borderWidth:2,
    borderColor:colors.secondary,
    padding:10,
    borderRadius:10,
    marginVertical:10,
    alignItems:'center',
    justifyContent:'center'

},
});
export default StartGame;