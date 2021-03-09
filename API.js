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
    
    currentUser: async function(user){
        return(firebase.auth().currentUser);
    },

    authstate: async function(user){
       return (firebase.auth().onAuthStateChanged);
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

    updateMessages: async function(callback, idUser, idUserChamado){
        firebase.database()
        .ref("messages")
        .limitToLast(20)
        .on('child_added', (snapshot) => {
            setTimeout(() => {
                const userId = idUser;
                const userChamadoId = idUserChamado;
                callback(parse(userId, userChamadoId, snapshot));
            }, 1000);
        })
    },

    createMessage: function async (message){
        firebase.database().ref("messages").push(message);
    }

};

function parse (userId, userChamadoId, snapshot) {
    var message;
    const mensagem = snapshot.val();
    const createdAt = mensagem.createdAt;
    const text = mensagem.text;
    const user = mensagem.user;
    const user2 = mensagem.userRecebe;
    
    const { key: _id } = snapshot;
    if (((user._id == userId) && (user2._id == userChamadoId)) || ((user._id == userChamadoId) && (user2._id == userId))) {
        message = {_id , createdAt, text, user, user2};
    }
    console.log(message);
    return message;
};

export default api;