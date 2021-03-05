import React, {Component} from 'react';
import{
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Button,
    Image,
    FlatList
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import api from '../API';
import firebase from '../database';
import RetornaUsers from '../json/RetornaUsers.json';
export default class ChatsExistentes extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            user: props.navigation.state.params.user,
            userEx: props.navigation.state.params.userEx,
        };
    }

    render(){

        return(
            <View style={styles.container}>
                <FlatList 
                    data={this.state.userEx}   
                    renderItem={({item}) => 
                        <TouchableOpacity style={styles.convesas} onPress={() => { console.log( item._id)}}>
                            <View style={styles.foto}>
                                <Image source={{ uri: item.avatar }}  style={styles.fotinho}/>
                            </View>
                            <View style={styles.name}>
                                <Text style={styles.text}>
                                    {item.name}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    } 
                    keyExtractor={item => item._id}
                />
            </View>
        );
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
        borderColor: '#8dc641',
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

    }
});

