var firebaseConfig = {
    apiKey: "AIzaSyBA2cat5asR6vKX0RWZvLX6-XiRo-aAOCs",
    authDomain: "signuppage-4d644.firebaseapp.com",
    projectId: "signuppage-4d644",
    storageBucket: "signuppage-4d644.appspot.com",
    messagingSenderId: "643344065370",
    appId: "1:643344065370:web:a2b85e8af27cc21ebe8963",
    measurementId: "G-T027YTDNB9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

 
// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com" ,"courses.html" );
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}