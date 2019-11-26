var popup = document.querySelector('.welcome');

popup.addEventListener('click', hideHeader);

function hideHeader(event) {
  console.log(event);
  if (event.target.classList.contains("close")){
    // event.target.parentNode.remove();
    popup.classList.add('hide');
  }
}

var accountScreen = document.querySelector ('#welcomeMain');

var navButtonWallet = document.querySelector('#wallet');
navButtonWallet.addEventListener('click', selectWallet);

var main = document.querySelector('main');
var showTransactions = document.querySelector('#transactionsMain');

function selectWallet(event){
  console.log(event);
  if (event.target.classList.contains("active")){
    console.log("active");
  } else{
    navButtonWallet.classList.add('active');
    navButtonClipboard.classList.remove('active');
    navButtonProfile.classList.remove('active');
    accountScreen.classList.add('hide');
    // main.innerHTML +="I AM A DINOSAUR";
    showTransactions.classList.remove('hide');
  }

}

var navButtonClipboard = document.querySelector('#clipboard');
navButtonClipboard.addEventListener('click', selectClipboard);

function selectClipboard(event){
  console.log(event);
  if (event.target.classList.contains("active")){
    console.log("active");
  } else{
    navButtonClipboard.classList.add('active');
    navButtonWallet.classList.remove('active');
    navButtonProfile.classList.remove('active');
    accountScreen.classList.remove('hide');
    popup.classList.remove('hide');
    showTransactions.classList.add('hide');
  }

}

var navButtonProfile = document.querySelector('#profile');
navButtonProfile.addEventListener('click', selectProfile);

function selectProfile(event){
  console.log(event);
  if (event.target.classList.contains('active')){
    console.log('active');
  } else{
    navButtonProfile.classList.add('active');
    navButtonClipboard.classList.remove('active');
    navButtonWallet.classList.remove('active');

  }
}
