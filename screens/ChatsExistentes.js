import React from 'react';
import{
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const ChatsExistentes = props => {

    function ChamaTelaChat(){
        Actions.chat();
    }


    return(
           
        <View style={styles.container}>

        </View>


    );

};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    
});


export default ChatsExistentes;