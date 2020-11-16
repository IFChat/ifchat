import React from "react";
import { color } from "react-native-reanimated";
import { Router, Scene } from 'react-native-router-flux'
import Chat from "./screens/Chat";
import Home from "./screens/Home";
import ChatsExistentes from "./screens/ChatsExistentes";
import { ToastAndroid } from "react-native";
 



export default function App() {
  return (
    <Router>
      <Scene key="root" >
        <Scene key="home"  component={Home} navTransparent={1} initial/>
        <Scene key="menssagens"  component={ChatsExistentes} title="IFChat - Application" titleStyle={{color: "#FFF"}}
          rightButtonImage={require('./img/lupa.png')} onRight={() => {null}} backButtonImage={require('./assets/verde.png')} 
         onBack={()=>{null}} back={true} navigationBarStyle={{backgroundColor: '#8dc641'}} />
        <Scene key="chat"  title="Chat" component={Chat}  />
      </Scene>
    </Router>
  );
};
