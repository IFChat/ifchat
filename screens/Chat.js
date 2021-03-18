/*****************************************************************************
* _title_    = 'Chat'                                                        *   
* _author_   = 'Gabriel Bobello'                                             *   
* _revinfo_  =  ('2021-03-17 08:30', 'Gabriel Bobello')                      *   
* _status_   = 'revisado'                                                    *   
* _exename_  = ('IFChat-Application')                                        *                   
*                                                                            *
* Copyright ©: IFChat-Application                                            *
******************************************************************************/



import React, { useEffect, useState } from 'react'
import { Component } from 'react';
import {
    View,
    Text,
    Vibration,
    YellowBox
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import api from '../API';

const Chat = (props) => {

    var user = props.navigation.state.params.idUser;
    var userChamado = props.navigation.state.params.idUserChamado;

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        console.disableYellowBox = true;

        api.updateMessages((msg) => {
            if (msg != null){
                setMessages((prevMsgs) => GiftedChat.append(prevMsgs, msg));
            }
        }, user, userChamado);
    }, []);

    async function onSendMessage(msgs){
        msgs.forEach(msgs => {
            msgs.createdAt = new Date().getTime();
            msgs.userRecebe = userChamado;
            console.log(msgs);
            api.createMessage(msgs);
        })
    }

    function onLongPress(){
        Vibration.vibrate(10 * 10);
    }

    return(
        <GiftedChat 
            placeholder={'Digite Aqui...'}
            timeFormat='hh:mm'
            dateFormat='DD/MM/YYYY'
            onLongPress={onLongPress} 
            user={user} 
            messages={messages} 
            onSend={onSendMessage} 
            renderAvatarOnTop={true}       
        />
    );
};


export default Chat;