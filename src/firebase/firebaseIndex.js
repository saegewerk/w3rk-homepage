import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/app'
const firebaseConfig = {
    apiKey: "AIzaSyCb_sbwtCUrYrdd3eGDHWtOqLeB3V1FGHs",
    authDomain: "twintwinserver.firebaseapp.com",
    databaseURL: "https://twintwinserver.firebaseio.com",
    projectId: "twintwinserver",
    storageBucket: "twintwinserver.appspot.com",
    messagingSenderId: "379603785189",
    appId: "1:379603785189:web:2d9fa5b381012e643c0b0c"
};
firebase.initializeApp(firebaseConfig);
firebase.auth();
export default {
    firebaseConfig,
}