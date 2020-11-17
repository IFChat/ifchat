import React from "react";
import { color } from "react-native-reanimated";
import { Actions, Router, Scene } from 'react-native-router-flux'
import Chat from "./screens/Chat";
import Home from "./screens/Home";
import ChatsExistentes from "./screens/ChatsExistentes";
import Pesquisa from "./screens/Pesquisa";
import 
{ToastAndroid,
  StyleSheet
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
 



export default function App() {
  return (
    <Router>
      <Scene key="root" >
        
        <Scene key="home" 
              component={Home}
              navTransparent={1}
              initial />
       
       <Scene key="menssagens"  
              component={ChatsExistentes}
              title="IFChat - Application" 
              leftButtonImage={require('./assets/icon1.png')}
              titleStyle={{
                color: "#FFF",
                marginLeft: -40,            
              }}
              onRight={() => Actions.pesquisa ()} 
             // renderRightButton={Lupa}
              onBack={()=>{null}} 
              onLeft={() => {null}}
              back={true}
              init={true}
              hideBackImage={true}
              backToInitial={false}
              rightButtonStyle={{
                heigth: 10,
                width: 45,
              }}
              rightButtonImage={require('./img/lupa.png')}
              navigationBarStyle={{backgroundColor: '#8dc641'}} />

        <Scene key="pesquisa"
              title="Pesquisa"
              component={Pesquisa}
        />
        
        <Scene key="chat"
              title="Chat"
              component={Chat}  />

      </Scene>
    </Router>
  );
};

