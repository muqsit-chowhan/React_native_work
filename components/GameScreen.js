import React , {useState,useRef,useEffect} from "react";
import { View,Text,StyleSheet,Button ,Alert} from 'react-native'
import Card from "./Card";
import colors from "./constants/colors";
//import { useEffect } from 'react';
//import GameOverScreen from "./GameOverScreen";

/*const generateRandomBetween = (min,max,exclude) =>  {
    min=Math.ceil(min);
    max =Math.floor(max);
    const rndnum= Math.floor(Math.random()*(max-min)) + min;
    if(rndnum == exclude)
    {
        return generateRandomBetween(min,max,exclude)
    }
    else
    {
       return rndnum;
    }
}*/
const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  };
const GameScreen = props =>{
    
      const [rounds,setRounds]=useState(0);
      const [currentGuess,setCurrentGuess] = useState(generateRandomBetween(1,100, props.userChoice)); 
      const currentLow=useRef(1);
      const currentHigh=useRef(100);
      const {userChoice,onGameOver}=props;  

      /*useEffect(()=>
      {
        if(currentGuess===userChoice)
        {
            onGameOver(rounds);
            //console.warn("game over")
            //console.log("YOU HAVE WON!")
            Alert.alert('CONGRATULATIONS YOU HAVE WON'[{text:'Okay', style:'destructive'}])
        }
        
      })[currentGuess,userChoice,onGameOver];*/


      const nextGuessHandler= direction=>{
        if((direction ==='lower'&& currentGuess<props.userChoice) || (direction==='greater'&& currentGuess>props.userChoice))
        {
           Alert.alert('YOU LIED','SELECT CORRECT ONE',[{text:'OKAY',style:'cancel'}]);
           return;
        }
        if(direction==='lower')
        {
            currentHigh.current=currentGuess;
        }
        else
        {
             currentLow.current=currentGuess;
        }
      const nextNumber= generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
      setCurrentGuess(nextNumber);
      setRounds(curRound => curRound+1); 
      };
    return(
        
        <View style={styles.haeding}>
            
            <Text>OPPONENT'S GUESS</Text>
            
            <View style={styles.container}>
                <Text style={styles.number}>
                {currentGuess}
                </Text>
            </View>
            <Card>
            <View style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this,'lower')} />
                <Button title="Greater" onPress={nextGuessHandler.bind(this,'greater') }/>
            </View>
            </Card>
            </View>
            
    );
};
const styles=StyleSheet.create({
    screen:
    {
        flex:1,
        padding:10,
        alignItems:'center'
    },
    buttonContainer:
    {
       flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:20,
        width:300,
        maxWidth:'80%',
        alignContent:'center'

    },
    container:
   {
    borderWidth:2,
    borderColor:colors.secondary,
    padding:10,
    borderRadius:5,
    marginVertical:10,
    alignItems:'center',
    justifyContent:'center',
},
card:
    {

        elevation:8,
        backgroundColor:'white',
        padding:10,
        borderRadius:10,
        marginVertical:10,
        alignItems:'center',
        alignContent:'center'
   
    },
    number:
    {
    color:'black',
    fontSize:20,
    alignItems:'center'
    },
    haeding:
    {
        alignItems:'center'
    }
})
export default GameScreen;
