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
    
    const {user} = props.navigation.state.params;

return(

    <View style={styles.container}>

    

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

});