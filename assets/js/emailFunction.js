window.process = {
    env: {
        NODE_ENV: 'development'
    }
}    
console.log(process.env);
const firebaseConfig = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: "emailwithfirebase-a2cac.firebaseapp.com",
    projectId: "emailwithfirebase-a2cac",
    storageBucket: "emailwithfirebase-a2cac.appspot.com",
    messagingSenderId: "646819307545",
    appId: "1:646819307545:web:2374ffcfe044addc0eca88",
    measurementId: "G-9FL5J7C2Y5"
    };
    firebase.initializeApp(firebaseConfig);
    const functions = firebase.functions();
    let form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const body = document.querySelector("#body");
        const subject = document.querySelector("#subject");
        const firebaseEmail = functions.httpsCallable("EmailWithFirebase");
        firebaseEmail({
            name,
            email, 
            body,
            subject
        }).then((result) => {
            console.log(result);
        })
    })