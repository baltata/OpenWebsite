
console.log('le script se lance ce batard');
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
const firebaseConfig = {

  apiKey: "AIzaSyApG0hGeymXUziJIbrWmw_b7KV_CB6bY48",

  authDomain: "coursgalilee.firebaseapp.com",

  databaseURL: "https://coursgalilee-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "coursgalilee",

  storageBucket: "coursgalilee.appspot.com",

  messagingSenderId: "803812027997",

  appId: "1:803812027997:web:0e2191d417ec5c8aece7b4"

};
//import { firebase } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import { getFirestore, getDocs, collection, query, where } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

var exerciceContainer = document.querySelectorAll('.exercice');
console.log('la liste dexo est', exerciceContainer);

async function fetchAndProcessData(index) {




  if (index >= exerciceContainer.length) {
    return; // Stop when all elements have been processed
  }

  var id = exerciceContainer[index].id;

 

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const citiesRef = collection(db, "exo(1)");
 var q = query(citiesRef, where("exercisenumber", "==", id));
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot);
        var resultatsRequete=[];
        querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  
 
  resultatsRequete.push(doc.data());
  
})

if (resultatsRequete.length<2)
  conteneur.innerHTML = `
 
<div class="fake-embed">

 ${resultatsRequete[Ø].cntenu}
</div>

`;

  // Continue with the next element
  fetchAndProcessData(index + 1);
}


// Start processing from the first element
fetchAndProcessData(0);







