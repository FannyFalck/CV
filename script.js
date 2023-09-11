// --------------- Dark mode -------------
function darkmodebutton() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  var headerElement = document.querySelector("header");
  headerElement.classList.toggle("header-dark");

  var footerElement = document.querySelector("footer");
  footerElement.classList.toggle("footer-dark");


  var navElement = document.querySelector("nav");
  navElement.classList.toggle("navbar-dark");

  var aside = document.querySelector("aside");
  aside.classList.toggle("aside-dark");

  var htmlbody = document.querySelector("html");
  htmlbody.classList.toggle("htmlbody-dark");

  var toggle = document.querySelector("button");
  toggle.classList.toggle("togglebutton-dark");


}


// ----------------------- SWAPPING DARKMODE TEXT-------------------

function showDarkmodeText() {
  var x = document.getElementById("darkmodetext");
  if (x.innerHTML === "Darkmode") {
    x.innerHTML = "Lightmode";
  } else {
    x.innerHTML = "Darkmode";
  }
}




 
// --------------- Hamburger Menu ----------
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById("my-button");
  const nav = document.getElementById("mynav");

  button.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
});

// ---------------------------------  SPA ---------------------------- 

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  const contentSections = document.querySelectorAll('.page');

  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const target = link.getAttribute('data-target');
      navigate(target);
    });
  });

  function navigate(target) {
    contentSections.forEach(section => {
      section.style.display = 'none';
    });
    
    const selectedSection = document.getElementById(target);
    selectedSection.style.display = 'block';
  }

  // Load initial content
  navigate('cv');
});



