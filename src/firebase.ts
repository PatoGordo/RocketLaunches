import Firebase from 'firebase/app'
import 'firebase/analytics'

var app: Firebase.app.App

if (!Firebase.apps.length) {
  // if ins't initialized, initialize it
  app = Firebase.initializeApp({
    apiKey: "AIzaSyCjJn_NsN0liES-xUz58k7BOxdhX5VEnaA",
    authDomain: "rocketlaunchesga.firebaseapp.com",
    projectId: "rocketlaunchesga",
    storageBucket: "rocketlaunchesga.appspot.com",
    messagingSenderId: "66332600027",
    appId: "1:66332600027:web:7691e75f0ea9cf52ed4efe",
    measurementId: "G-CHK8Q2K6MZ"
  })
}else {
  app = Firebase.app(); // if already initialized, use that one
}

export { app }