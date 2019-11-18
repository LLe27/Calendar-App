import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { config } from '@config';


Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: config.apiKey,
  authDomain: "my-calendar-753e3.firebaseapp.com",
  databaseURL: "https://my-calendar-753e3.firebaseio.com",
  projectId: "my-calendar-753e3",
  storageBucket: "my-calendar-753e3.appspot.com",
  messagingSenderId: "737198544480",
  appId: "1:737198544480:web:e0f2915898710489155505",
  measurementId: "G-VJWPS24NXJ"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
