import firebase from "./database"

const api = {

    createUserinDatabase: function(user){
        firebase.database().ref('users').push(user)
        .then(function(user){
            console.log('Sucesso na criação fdp');
        })
    },
    
    currentUser: function(user){
        firebase.auth().currentUser;
    },


    loginUser: function (email, password){
                firebase.auth().signInWithEmailAndPassword(email, password)
                .then(function(user){
                    console.log('Autenticado com sucesso singin!');
                })
    },

    createUser: function (email, password){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(user){
            firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(function(error) {
                console.log(error.code);
                console.log(error.message);
                console.log('Erro de Autenticação!');
            });
        })
        .catch(function(error){
            console.log(error.code);
            console.log(error.message);
            console.log('Erro na Criação de conta!');
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