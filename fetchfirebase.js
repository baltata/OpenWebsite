
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
      exerciceContainer[index].innerHTML = `
 
     <div class= filter_embedquestion-error">
         
      ${resultatsRequete[0].cntenu}


      <div class="blurredpopup"style="display:none"><div class="gosabonner">Pour vérifier vos réponses, il vous faut un compte (c'est gratuit 🥳). <br><a class="awhite" href="https://galilee.ac/login/index.php"> <div class="whitebutton"><b> Connexion</b></div></a> <button type="button" class="btn-close close closespan">
      <span class="icon-cross"></span>
      <span class="visually-hidden">Close</span>
    </button></div>
    </div>
      </div>
      


         
        




`;

var inputs=exerciceContainer[index].querySelectorAll('input');

for (let i=0;i<inputs.length;i++) {
  inputs[i].addEventListener("click", (evt) => {
    evt.preventDefault();
    
    var x = exerciceContainer[index].querySelector('.blurredpopup');
    if (x.style.display === "none") {
      x.style.display = "grid";
    } else {
      x.style.display = "none";
    }
    
    
  })
}


var closebutton=exerciceContainer[index].querySelector('.close');
console.log ("le close span est:",closebutton);
closebutton.addEventListener("click", () =>{

  var x = exerciceContainer[index].querySelector('.blurredpopup');
  if (x.style.display === "none") {
    x.style.display = "grid";
  } else {
    x.style.display = "none";
  }



}
)


}
else {
  exerciceContainer[index].innerHTML = `
  <div class="filter_embedquestion-error">
        <div class="conteneurglobal">
       <!--- <img
          alt="image"
          src="https://abonnement.galilee.ac/wp-content/uploads/2022/06/Largeviewport-min.png"
       
          class="home-image"
        />
        <img
          alt="image"
          src="https://abonnement.galilee.ac/wp-content/uploads/2022/06/mediumviewport-min.png"
    
          class="home-image1"
        />
        <img
          alt="image"
          src="https://abonnement.galilee.ac/wp-content/uploads/2022/06/Smallviewport-min.png"
      
          class="home-image2"
        /> 
      -->
      <picture>
          <source media="(max-width: 549px)" srcset="https://abonnement.galilee.ac/wp-content/uploads/2022/06/Smallviewport-min.png">
          <source media="(min-width: 550px) and (max-width: 849px)" srcset="https://abonnement.galilee.ac/wp-content/uploads/2022/06/mediumviewport-min.png">
          <img src="https://abonnement.galilee.ac/wp-content/uploads/2022/06/Largeviewport-min.png" alt="IfItDoesntMatchAnyMedia">
      </picture>
      
      
  
        <div class="textebasique">
               <span><a href="https://galilee.ac/login/index.php">Se connecter</a> / <a href="https://galilee.ac/login/index.php">Créer un compte gratuit</a></span>
          
          <span class="eb-sso-cont-login-btns">
                 <!--   <a href="https://accounts.google.com/o/oauth2/auth?response_type=code&amp;redirect_uri=https%3A%2F%2Fabonnement.galilee.ac&amp;client_id=961511907345-a07tf5v1golq3flhuviad1h4l4nagqs0.apps.googleusercontent.com&amp;scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&amp;access_type=online&amp;approval_prompt=auto&amp;state=IiI%3D">
  <img class="eb-sso-social-login-icon" src="https://abonnement.galilee.ac/wp-content/uploads/2022/06/ic_google_plus.jpg"></a> -->
  
  
  
             <!--       <a href="https://www.facebook.com/v2.10/dialog/oauth?client_id=1169187163922902&amp;state=cc9ab6cc06e46dcb2e79e570e7afaab1&amp;response_type=code&amp;sdk=php-sdk-5.7.0&amp;redirect_uri=https%3A%2F%2Fabonnement.galilee.ac%2F%3Faction%3Dfacebook_login&amp;scope=email">
                     <img class="eb-sso-social-login-icon" src="https://abonnement.galilee.ac/wp-content/uploads/2022/06/facebook.png">
                    </a>-->
          </span></div>
          </div>
  </div>

 
  `;



}
;

    // Continue with the next element
    fetchAndProcessData(index + 1);
  }


  // Start processing from the first element
  fetchAndProcessData(0);



}







