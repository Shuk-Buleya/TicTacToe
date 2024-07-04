import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import Icons from './Icons'
import Snackbar from '../node_modules/react-native-snackbar/src/index'
// import { Alert, Pressable } from '../node_modules/react-native/types/index'
// import {  } from '../node_modules/react-native/types/index'

function App (): JSX.Element {
  // const App = () => {

const [isCross, setIsCross] = useState<boolean>(false)
const [gameWinner, setGameWinner] = useState<string>('')
const [gameState, setGameState] = useState(new Array(9).fill('empty',0,9))

const reloadGame = () =>{
  setIsCross(false)
  setGameWinner('')
  setGameState(new Array(9).fill('empty',0,9))
}

const checkGameWinner = () =>{
  if (gameState[0] === gameState[1] && gameState[0] === gameState[2] && gameState[0] !== 'empty') {
    setGameWinner(`${gameState[0]} won the game 🎉🎉`)
  }

  else if(gameState[3] === gameState[4] && gameState[3] === gameState[5] && gameState[3] !== 'empty'){
    setGameWinner(`${gameState[3]} won the game 🎉🎉`)
  }

  else if(gameState[6] === gameState[7] && gameState[6] === gameState[8] && gameState[6] !== 'empty'){
    setGameWinner(`${gameState[6]} won the game 🎉🎉`)
  }

  else if(gameState[0] === gameState[3] && gameState[0] === gameState[6] && gameState[0] !== 'empty'){
    setGameWinner(`${gameState[0]} won the game 🎉🎉`)
  }
  else if(gameState[1] === gameState[4] && gameState[1] === gameState[7] && gameState[1] !== 'empty'){
    setGameWinner(`${gameState[1]} won the game 🎉🎉`)
  }

  else if(gameState[2] === gameState[5] && gameState[2] === gameState[8] && gameState[2] !== 'empty'){
    setGameWinner(`${gameState[2]} won the game 🎉🎉`)
  }
  else if(gameState[0] === gameState[4] && gameState[0] === gameState[8] && gameState[0] !== 'empty'){
    setGameWinner(`${gameState[0]} won the game 🎉🎉`)
  }
  else if(gameState[2] === gameState[4] && gameState[2] === gameState[6] && gameState[2] !== 'empty'){
    setGameWinner(`${gameState[2]} won the game 🎉🎉`)
  }

  else if(!gameState.includes('empty',0)){
    setGameWinner('Draw game🤝')
  }
}

const onChangeItem = (itemNumber) =>{
  if(gameWinner){
    return Snackbar.show({
      text: gameWinner,
      backgroundColor:"rgb(83, 177, 83)",
      textColor:"#fff"
  })
  }

  if(gameState[itemNumber] === 'empty'){
    gameState[itemNumber] = isCross ? "cross" : "circle"
    setIsCross(!isCross)
  }
  else{
    return Snackbar.show({
      text: "Potion Already Filled",
      backgroundColor:"rgb(190, 67, 67)",
      textColor:"#fff"
  })
  }

  checkGameWinner()
}


  return (
    <SafeAreaView>
      <StatusBar
      backgroundColor={"#000"}
      />
    {
      gameWinner ? (
        <View style ={styles.centerView}>
        <View style = {styles.winnerTopView}>
          <Text style = {styles.winnerText}>{gameWinner}</Text>
        </View>
        </View>
      ) : (
        <View style ={styles.centerView}>
        <View style = {[styles.playersTopView, isCross ? styles.crossTopView: styles.circleTopView]}>
          <Text style = {styles.winnerText}>player {isCross ? 'X' : 'O'}'s Turn</Text>
        </View>
        </View>
      )
    }
    <View style = {styles.centerView}>
    <View style = {styles.centerGameContainer}>
    <FlatList 
      style = {styles.gameContainer}
      numColumns ={3}
      data = {gameState}
      renderItem={({item, index}) => (
        <Pressable
        style = {styles.icons}
        key={index}
        onPress={() => onChangeItem(index)}
        >
          <Icons name = {item} />
        </Pressable>

      )}
    />
</View>
</View>

<View style ={styles.centerView}>
  <View style ={styles.buttonContainer}>
    <Pressable
    onPress={reloadGame}
    >
      <Text style = {styles.reloadButtonText}>
        {gameWinner? "Start New Game":"Reload game"}
      </Text>
    </Pressable>
    </View>
    </View>
    </SafeAreaView>
    
  )
}

export default App

const styles = StyleSheet.create({
  winnerTopView:{
    backgroundColor:"rgb(83, 177, 83)",
    width:"85%",
    borderRadius:6,
    marginTop:20,
    justifyContent:'center',
    alignItems:'center'
    
  },
  centerView:{
    justifyContent:"center",
    alignItems:"center"
  },
  winnerText:{
    color:"#fff",
    fontWeight:"600",
    fontSize:18,
    padding:14
  },
  playersTopView:{
    // backgroundColor:"rgb(83, 177, 83)",
    width:"85%",
    borderRadius:6,
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
  },
  circleTopView:{
    backgroundColor:"rgb(200, 200, 7)"
  ,
},
crossTopView:{
  backgroundColor:'#000'
},
centerGameContainer:{
  marginTop:100,
  justifyContent:"center",
    alignItems:"center",
    width:"90%",
    backgroundColor:"rgb(255, 223, 228)",
    borderRadius:5,
    elevation:5
},
gameContainer:{
  
  // justifyContent:'space-around'
  // justifyContent:"center"
},
icons:{
  padding:30
},
buttonContainer:{
  marginTop:35,
  backgroundColor:'red',
  width:'50%',
  justifyContent:'center',
  alignItems:'center',
  borderRadius:5,
  elevation:4
},
reloadButtonText:{
  color:"#fff",
  fontWeight:"600",
  padding:14,
  fontSize:18

}
})

// function alert(gameWinner: string) {
//   throw new Error('Function not implemented.')
// }
