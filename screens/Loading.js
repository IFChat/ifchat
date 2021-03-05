import React, { useState, Component } from 'react';
import { render } from 'react-dom';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    Button,
    LogBox
} from 'react-native';
import { Actions } from 'react-native-router-flux'; 
import api from '../API';
import firebase from '../database';

export default class Loading extends Component {

    constructor(props){
        super(props);
        this.state = {
            loading: true,
            user: props.navigation.state.params.newUser,
        }
    }


    CarregaDadosUsuario = async () => {
        LogBox.ignoreAllLogs();
        const user = this.state.user;
        var userEx;

        let currUserExists = await api.findUserByUId(user._id);

        var val = [];

        await firebase.database().ref("users").on('value', async function (snapshot) {
            userEx = snapshot.val();

            var keys = Object.keys(userEx);
        
            for(var i=0; i<keys.length; i++){
                var key = await keys[i];
                val[i] = await userEx[key]
            }
        });    

        if (currUserExists == null){
            this.state={loading: false};
            var userEx = await val; 
            await Actions.Usuario({user, userEx: val});
        }
        else {
            this.state={loading: false};
            var userEx = await val;
            await Actions.ChatsExistentes({user:currUserExists, userEx: val});
        }   
    }

    componentDidMount(){
        this.CarregaDadosUsuario();
    }

    render(){
        if(this.state.loading){
            return(
                <View style={styles.container}>
                    <Image source={require('../assets/icon.png')} />
                    <ActivityIndicator 
                    animating={this.state.loading}
                    size="large" 
                    color="#d3d3d3"/>
                    <Text style={styles.Text}>Aguarde carregando informações...</Text>
                </View>
            )
        }

        else{

        }
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8dc641',
        justifyContent: 'center',
        alignItems: 'center',
    },
    horizontal:{
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    Text:{
        marginTop: 20,
        color: '#fff',
    }
});