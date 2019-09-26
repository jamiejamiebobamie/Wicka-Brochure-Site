import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import configureStore from '../Redux/configureStore'
import MainActions from '../Redux/MainRedux'



// I added this.
import { Platform,
        StyleSheet,
        Text,
        TouchableHighlight,
        TouchableOpacity,
        TouchableNativeFeedback,
        TouchableWithoutFeedback,
        View,
        Image,
        ScrollView,
        TextInput,
        Button,
        InputAccessoryView, } from 'react-native';
// necessary for the views.



import Textile, { EventSubscription } from '@textile/react-native-sdk'

const { store } = configureStore()

class App extends Component {



// I added this.
      constructor(props) {
          super(props);
          this.state = {text: 'Title'};
      }
// this.state.text is used on the inputBox component



  textile = Textile
  subscriptions: EventSubscription[] = []
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }



// I added this.
    _onPressButton() {
      alert('You tapped the button!')
    }
    _onLongPressButton() {
      alert('You long-pressed the button!')
    }
// for the buttons...



  componentDidMount() {
    this.subscriptions.push(
      Textile.events.addNodeStartedListener(() => {
        store.dispatch(MainActions.newNodeState('started'))
      })
    )
    this.subscriptions.push(
      Textile.events.addNodeStoppedListener(() => {
        store.dispatch(MainActions.newNodeState('stopped'))
      })
    )
    this.subscriptions.push(
      Textile.events.addNodeFailedToStartListener(error => {
        store.dispatch(MainActions.newNodeState('error'))
      })
    )
    this.subscriptions.push(
      Textile.events.addNodeOnlineListener(() => {
        store.dispatch(MainActions.nodeOnline())
      })
    )
  }

  componentWillUnmount() {
    for (const subscription of this.subscriptions) {
      subscription.cancel()
    }
  }
}

export default App




// Everything below has been copied from my repo.
// Please make use of the styles and views.


// Sorry that nothing has been separated into its own file.
// I wasn't sure of how to import/export stuff with react native.


// NOTE: All views must be wrapped in:
// <View style={styles.container}>
//
// </View>



// VIEWS ::

// homeScreen
// <Text style={styles.titleText} >Werewolf</Text>
// <View style={styles.icon}>
//   <Image
//     style={{width: 200, height: 200}}
//     source={require('./public/img/test_img_icon.png')}
//   />
// </View>
// <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//   <View style={styles.bigBlueButton}>
//     <Text style={styles.buttonTextBig}>Host Game</Text>
//   </View>
// </TouchableHighlight>
// <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//   <View style={styles.bigBlueButton}>
//     <Text style={styles.buttonTextBig}>Join a Game</Text>
//   </View>
// </TouchableHighlight>
//-----------

// settingsScreen
// <Text style={styles.titleText}>Settings</Text>
// <TextInput
//   style={styles.inputBox}
//   onChangeText={text => this.setState({text})}
//   value={this.state.text}
// />
//-----------

// gameCreation
// <TextInput
//   style={styles.inputBox}
//   onChangeText={text => this.setState({text})}
//   value={this.state.text}
// />
// <TextInput
//   style={styles.inputBox}
//   onChangeText={text => this.setState({text})}
//   value={this.state.text}
// />
// <TextInput
//   style={styles.inputBox}
//   onChangeText={text => this.setState({text})}
//   value={this.state.text}
// />
// <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//   <View style={styles.bigBlueButton}>
//     <Text style={styles.buttonTextBig}>Create</Text>
//   </View>
// </TouchableHighlight>
// <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//   <View style={styles.bigRedButton}>
//     <Text style={styles.buttonTextBig}>Cancel</Text>
//   </View>
// </TouchableHighlight>
//-----------

// joinScreen
//     <Text style={styles.titleText}>Join a Game</Text>
//     <Text style={styles.titleTextUnderline}>Local Games</Text>
//     <View style={styles.interiorContainerGraySelect}>
//         <Text style={styles.interiorContainerText}>Lobby</Text>
//         <TouchableOpacity onPress={this._onPressButton} underlayColor="white">
//           <View style={styles.mediumGrayButton}>
//             <Text style={styles.buttonText}>Join</Text>
//           </View>
//         </TouchableOpacity>
//     </View>
//     <View style={styles.interiorContainerGraySelect}>
//         <Text style={styles.interiorContainerText}>Lobby</Text>
//         <TouchableOpacity onPress={this._onPressButton} underlayColor="white">
//           <View style={styles.mediumGrayButton}>
//             <Text style={styles.buttonText}>Join</Text>
//           </View>
//         </TouchableOpacity>
//     </View>
//   <Text style={styles.titleTextUnderline}>Lobby Name</Text>
//     <TextInput
//       style={styles.inputBox}
//       onChangeText={text => this.setState({text})}
//       value={this.state.text}
//     />
//     <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//       <View style={styles.bigRedButton}>
//         <Text style={styles.buttonTextBig}>Cancel</Text>
//       </View>
//     </TouchableHighlight>
//-----------

