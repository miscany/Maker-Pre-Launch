window.onload = () =>{
  // Variables
  const navbarButton = document.querySelector('.navbar-right-mobile');
  const menuButton = document.querySelector('.menu-right');
  const menu = document.querySelector('.menu');
 
  // Functions
  function toggleMenu(){
    menu.style.display == 'none' 
    ? menu.style.display = 'block' 
    : menu.style.display = 'none';
  }

  // Event Listeners

  navbarButton.addEventListener('click', toggleMenu);
  menuButton.addEventListener('click',toggleMenu);
}