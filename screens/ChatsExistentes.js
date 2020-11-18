import React from 'react';
import{
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Button,
    Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const ChatsExistentes = props => {

    const {user} = props.navigation.state.params;

    function ChamaChat(){
        Actions.chat( {user} );
    }


    return(
        
        <View style={styles.container}>

            <TouchableOpacity style={styles.convesas} onPress={ChamaChat}>
                <View style={styles.foto}>
                    <Image source={require('../img/megui.jpg')} style={styles.fotinho} />
                </View>  

            </TouchableOpacity>
            
            <TouchableOpacity style={styles.convesas} onPress={ChamaChat}>
                <View style={styles.foto}>
                    <Image source={require('../img/alex.jpg')} style={styles.fotinho} />
                </View>  
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.convesas} onPress={ChamaChat}>
                <View style={styles.foto}>
                    <Image source={require('../img/ob.jpg')} style={styles.fotinho} />
                </View>  
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.convesas} onPress={ChamaChat}>
                <View style={styles.foto}>
                    <Image source={require('../img/lipe.jpg')} style={styles.fotinho} />
                </View>  
            </TouchableOpacity>
           
            <TouchableOpacity style={styles.convesas} onPress={ChamaChat}>
                <View style={styles.foto}>
                    <Image source={require('../img/zuluzao.png')} style={styles.fotinho} />
                </View>  
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.convesas} onPress={ChamaChat}>
                <View style={styles.foto}>
                    <Image source={require('../img/megui.jpg')} style={styles.fotinho}/>
                </View>  
            </TouchableOpacity>

        </View>


    );

};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    convesas:{
        borderColor: '#E0E0E0',
        borderWidth: 1,
        borderRadius: 0,
        height: 100,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    foto:{
        marginLeft:10,
        borderColor: '#8dc641',
        borderRadius: 100,
        borderWidth: 1.5,
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

    }
});


export default ChatsExistentes;