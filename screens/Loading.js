/*****************************************************************************
* _title_    = 'Loading'                                                     *   
* _author_   = 'Gabriel Bobello'                                             *   
* _revinfo_  =  ('2021-03-17 08:33', 'Gabriel Bobello')                      *   
* _status_   = 'revisado'                                                    *   
* _exename_  = ('IFChat-Application')                                        *                   
*                                                                            *
* Copyright ©: IFChat-Application                                            *
******************************************************************************/



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

    closeComponent = () => {
        var container = ReactDOM.findDOMNode(this).parentNode;
        ReactDOM.unmountComponentAtNode(container);
    }

    CarregaDadosUsuario = async () => {
        console.disableYellowBox = true;
        const user = this.state.user;
        var userEx;

        let currUserExists = await api.findUserByUId(user._id);  

        if (currUserExists == null){
            this.state={loading: false};
            await Actions.Usuario({user});
            //this.closeComponent();
        }
        else {
            this.state={loading: false};
            await Actions.ChatsExistentes({user:currUserExists});
            //this.closeComponent();
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