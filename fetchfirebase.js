import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import { getFirestore, getDocs, collection, query, where } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

var notconnected = document.querySelector('.filter_embedquestion-error');
console.log("le not connected est :",notconnected)

if (notconnected != null) {

console.log('le script se lance ce batard');

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

var exerciceContainer = document.querySelectorAll('.exercice');
console.log('la liste dexo est', exerciceContainer);

async function fetchAndProcessData(index) {




  if (index >= exerciceContainer.length) {
    return; // Stop when all elements have been processed
  }

  const id = exerciceContainer[index].id;
  console.log("le id esr", id);



  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  


  async function extractData(id) {
    console.log("la valeur de l'id dans la fonction est",id, " et l'id est de la forme",typeof(id))
    const citiesRef = collection(db, "exo(1)");
    var q = query(citiesRef, where("exercisenumber", "==", Number(id)));
    console.log("l'exercice est", q)
    const querySnapshot = await getDocs(q);
    console.log("lequery snapshot est",querySnapshot);
    var resultatsRequete = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      console.log("les doc.data sont", doc.data())
      resultatsRequete.push(doc.data());
      

    })
  
    console.log("le resultat de la requete dans la fonction est:",resultatsRequete)
    return resultatsRequete;
  } 
console.log("juste avant d'appeller extractdata la valeur de l'id est :",id.toString())
;var resultatsRequete= await extractData(id);
console.log("le resultat de la requete a l'xtrieur:",resultatsRequete)

    if (resultatsRequete.length < 2 && resultatsRequete.length >0 && id!=11119119919191 ) {
      exerciceContainer[index].innerHTML = 
 
     <div class= filter_embedquestion-error">
         
      ${resultatsRequete[0].cntenu}


      <div class="blurredpopup"style="display:none"><div class="gosabonner">Pour vérifier vos réponses, il vous faut un compte (c'est gratuit 🥳). <br><a class="awhite" href="https://galilee.ac/login/index.php"> <div class="whitebutton"><b> Connexion</b></div></a> <button type="button" class="btn-close close closespan">
      <span class="icon-cross"></span>
      <span class="visually-hidden">Close</span>
    </button></div>
    </div>
      </div>
      
