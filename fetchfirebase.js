
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import { getFirestore, getDocs, collection, query, where } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

var notconnected = document.querySelector('.filter_embedquestion-error');
console.log("le not connected est :",notconnected)

if (notconnected != null) {

console.log('le script se lance ce badddddddddtard');

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


    <div class="blurredpopup" style="display:none">
    <div class="gosabonner" style="text-align: center;">
        Pour vérifier vos réponses, il vous faut un compte (c'est gratuit 🥳).
        <br>
       
        <!-- Google Connect Button -->
        <button class="gsi-material-button" id="google-connect-btn" style="
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            -webkit-appearance: none;
            background-color: WHITE;
            background-image: none;
            border: 1px solid #747775;
            -webkit-border-radius: 20px;
            border-radius: 20px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            color: #1f1f1f;
            cursor: pointer;
            font-family: 'Roboto', arial, sans-serif;
            font-size: 14px;
            height: 40px;
            letter-spacing: 0.25px;
            outline: none;
            overflow: hidden;
            padding: 0 12px;
            position: relative;
            text-align: center;
            -webkit-transition: background-color .218s, border-color .218s, box-shadow .218s;
            transition: background-color .218s, border-color .218s, box-shadow .218s;
            vertical-align: middle;
            white-space: nowrap;
            width: auto;
            max-width: 400px;
            min-width: min-content;
            margin-top:5px;
            margin-bottom: 10px; /* Adds space between button and below content */
        ">
        <div class="gsi-material-button-state" style="
            -webkit-transition: opacity .218s;
            transition: opacity .218s;
            bottom: 0;
            left: 0;
            opacity: 0;
            position: absolute;
            right: 0;
            top: 0;
            background-color: rgba(0, 0, 0, 0);
        "></div>
        
        <div class="gsi-material-button-content-wrapper" style="
            -webkit-align-items: center;
            align-items: center;
            display: flex;
            -webkit-flex-direction: row;
            flex-direction: row;
            -webkit-flex-wrap: nowrap;
            flex-wrap: nowrap;
            height: 100%;
            justify-content: space-between;
            position: relative;
            width: 100%;
        ">
            <div class="gsi-material-button-icon" style="
                height: 20px;
                margin-right: 12px;
                min-width: 20px;
                width: 20px;
            ">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: block;">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                    <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
            </div>
            
            <span class="gsi-material-button-contents" style="
                -webkit-flex-grow: 1;
                flex-grow: 1;
                font-family: 'Roboto', arial, sans-serif;
                font-weight: 500;
                overflow: hidden;
                text-overflow: ellipsis;
                vertical-align: top;
            ">Continuer avec Google</span>
            <span style="display: none;"> avec Google</span>
        </div>
        </button>

        <!-- Manually Section -->
        <div style="margin-top: 1px; font-size:smaller;">
            <a href="https://galilee.ac/login/index.php" style="color:white; text-decoration: underline;">
                ou manuellement
            </a>
        </div>

        <button type="button" class="btn-close close closespan" style="margin-top: 15px;">
            <span class="icon-cross"></span>
            <span class="visually-hidden">Close</span>
        </button>
    </div>
</div>




         
        




`;


// Function to get the sesskey from the M.cfg object
function getSesskeyFromConfig() {
    try {
        // Check if M.cfg and M.cfg.sesskey exist
        if (window.top && window.top.M && window.top.M.cfg && window.top.M.cfg.sesskey) {
            return window.top.M.cfg.sesskey;
        } else {
            console.error("Sesskey not found in the M.cfg object.");
            return null;
        }
    } catch (e) {
        console.error("Error accessing the top document's M.cfg object: ", e);
        return null;
    }
}

// Get the current URL (wantsurl)
const wantsurl = encodeURIComponent(window.location.href);

// Get sesskey using the new function
const sesskey = getSesskeyFromConfig();

// Add click listener to Google connect button
const googleButton = document.getElementById('google-connect-btn');
googleButton.addEventListener('click', function () {
    if (sesskey) {
        window.location.href = `https://galilee.ac/auth/oauth2/login.php?id=1&wantsurl=${wantsurl}&sesskey=${sesskey}`;
    } else {
        alert("Unable to find the session key. Please log in again.");
    }
});

 var images = exerciceContainer[index].querySelectorAll("img");
  console.log("les images sont:",images)
  
  for (let i=0;i<images.length;i++) {
    
   

  if (images[i].src.includes("https://galilee.ac/pluginfile.php")) {
console.log(images[i])
    images[i].style.display = "none";
    images[i].insertAdjacentHTML("afterend",'<div class="gosabonner goimage">Il faut être connecté pour voir cette image 😔.  <br><a target="_parent" class="awhite" href="https://galilee.ac/login/index.php"> <div class="whitebutton"><b> Connexion</b></div></a> </div></div>')                    
                                 
                                 
                                 
  
  
}}
var inputs=exerciceContainer[index].querySelectorAll('input');

for (let i=0;i<inputs.length;i++) {
  inputs[i].readOnly = true;
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
