import React, {Component, useState} from 'react';
import{
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Button,
    Image,
    FlatList,
    Animated,
    ActivityIndicator
} from 'react-native';
import { Actions, HeaderModeType } from 'react-native-router-flux';
import api from '../API';
import firebase from '../database';
import RetornaConversasExistentes from '../json/RetornaConversasExistentes.json';
import RetornaUsers from '../json/RetornaUsers.json';
import * as Animatable from 'react-native-animatable';
export default class ChatsExistentes extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            user: props.navigation.state.params.user,
            loading: true,
            mostrausr: false,
        };
    }

    closeComponent = () => {
        var container = ReactDOM.findDOMNode(this).parentNode;
        ReactDOM.unmountComponentAtNode(container);
    }



    RetornaConversasExistentes = async () => {
        this.setState({loading: true});
        console.disableYellowBox = true;
        var values = '';
        console.log('Passou aqui 0');
        firebase.database().ref("messages").on('value', (snapshot) => {
            values = snapshot.val();
            console.log('Passou aqui 1.0');
            console.log(values);
            if (values != null){
                var keys = Object.keys(values);
                console.log('Passou aqui 1.1');
                for(var i=0; i<keys.length; i++){
                    var key = keys[i];
                    var valor = values[key];
                    if(valor.user._id == this.state.user._id){
                        console.log(RetornaConversasExistentes.users);
                        var found = RetornaConversasExistentes.users.find(element => element._id === valor.userRecebe._id);
                        if(found == undefined){
                            RetornaConversasExistentes.users[i] = valor.userRecebe;
                        }
                    }
                    else{ 
                        if(valor.userRecebe._id == this.state.user._id){
                            var found = RetornaConversasExistentes.users.find(element => element._id === valor.user._id);
                            if(found == undefined){
                                RetornaConversasExistentes.users[i] = valor.user;
                            }
                        }
                    }
                }
            }
            setTimeout(() => {
                this.setState ({loading: false});
            }, 3000);
        })
    }

    CarregaUsers =  () => {
        this.setState({loading: true});
        console.disableYellowBox = true;
        firebase.database().ref("users").on('value', (snapshot) => {
            var userEx = snapshot.val();

            var keys = Object.keys(userEx);
            
            for(var i=0; i<keys.length; i++){
                var key = keys[i];
                RetornaUsers.users[i] = userEx[key];
            }

        });
        setTimeout(() => {
            this.setState ({loading: false});
        }, 3000); 
    }

    componentDidMount(){
        this.RetornaConversasExistentes();
    }

    render(){
        if(this.state.loading){
            return(
                <View style={{flex: 1,alignItems: 'center',justifyContent: 'center',}}>
                    <Animatable.Text 
                    style={{fontSize: 15}}
                    animation="pulse"
                    useNativeDriver
                    iterationCount={Infinity}
                    >Carregando...</Animatable.Text>
                </View>
            );
        }
        else{
            if(this.state.mostrausr){
                const renderItemUsr = ({item}) => (
                    <TouchableOpacity style={styles.convesas} onPress={async () => {
                        Actions.Chat({idUser: user, idUserChamado: item});
                        RetornaUsers.users = [];
                        RetornaConversasExistentes.users = [];
                        this.closeComponent();
                    }}>
                        <View style={styles.foto}>
                            <Image source={{ uri: item.avatar }}  style={styles.fotinho}/>
                        </View>
                        <View style={styles.name}>
                            <Text style={styles.text}>
                                {item.name}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
                const user = this.state.user;
                return(
                    <View style={styles.container}>
                        <Animatable.View animation="fadeInUp" style={styles.container}>
                            <FlatList 
                                data={RetornaUsers.users}
                                keyExtractor={(index) => index}   
                                renderItem={renderItemUsr} 
                            />
                        </Animatable.View>
                                <TouchableOpacity style={styles.botao} onPress={() => {
                                    RetornaUsers.users = [];
                                    RetornaConversasExistentes.users = [];
                                    this.RetornaConversasExistentes();
                                    if(this.state.mostrausr){
                                        this.setState ({mostrausr:false});
                                    }
                                    else{this.setState ({mostrausr:true});}
                                }}>
                                    <Image source={require('../img/msg.png')}></Image>
                                </TouchableOpacity>
                        </View>
                );
            }
            else{
                const user = this.state.user;
                const renderItem = ({item}) => (
                    <TouchableOpacity style={styles.convesas} onPress={async () => {
                        Actions.Chat({idUser: user, idUserChamado: item});
                        RetornaUsers.users = [];
                        RetornaConversasExistentes.users = [];
                        this.closeComponent();
                    }}>
                        <View style={styles.foto}>
                            <Image source={{ uri: item.avatar }}  style={styles.fotinho}/>
                        </View>
                        <View style={styles.name}>
                            <Text style={styles.text}>
                                {item.name}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
                return(
                    <View style={styles.container}>
                        <Animatable.View animation="fadeInUp" style={styles.container}>
                            <FlatList 
                                data={RetornaConversasExistentes.users}
                                keyExtractor={(item) => item}   
                                renderItem={renderItem} 
                            />
                        </Animatable.View>

                            <TouchableOpacity style={styles.botao}
                            onPress={() => {
                                RetornaUsers.users = [];
                                RetornaConversasExistentes.users = [];
                                this.CarregaUsers();
                                if(this.state.mostrausr){
                                    this.setState ({mostrausr:false});
                                }
                                else{this.setState ({mostrausr:true});}
                            }}>
                                <Image source={require('../img/msg.png')}></Image>
                            </TouchableOpacity>
                    </View>

                );
            }
        }

    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    convesas:{
        borderColor: '#E0E0E0',
        borderWidth: 1,
        borderRadius: 0,
        height: 100,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    text:{
        fontSize: 20
    },
    name:{
        marginTop: 35,
        alignItems: 'center',
        justifyContent:'center'
    },  
    foto:{
        marginLeft:10,
        marginTop: 15,
        borderColor: '#000',
        borderRadius: 100,
        borderWidth: 1.5,
        marginRight: 25,
        width: 70,
        height:70,
        alignItems: 'center',
        justifyContent:'center'
    },
    fotinho:{
        width: 68,
        height:68,
        borderRadius: 100,   
    },
    Nome:{
        alignItems: 'flex-start',
        justifyContent:'center',
        marginLeft:200,

    },
    botao: {
        justifyContent: 'center',
        backgroundColor: '#8dc641',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginLeft: 300,
        marginBottom: 10,
        borderRadius: 100,
        width: 50,
        height:50,
    }
});

