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

    retornaUsers: function async (callback) {
        const inf = firebase.database()
        .ref("users")
        .limitToLast(20)

        inf.on("value", (snapshot) => {
            const teste = snapshot.val() ;
        });

        return(teste);

    },

    


};

//const parse = (snapshot) => {
  //  const {name, avatar} = snapshot.val();
    //const {key: _id} = snapshot;
    //const usersExist = {_id, name, avatar}
    //return user;
//};

export default api;