import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React ,{useState} from 'react';


import Header from './components/Header';
import StartGame from './components/StartGame';
import GameScreen from './components/GameScreen';
import GameOverScreen from './components/GameOverScreen';

export default function App() {

  const [userNumber,setUSerNumber]= useState();
  const [guessRounds,setGuessRounds]=useState(0); 

  const startGameHandler = (selectedNumber)=>
  {
     setUSerNumber(selectedNumber);
     setGuessRounds(0);
  }
  const gameOverHandler= numofRounds=>{
    setGuessRounds(0);
  } 
  /*const newGameConfigure=()=>{
    //setGuessRounds(0);
    setUSerNumber(null);
  }*/ 
  let content = <StartGame onStartGame={startGameHandler}/>;

  if(userNumber && guessRounds<=0)
  {
    content= <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  }
  else if(guessRounds>0)
  {
    content=<GameOverScreen /*totalRpunds={guessRounds} actualNumber={userNumber} onRestart={newGameConfigure}*//>
  }
  return (
    <View style={styles.screen}>
      <Header title='GUESS THE NUMBER'/>
      {content}
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen:
  {
    flex:1,
  }
  
});
