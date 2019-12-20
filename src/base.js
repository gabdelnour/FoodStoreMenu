import Rebase from 're-base'
import firebase from '@firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBeuFt75MGMT91Dk7uMFhodu_zYFITMDSk",
  authDomain: "catch-of-the-day-gustavo.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-gustavo.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// Named Export
export { firebaseApp }

// this is a default export
export default base