const button = document.querySelector('#btn-submit')

button.addEventListener('click', e => {
  e.preventDefault
  database.database().ref("/" + Math.floor(Math.random() * 50)).set({
    name: newGuest()              
  });
})

function newGuest() {
  return document.getElementById("name").value
}
