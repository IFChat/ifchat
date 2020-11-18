import React from 'react'
import {
    View,
    Text
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const Chat = props => {
    
    const {user} = props.navigation.state.params;

    const messagens = [
    {
        _id: 1,
        text: 'Olá Gabriel',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: "Erick",
            avatar: "jklalf",
        },
    },
    {
        _id: 1,
        text: 'Tudo bem',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: "Erick",
            avatar: "jklalf",
        },  
    },
];

    function onSendMessage(messagens){
        console.log(messagens);
    }


    return(
        <GiftedChat user={user}  messages={messagens} onSend={onSendMessage} />
    );
};


export default Chat;