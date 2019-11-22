var popup = document.querySelector('.welcome');

popup.addEventListener('click', hideHeader);

function hideHeader(event) {
  console.log(event);
  if (event.target.classList.contains("close")){
    event.target.parentNode.remove();
  }
}
