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

        let currUserExists = await api.findUserByUId(user._id);
        console.log(currUserExists);

        if (currUserExists == null){
            this.state={loading: false};
            Actions.Usuario({user});
        }
        else {
            this.state={loading: false};
            Actions.ChatsExistentes({user:currUserExists});
        }   
    }

    componentDidMount(){
        this.CarregaDadosUsuario();
    }

    render(){
        if(this.state.loading){
            return(
                <View style={styles.container}>
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