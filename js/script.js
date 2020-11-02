var firebaseConfig = {
  apiKey: "AIzaSyDSIlQzhjPDSWecwlE4x8TgwQr2kfc7LCc",
  authDomain: "wedding-invitation-62ab8.firebaseapp.com",
  databaseURL: "https://wedding-invitation-62ab8.firebaseio.com",
  projectId: "wedding-invitation-62ab8",
  storageBucket: "wedding-invitation-62ab8.appspot.com",
  messagingSenderId: "1014859546602",
  appId: "1:1014859546602:web:c66b50a322813a5f2e3c93"
};
firebase.initializeApp(firebaseConfig);

const button = document.querySelector('#btn-submit')

button.addEventListener('click', e => {
  e.preventDefault
  database.database().ref("/" + Math.floor(Math.random() * 50)).set({
    name: newGuest()
  })
  console.log(newGuest())              
})

function newGuest() {
  return document.getElementById("name").value
}
