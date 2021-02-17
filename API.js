import firebase from "./database"

const api = {

    createUserinDatabase: function(user){
        firebase.database().ref('users').push(user)
        .then(function(user){
            console.log('Sucesso na criação fdp');
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
                console.log('Autenticado de fora do create');
            })
        })
    }


};



/*findUserByName: async function(name){
    const user = await firebase
        .database()
        .ref('users')
        .orderByChild('name')
        .equalTo(name)
        .once('value')
    if (user.exists()){
        return Object.values(user.val()[0])
    }
    return null;
},*/


export default api;