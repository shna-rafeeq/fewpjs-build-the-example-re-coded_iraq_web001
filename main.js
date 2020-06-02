// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let lis = document.getElementsByClassName('like');
for(let li of lis) {
   li.addEventListener('click',handleClick);
}

let errorDiv = document.getElementById('modal');
let modalMessage = document.getElementById('modal-message');



  

function handleClick(e){

  mimicServerCall()
  // .then(){}
  .catch(function(error){
  errorDiv.classList.remove('hidden');
  modalMessage.innerText = "Random server error. Try again.";
  })
  setTimeout(hideError,5000);
}
function hideError(){
  errorDiv.classList.add('hidden');
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