// identityScreen -- Werewolf
// <Text style={styles.titleText}>You are a Werewolf.</Text>
// <View style={styles.icon}>
//   <Image
//     style={{width: 200, height: 200}}
//     source={require('./public/img/test_img_icon.png')}
//   />
// </View>
// <View>
//     <Text style={styles.interiorContainerText}>Try to kill the villagers.</Text>
// </View>
// <View>
//     <Text style={styles.interiorContainerText}>You're fellow werewolves are...</Text>
// </View>
// <View>
//     <Text style={styles.interiorContainerText}>[werewolf names..]</Text>
// </View>
//-----------

// identityScreen -- Villager
// <Text style={styles.titleText}>You are a Villager.</Text>
// <View style={styles.icon}>
//   <Image
//     style={{width: 200, height: 200}}
//     source={require('./public/img/test_img_icon.png')}
//   />
// </View>
// <View>
//     <Text style={styles.interiorContainerText}>Try to survive the werewolves.</Text>
// </View>
//-----------

// lobbyScreen
// <Text style={styles.titleText}>Game Name</Text>
// <View style={styles.interiorContainerWhiteSelect}>
// <Text style={styles.interiorContainerText}>Username</Text>
// <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//   <View style={styles.smallRedButton}>
//     <Text style={styles.buttonText}>Kick</Text>
//   </View>
// </TouchableHighlight>
// </View>
// <View style={styles.interiorContainerWhiteSelect}>
// <Text style={styles.interiorContainerText}>Username</Text>
// <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//   <View style={styles.smallRedButton}>
//     <Text style={styles.buttonText}>Kick</Text>
//   </View>
// </TouchableHighlight>
// </View>
// <View style={styles.interiorContainerWhiteSelect}>
// <Text style={styles.interiorContainerText}>Username</Text>
// <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//   <View style={styles.smallRedButton}>
//     <Text style={styles.buttonText}>Kick</Text>
//   </View>
// </TouchableHighlight>
// </View>
// <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//   <View style={styles.bigBlueButton}>
//     <Text style={styles.buttonTextBig}>Start</Text>
//   </View>
// </TouchableHighlight>
//-----------

// nightScreen / dayScreen
// <View style={styles.scene}></View>
// <View style={styles.voting}>
//     <View style={styles.interiorContainerGraySelect}>
//         <Text style={styles.interiorContainerText}>Username</Text>
//         <TouchableOpacity onPress={this._onPressButton} underlayColor="white">
//           <View style={styles.mediumGrayButton}>
//             <Text style={styles.buttonText}>Vote</Text>
//           </View>
//         </TouchableOpacity>
//     </View>
//     <View style={styles.interiorContainerGraySelect}>
//         <Text style={styles.interiorContainerText}>Username</Text>
//         <TouchableOpacity onPress={this._onPressButton} underlayColor="white">
//           <View style={styles.mediumGrayButton}>
//             <Text style={styles.buttonText}>Vote</Text>
//           </View>
//         </TouchableOpacity>
//     </View>
//     <View style={styles.interiorContainerGraySelect}>
//         <Text style={styles.interiorContainerText}>Username</Text>
//         <TouchableOpacity onPress={this._onPressButton} underlayColor="white">
//           <View style={styles.mediumGrayButton}>
//             <Text style={styles.buttonText}>Vote</Text>
//           </View>
//         </TouchableOpacity>
//     </View>
// </View>
//-----------

// helpScreen
// <Text style={styles.titleText}>How To Play</Text>
// <View style={styles.interiorContainerGrayView}>
//     <Text style={styles.interiorContainerText}>blah blah understand how to play the game</Text>
// </View>
//-----------

