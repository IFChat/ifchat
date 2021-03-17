/*****************************************************************************
* _title_    = 'database'                                                    *   
* _author_   = 'Gabriel Bobello'                                             *   
* _revinfo_  =  ('2021-03-17 08:21', 'Gabriel Bobello')                      *   
* _status_   = 'revisado'                                                    *   
* _exename_  = ('IFChat-Application')                                        *                   
*                                                                            *
* Copyright ©: IFChat-Application                                            *
******************************************************************************/



import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC6oUoUqJNNy2bklGh6kGMOttzje15m0Rs",
    authDomain: "ifchat-application.firebaseapp.com",
    databaseURL: "https://ifchat-application.firebaseio.com",
    projectId: "ifchat-application",
    storageBucket: "ifchat-application.appspot.com",
    messagingSenderId: "217080307611",
    appId: "1:217080307611:web:6a608c0788defcdad04b3e"   
}

firebase.initializeApp(firebaseConfig);

export default firebase;