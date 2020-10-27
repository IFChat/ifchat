import React from "react";
import { color } from "react-native-reanimated";
import { Router, Scene } from 'react-native-router-flux'
import Chat from "./screens/Chat";
import Home from "./screens/Home";
import ChatsExistentes from "./screens/ChatsExistentes"


export default function App() {
  return (
    <Router>
      <Scene key="root">
        <Scene key="home"  component={Home} navTransparent={1} />
        <Scene key="menssagens" component={ChatsExistentes} title="IFChat"  onBack={()=>{null}} back={true}  />
        <Scene key="chat"  title="Chat" component={Chat}  />
      </Scene>
    </Router>
  );
};


