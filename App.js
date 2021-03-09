import React from "react";
import { color } from "react-native-reanimated";
import { Actions, Router, Scene } from 'react-native-router-flux'
import Chat from "./screens/Chat";
import Home from "./screens/Home";
import ChatsExistentes from "./screens/ChatsExistentes";
import Pesquisa from "./screens/Pesquisa";
import Usuario from "./screens/Usuario";
import Loading from "./screens/Loading";
import 
{ToastAndroid,
  StyleSheet
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
 



export default function App() {
  return (
    <Router>
      <Scene key="root" >
        
        <Scene key="Home" 
              component={Home}
              navTransparent={1}
              initial />

        <Scene key="Usuario"
              component={Usuario}
              hideNavBar={true}
              />

        <Scene key="Loading"
              title="Loading"
              component={Loading}
              hideNavBar={true}
        />
       
       <Scene key="ChatsExistentes"  
              component={ChatsExistentes}
              title="IFChat - Application" 
              titleStyle={{
                color: "#FFF",         
              }}
              onRight={() => Actions.pesquisa()} 
              onBack={()=>{null}} 
              onLeft={() => {null}}
              hideBackImage={false}
              backToInitial={false}
              rightButtonStyle={{
                heigth: 10,
                width: 45,
              }}
              rightButtonImage={require('./img/lupa.png')}
              navigationBarStyle={{backgroundColor: '#8dc641'}} />

        <Scene key="Pesquisa"
              title="Pesquisa"
              component={Pesquisa}
        />
        
        <Scene key="Chat"
              title="Chat"
              titleStyle={{
                color: "#FFF",         
              }}
              onBack={() => {Chat = null}}
              navigationBarStyle={{backgroundColor: '#8dc641'}}
              component={Chat}  />
      

      </Scene>
    </Router> 
  );
};

