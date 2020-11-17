import React from 'react';
import{
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const Pesquisa = props => {

    return(
           
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnSubmit} >
                <Text style={styles.Button}>Chats</Text>
            </TouchableOpacity>
        </View>


    );

};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    btnSubmit:{
        marginTop: 20,
        backgroundColor: '#165a12',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 10,
    },
    Button:{
        fontSize: 20,
        color: '#FFF'
    },    
});


export default Pesquisa;