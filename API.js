import firebase from "./database"
import RetornaUsers from "./json/RetornaUsers.json"


const api = {

    findUserByUId: async function(id){
        const user = await firebase
            .database()
            .ref('users')
            .orderByChild('_id')
            .equalTo(id)
            .once('value')
        if (user.exists()){
            return Object.values(user.val())[0];
        }
        return null;

    },

    createUserinDatabase: async function(user){
        firebase.database().ref('users').push(user)
        .then(function(user){
        })
    },

    loginUser: async function (email, password){
                firebase.auth().signInWithEmailAndPassword(email, password)
                .then(function(user){
                    console.log('Autenticado com sucesso singin!');
                })
    },

    createUser: async function (email, password){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(function(error){
            firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(async error =>  {
                return(error);
            })
        })
    },

    onAuthStateChanged: async function(AuthState){
        const user = firebase.auth().onAuthStateChanged;
            if(user){
                const currUser = firebase.auth().currentUser; 
                const newUser = {
                    _id: currUser.uid,
                    email: currUser.email,
                }    
                return(newUser);
            }
    },

    updateMessages: async function(callback, user, userChamado){
        firebase.database()
        .ref("messages")
        .on('child_added', (snapshot) => {
            callback(parse(user, userChamado, snapshot));
        })
    },

    createMessage: function async (message){
        firebase.database().ref("messages").push(message);
        console.log("Chegou aqui!");
    },

};

function parse (userId, userChamado, snapshot) {
    var message;
    const {createdAt, text, user, userRecebe} = snapshot.val();
    const { key: _id } = snapshot;
    if ((user._id == userId._id) && (userRecebe._id == userChamado._id)){
        message = {_id , createdAt, text, user};
    }
    else if ((user._id == userChamado._id) && (userRecebe._id == userId._id)){
        message = {_id , text, createdAt , user}; 
    }
    else{
        message = {};
    }



    console.log(message);
    return message;
};

export default api;