

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAyOex4Ivt2XeTtKJRfq66x3s4pDLAfbsc",
    authDomain: "fir-iot-3c3f3.firebaseapp.com",
    databaseURL: "https://fir-iot-3c3f3-default-rtdb.firebaseio.com",
    projectId: "fir-iot-3c3f3",
    storageBucket: "fir-iot-3c3f3.appspot.com",
    messagingSenderId: "239309400766",
    appId: "1:239309400766:web:8a27326a0959b059804cef",
    measurementId: "G-NYYJP705WB"
};

const app = initializeApp(firebaseConfig);

const dbRef = ref(getDatabase(app));
get(child(dbRef, `Registros /Sensor_1/Humedad`)).then((snapshot) => {
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





