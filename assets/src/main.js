import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config = {
    apiKey: "AIzaSyCwllltXU9CZc2QD8hH5x2mQPJddINKi8w",
    authDomain: "ine-project-4aee3.firebaseapp.com",
    projectId: "ine-project-4aee3",
    storageBucket: "ine-project-4aee3.appspot.com",
    messagingSenderId: "310537717552",
    appId: "1:310537717552:web:6ce94c8f9139488550eaf5",
    measurementId: "G-62MQ1BPQ83"
};
firebase.initializeApp(config);

const app = createApp(App)

app.use(router)
app.mount('#app')
