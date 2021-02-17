import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    BackHandler
} from 'react-native';
import { Actions } from 'react-native-router-flux'; 
import api from '../API';

const Usuario = (props) => {
    
    const user = props.navigation.state.params.newUser;

    function Teste(){
        console.log(user);
    }
return(

    <View style={styles.container}>
            
        <View style={styles.containerlogo}>
            <Image 
            source={require('../assets/icon1.png')}
            />
        </View>

        <View>
            <View style={styles.vText}>
                <Text style={styles.Text}>Nome</Text>
            </View>
            
            <View style={styles.vInput}>
                <TextInput id='nome' placeholder='Digite seu nome' autocorrect={false} /*value={email} onChangeText={setEmail}*/ style={styles.Input} />
            </View>

            <TouchableOpacity onPress={Teste} style={styles.btnSubmit}>
                    <Text style={styles.Button}>Continuar</Text>
            </TouchableOpacity>
        </View>
    

    </View>
    );
};


export default Usuario;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8dc641',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerlogo:{
        justifyContent: 'center',
    },

    vText:{
        justifyContent: 'center',
        flexDirection: 'row'
    },
    vInput:{

      alignItems: 'center',
    },
    Text:{
        marginTop: 10,
        fontSize: 20, 
        color: '#fff'   
    },
    Esquece:{
        margin: 5,
        fontSize: 15,
    }, 
    Input:{
        alignContent: 'center',
        marginTop: 10,  
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#000',
        padding: 5,
        backgroundColor: '#fff',
        width: 370,
        padding: 10,
    }, 
    Button:{
        fontSize: 20,
        color: '#FFF'
    },
    
    btnSubmit:{
        marginTop: 20,
        backgroundColor: '#165a12',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 10,
    }
});









        
        
        
        
        // buscar usuário pelo nome no banco
      //  const user = await api.findUserByName(name);
        // caso este usuário não exista, criar
       // if (user == null){
          //  const newUser = {
           //     _id: new Date().getTime(),
           //     name: name,
          //      avatar: 'https://placeimg.com/140/140/people',
          //  }
          //  await api.createUser(newUser);
           // Actions.menssagens({ user: newUser });
       // }
       // else{
        //    Actions.menssagens({ user });
      //  }