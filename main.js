// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let lisHeart = document.getElementsByClassName('like-glyph');
let errorDiv = document.getElementById('modal');
let modalMessage = document.getElementById('modal-message');

for(let li of lisHeart) {
   li.addEventListener('click',handleClick);
}


function handleClick(e){
  // e.target.style.color = "red";
  
  mimicServerCall()
  .then(function(){
    
    if(lisHeart.innerHTML == '&#x2661;'){
     lisHeart.innerHTML= `${FULL_HEART}`;
     lisHeart.classList.add('activated-heart');
    }else{
     lisHeart.innerHTML= `${EMPTY_HEART}`;
     lisHeart.classList.remove('activated-heart');
    }
    
    console.log("happen");
  })
  .catch(function(e){
    console.log(e)
    //errorDiv.classList.remove('hidden');
    //modalMessage.innerText = "Random server error. Try again.";
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
