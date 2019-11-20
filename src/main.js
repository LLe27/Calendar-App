import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { firebaseConfig } from '../firebase.config';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: firebaseConfig.apiKey,
  authDomain: "calendar-app-255e6.firebaseapp.com",
  databaseURL: "https://calendar-app-255e6.firebaseio.com",
  projectId: "calendar-app-255e6",
  storageBucket: "calendar-app-255e6.appspot.com",
  messagingSenderId: "618985679217",
  appId: "1:618985679217:web:3adb2d5138aa5119e9aed0",
  measurementId: "G-HKX2H7D3KE"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')