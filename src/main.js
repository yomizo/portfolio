import Vue from 'vue'
import AOS from 'aos'
import "aos/dist/aos.css"
import './plugins/vuetify'
import App from './App.vue'
import firebase from "firebase"
import 'vuetify/src/stylus/app.styl'



Vue.config.productionTip = false

// firebase setting
var config = {
  apiKey: "AIzaSyCgOBfaLyp0LJA1bAm2Jb-H1nrhad0nsdg",
  authDomain: "peme-fdcbe.firebaseapp.com",
  databaseURL: "https://peme-fdcbe.firebaseio.com",
  projectId: "peme-fdcbe",
  storageBucket: "peme-fdcbe.appspot.com",
  messagingSenderId: "1014379755549"
};
firebase.initializeApp(config);
export const functions = firebase.functions();

// new AOS
new Vue({
  created() {
    AOS.init()
  },
  render: h => h(App),
}).$mount('#app')



