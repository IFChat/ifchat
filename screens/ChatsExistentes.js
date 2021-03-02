import React, {Component} from 'react';
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
import api from '../API';
import firebase from '../database';
import RetornaUsers from '../json/RetornaUsers.json'

class Teste extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }
};
export default class ChatsExistentes extends Component {

    constructor(props){
        super(props);
        this.state = {
            publicadas: []
        };
    }

    ContadorDeUsuarios = async () => {
       const publicadas = await firebase.database().ref("users").orderByChild("_id").limitToLast(20).on('value', (snapshot) => {
            //this.setState({publicadas: [snapshot.val()]});
            var teste = snapshot.val();

            var keys = Object.keys(teste);
            console.log(keys);

            for(var i=0; i<keys.length; i++){
                var key = keys[i];
                RetornaUsers.user.id = teste[key]._id;
                var val = teste[key];   
                console.log(RetornaUsers.user.id);
            }


        })
    }

    componentDidMount(){
        this.ContadorDeUsuarios();
    }

    render(){

        const publicadas = this.state.publicadas;
        console.log(publicadas[1]);

        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.convesas} onPress={this.ContadorDeUsuarios}>
                    <Text>Teste</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

/*const ChatsExistentes = props => {

    const {user} = props.navigation.state.params;

    return(
        
        <View style={styles.container}>
                <TouchableOpacity /*onPress={this.ContadorDeUsuarios}>
                    <Text>Teste</Text>
                </TouchableOpacity>
        </View>
    );

};*/

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
        justifyContent: 'center',
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


//export default ChatsExistentes;