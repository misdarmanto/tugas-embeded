export const appConfig = {
  localStorage: {
    appKey: 'appKey'
  },
  baseUrl: 'http://172.20.10.3:8008/api/v1' //'https://jasaapk.us/fresh/api/v1'
}

import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBr5A5kQ1Dak_VeVbEcJYeoCi_g8XUVmWU',
  authDomain: 'toren-itera.firebaseapp.com',
  projectId: 'toren-itera',
  storageBucket: 'toren-itera.appspot.com',
  messagingSenderId: '971511034983',
  appId: '1:971511034983:web:4f67c76d98b8baa9fb50c2'
}
const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

export const firebaseConfigs = {
  storage
}