// deathScreen
// <View style={styles.icon}>
//   <Image
//     style={{width: 200, height: 200}}
//     source={require('./public/img/test_img_icon.png')}
//   />
// </View>
// <View style={styles.interiorContainerGrayViewBorderRadius}>
//     <Text style={styles.titleTextInterior}>You Died</Text>
// </View>
//-----------

// endScreen
// <Text style={styles.titleText}>[Insert Name of Winners] Win</Text>
// <View style={styles.icon}>
//   <Image
//     style={{width: 200, height: 200}}
//     source={require('./public/img/test_img_icon.png')}
//   />
// </View>
// <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//   <View style={styles.bigBlueButton}>
//     <Text style={styles.buttonTextBig}>Play Again</Text>
//   </View>
// </TouchableHighlight>
//-----------

// ******END VIEWS*******





//  the RENDER FUNCTION from my own repo:
// again note the container wrapper:
// place all views inside the container

//   render() {
//     return (
//         <View style={styles.container}>
//
//         </View>
//     );
//   }
// }



// (julia)
// STYLES:

// const styles = StyleSheet.create({
//
//   container: {
//     flex: 1,
//     paddingTop: 40,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingBottom: 30,
//   },
//
//   titleText: {
//     textAlign: 'center',
//     padding: 30,
//     color: 'black',
//     fontSize: 50,
//     marginBottom: 5,
//     marginBottom: 5,
//   },
//
//   titleTextUnderline: {
//     textAlign: 'center',
//     padding: 5,
//     color: 'black',
//     fontSize: 25,
//     marginBottom: 0,
//     textDecorationLine: 'underline',
//   },
//
//   titleTextInterior: {
//     textAlign: 'center',
//     padding: 20,
//     color: 'black',
//     fontSize: 50,
//   },
//
//   interiorContainerGraySelect: {
//     backgroundColor: 'rgb(221,221,221)',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems:'center',
//     width: 260,
//     padding:10,
//     marginBottom: 10,
//   },
//
//   interiorContainerWhiteSelect: {
//     backgroundColor: 'white',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems:'center',
//     width: 260,
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 10,
//     borderColor: 'black',
//     borderStyle: 'solid',
//     borderWidth: 1,
//   },
//
//   interiorContainerGrayViewBorderRadius: {
//     backgroundColor: 'rgb(221,221,221)',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems:'center',
//     width: 260,
//     marginTop: 30,
//     marginBottom: 30,
//     borderRadius: 10,
//     padding: 10,
//   },
//
//   interiorContainerGrayView: {
//     backgroundColor: 'rgb(221,221,221)',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems:'center',
//     width: 260,
//     marginTop: 30,
//     marginBottom: 30,
//     padding: 10,
//   },
//
//   interiorContainerText: {
//     textAlign: 'center',
//     color: 'rgb(136,136,136)',
// },
//
//   bigBlueButton: {
//     marginBottom: 20,
//     width: 260,
//     borderRadius: 10,
//     alignItems: 'center',
//     backgroundColor: '#2196F3'
//   },
//
//   bigRedButton: {
//     marginBottom: 20,
//     width: 260,
//     borderRadius: 10,
//     alignItems: 'center',
//     backgroundColor: 'red',
//   },
//
//   mediumGrayButton: {
//     width: 70,
//     alignSelf: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//     backgroundColor: 'rgb(196,196,196)',
//   },
//
//   smallRedButton: {
//       width: 70,
//       alignSelf: 'center',
//       alignItems: 'center',
//       borderRadius: 10,
//       backgroundColor: 'red',
//       borderColor: 'black',
//       borderStyle: 'solid',
//       borderWidth: 1,
//   },
//
//   buttonTextBig: {
//     textAlign: 'center',
//     padding: 15,
//     color: 'black',
//     fontSize: 40,
// },
//
//   buttonText: {
//     textAlign: 'center',
//     padding: 5,
//     color: 'black'
// },
//
// icon: {
//     padding: 10,
//     marginBottom: 15,
//     marginBottom: 15,
//     alignItems: 'center',
//     justifyContent: 'space-around',
// },
//
// inputBox: {
//     padding: 20,
//     marginTop: 5,
//     marginBottom: 5,
//     width: 260,
//     backgroundColor: 'rgb(221,221,221)',
//     color: 'rgb(136,136,136)',
//     fontSize: 40,
//     textAlign: 'center'
// },
//
// scene: {
//     flex: 2,
// },
//
// voting: {
//     flex: 1,
// }
//
// });
