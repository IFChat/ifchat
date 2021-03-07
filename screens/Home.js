import React, { useState, Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    BackHandler,
    ActivityIndicator,
    LogBox
} from 'react-native';
import { Actions } from 'react-native-router-flux'; 
import api from '../API';
import firebase from '../database';
import * as Animatable from 'react-native-animatable';

const Home = (props) => {

    LogBox.ignoreAllLogs();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function ChamaTelaChat() {

        var newUser = {};
        var n = email.indexOf('@');
        var dominio = email.substring(email.length, n+1);

        if ((dominio == 'aluno.ifsc.edu.br') || (dominio == 'ifsc.edu.br')){
           var error = await api.createUser(email, password);  
            await firebase.auth().onAuthStateChanged(async function(user){ 
                if(user){

                    const currUser = firebase.auth().currentUser; 
                    newUser = {
                        _id: currUser.uid,
                        email: currUser.email,
                    }   

                    if (newUser != null){
                        Actions.Loading({newUser});
                    }
                                     
                }
            
            })
            
       }else{
            alert('Email com domínio não autorizado!'); 
            //Informando que o domínio utilizado não é válido
        }
    };

return(

    <View style={styles.container}>

        <Animatable.View animation="fadeInDownBig" style={styles.containerlogo}>
            <Image 
            source={require('../assets/icon1.png')}
            />
        </Animatable.View>

        <View>
            <Animatable.View animation="fadeInUpBig" style={styles.vText}>
                <Text style={styles.Text}>Email</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUpBig"
            style={styles.vInput}>
                <TextInput id='email' placeholder='Digite seu email institucional' autocorrect={false} value={email} onChangeText={setEmail} style={styles.Input} />
            </Animatable.View>

            <Animatable.View animation="fadeInUpBig" style={styles.vText}>
                <Text style={styles.Text}>Senha</Text>
            </Animatable.View>
            
            <Animatable.View animation="fadeInUpBig" style={styles.vInput}>
                <TextInput id='password' secureTextEntry={true} placeholder='Digite sua senha institucional' 
                autoCorrect={false} value={password} onChangeText={setPassword} style={styles.Input} />
            </Animatable.View>

            <Animatable.View animation="fadeInUpBig">
                <TouchableOpacity onPress={ChamaTelaChat} style={styles.btnSubmit}>
                        <Text style={styles.Button}>Entrar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>


    </View>
    );
};


export default Home;

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
    },
    Text:{
        marginTop: 20,
        color: '#fff',
    }
});
