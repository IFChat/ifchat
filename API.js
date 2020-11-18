import firebase from "./database"

const api = {

    findUserByName: async function(name){
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
    },

    createUser: function (user){
        firerbase.database().ref('users').push(user);
    }
};



export default api;