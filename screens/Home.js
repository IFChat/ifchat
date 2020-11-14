import React from 'react';
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

const Home = (props) => {

    
    
    function ChamaTelaChat() {
        Actions.menssagens();
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
                    <Text style={styles.Text}>Email</Text>
                </View>
                
                <View style={styles.vInput}>
                    <TextInput placeholder='Digite seu email institucional' autocorrect={false} onChangeText={()=> {}} style={styles.Input} />
                </View>
                
                <View style={styles.vText}>
                    <Text style={styles.Text}>Senha</Text>
                </View>
                
                <View style={styles.vInput}>
                    <TextInput secureTextEntry={true} placeholder='Digite sua senha institucional' 
                    autoCorrect={false} onChangeText={()=> {}} style={styles.Input} />
                </View>

                <View style={styles.vText}>
                    <Text style={styles.Esquece}>Esqueceu sua senha?</Text>
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
        fontFamily: 'Arial',
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