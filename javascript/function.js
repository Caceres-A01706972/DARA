

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAKyAjxAkpF9XBPF_pkvRO67bGCCEw8XaE",
    authDomain: "dara-d66da.firebaseapp.com",
    databaseURL: "https://dara-d66da-default-rtdb.firebaseio.com",
    projectId: "dara-d66da",
    storageBucket: "dara-d66da.appspot.com",
    messagingSenderId: "710329915443",
    appId: "1:710329915443:web:9e72382b8b22f5a4fbeb46"
};

const app = initializeApp(firebaseConfig);

const dbRef = ref(getDatabase(app));
get(child(dbRef, `Registros /Sensor 1/Lectura`)).then((snapshot) => {
    if (snapshot.exists()) {
        let lect = snapshot.val();
        const element = document.getElementById("lectura-id");
        element.innerHTML = lect;
        console.log(snapshot.val());
    } else {
        console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});





