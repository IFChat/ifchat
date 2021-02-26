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

/*export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            user : false,
        }
    }

    VerificaUserConnected = async () => {
        await firebase.auth().onAuthStateChanged(async function (user) {
            if (user) {
                this.state={user: true};
            }
        })
    }

    componentDidMount(){
        this.VerificaUserConnected();
    }

    render(){
        if(this.state.user){
            const currentUser = firebase.auth().currentUser;
            newUser = {
                _id: currentUser.uid,
                email: currentUser.email,
            };
            this.state={loading: false};
            if(newUser != null){
                Actions.Loading({newUser});
            }
            return(
                <View style={styles.container}>
                    <ActivityIndicator 
                    animating={this.state.loading}
                    size="large" 
                    color="#d3d3d3"/>
                    <Text style={styles.Text}>Aguarde carregando informações...</Text>
                </View>
            );
        }

        else{
            const email = this.state.email;
            const password = this.state.password;

            async function ChamaTelaChat() {
                LogBox.ignoreAllLogs();

                console.log(email);
                console.log(password);

                var newUser = {};
                var n = email.indexOf('@');
                var dominio = email.substring(email.length, n+1);

                if ((dominio == 'aluno.ifsc.edu.br') || (dominio == 'ifsc.edu.br'))/*Verificando se o domínio está correto{
                    await api.createUser(email, password);  //Criando usuário no Authentication

                    await firebase.auth().onAuthStateChanged(async function(user){ // Recebendo usuário conectado
                        if(user){
                            console.log('User connected');
                            console.log('Autenticado com sucesso!');

                        
                            const currUser = firebase.auth().currentUser; //Recebendo usuário atual
                            newUser = {
                                _id: currUser.uid,
                                email: currUser.email,
                            // senha: password, *Removido por conta da regra de 'negócio'*
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

            <View style={styles.containerlogo}>
                <Image 
                source={require('../assets/icon1.png')}
                />
            </View>

            <View>
                <View style={styles.vText}>
                    <Text style={styles.Text}>Email</Text>
                </View>
                <View style={styles.vInput}>
                    <TextInput id='email' placeholder='Digite seu email institucional' 
                    autocorrect={false} value={this.setState.email} onChangeText={this.setState.email} style={styles.Input} />
                </View>
                <View style={styles.vText}>
                    <Text style={styles.Text}>Senha</Text>
                </View>
                
                <View style={styles.vInput}>
                    <TextInput id='password' secureTextEntry={true} placeholder='Digite sua senha institucional' 
                    autoCorrect={false} value={this.setState.senha} onChangeText={this.setState.senha} style={styles.Input} />
                </View>

                <View style={styles.vText}>
                    <TouchableOpacity>
                        <Text style={styles.Esquece}>Esqueceu sua senha?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={ChamaTelaChat} style={styles.btnSubmit}>
                        <Text style={styles.Button}>Entrar</Text>
                </TouchableOpacity>
            </View>


            </View>
          );   
        };
    };

};*/

const Home = (props) => {

    LogBox.ignoreAllLogs();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function ChamaTelaChat() {

        var newUser = {};
        var n = email.indexOf('@');
        var dominio = email.substring(email.length, n+1);

        if ((dominio == 'aluno.ifsc.edu.br') || (dominio == 'ifsc.edu.br')){//Verificando se o domínio está correto
            await api.createUser(email, password);  //Criando usuário no Authentication

            await firebase.auth().onAuthStateChanged(async function(user){ // Recebendo usuário conectado
                if(user){
                    console.log('User connected');
                    console.log('Autenticado com sucesso!');

                
                    const currUser = firebase.auth().currentUser; //Recebendo usuário atual
                    newUser = {
                        _id: currUser.uid,
                        email: currUser.email,
                       // senha: password, *Removido por conta da regra de 'negócio'*
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

        <View style={styles.containerlogo}>
            <Image 
            source={require('../assets/icon1.png')}
            />
        </View>

        <View>
            <View style={styles.vText}>
                <Text style={styles.Text}>Email</Text>
            </View>
            <View style={styles.vInput}>
                <TextInput id='email' placeholder='Digite seu email institucional' autocorrect={false} value={email} onChangeText={setEmail} style={styles.Input} />
            </View>
            <View style={styles.vText}>
                <Text style={styles.Text}>Senha</Text>
            </View>
            
            <View style={styles.vInput}>
                <TextInput id='password' secureTextEntry={true} placeholder='Digite sua senha institucional' 
                autoCorrect={false} value={password} onChangeText={setPassword} style={styles.Input} />
            </View>

            <View style={styles.vText}>
                <TouchableOpacity>
                    <Text style={styles.Esquece}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={ChamaTelaChat} style={styles.btnSubmit}>
                    <Text style={styles.Button}>Entrar</Text>
            </TouchableOpacity>
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
