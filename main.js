// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const li = document.getElementsByClassName("like-glyph");
for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function(){
    mimicServerCall()
    .then(response => {
      return (response);
    })
    .catch((error) => {
      let vari = document.getElementById("modal");
      vari.classList.remove("hidden");
      setTimeout(() => {
        document.getElementById("modal").classList.add("hidden")
      }, 3000)
    })
    let heart = li[i].innerHTML;
    if (heart === EMPTY_HEART) {
      li[i].innerHTML = FULL_HEART;
      li[i].classList.add("activated-heart");
    }
    if (heart === FULL_HEART) {
      li[i].innerHTML = EMPTY_HEART;
      li[i].classList.remove("activated-heart");
    }
  })
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
