var popup = document.querySelector('.welcome');

popup.addEventListener('click', hideHeader);

function hideHeader(event) {
  console.log(event);
  if (event.target.classList.contains("close")){
    event.target.parentNode.remove();
  }
}

var navButton = document.querySelector('#wallet');
navButton.addEventListener('click', selectWallet);

function selectWallet(event){
  console.log(event);
  if (event.target.classList.contains("active")){
    console.log(nada);
  } else{
    console.log(nope);
  }

}
