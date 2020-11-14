import React from 'react'
import {
    View,
    Text
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const Chat = props => {
    
    const usuario ={
        _id: 1,
        name: "Erick",
        avatar: "url",
    };

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

    function onSendMessage(){
        console.log(messagens);
    }


    return(
        <GiftedChat user={usuario}  messages={messagens} onSend={onSendMessage} />
    );
};


export default Chat;