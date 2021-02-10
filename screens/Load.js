import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    BackHandler,
    ActivityIndicator
} from 'react-native';
import { Actions } from 'react-native-router-flux'; 

const Load = props => {

    return(
        <View style={styles.container}>
            <ActivityIndicator size="large" />
        </View>
    );
};


export default Load;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8dc641',
    },
});