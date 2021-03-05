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
            .then(function(user){
            })
            .catch(function (error) {
                var error = error.code;
                return Object.values(error.val);
            })
        })
    },

    onAuthStateChanged: async function(AuthState){
        const user = firebase.auth().onAuthStateChanged;
            if(user){
                const currUser = firebase.auth().currentUser; //Recebendo usuário atual
                const newUser = {
                    _id: currUser.uid,
                    email: currUser.email,
                   // senha: password, *Removido por conta da regra de 'negócio'*
                }    
                return(newUser);
            }
    },

    retornaUsers: async () => {   
        await firebase.database().ref("users").orderByChild("_id").limitToLast(20).on('value', (snapshot) => {
            return(snapshot.val());
        })
    },

    


};

//const parse = (snapshot) => {
  //  const {name, avatar} = snapshot.val();
    //const {key: _id} = snapshot;
    //const usersExist = {_id, name, avatar}
    //return user;
//};

export default api;