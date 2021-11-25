
import { getDatabase, ref, onValue } from "firebase/database";
const database = getDatabase();
var ref = firebase.database().ref('Plantas');
ref.orderByKey(), function(snapshot) {
    console.log(snapshot.key);
};











//Acceder a servicio de basesd de datos
//const data = firebase.database();

/*Obtener una referencia de la raiz de la base de datos
let refToData = data.ref();

//Obtener una console.log de todos los datos
DataTransfer.once('value', snapshot => {
    console.log(snapshot.val());
})
 */





