
    // Import the functions you need from the SDKs you need
    import {
        initializeApp
    } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
    import {
        getAnalytics
    } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyApG0hGeymXUziJIbrWmw_b7KV_CB6bY48",
        authDomain: "coursgalilee.firebaseapp.com",
        projectId: "coursgalilee",
        storageBucket: "coursgalilee.appspot.com",
        messagingSenderId: "803812027997",
        appId: "1:803812027997:web:0e2191d417ec5c8aece7b4",
        measurementId: "G-9EX64XERV3"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    import {
        collection,
        query,
        where
    } from "firebase/firestore";
    const q = query(citiesRef, where("state", "==", "CA"));
