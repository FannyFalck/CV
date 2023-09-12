// --------------- Dark mode -------------

function ALLdarkmode(){
  var darkmodeelements = [ {
    element: "header",
    classname: "darkmode1"
  }, 
  {
    element: "footer",
    classname: "darkmode2"
  },
  {
    element: "nav",
    classname: "darkmode3"
  },
  {
    element: "aside",
    classname: "darkmode2"
  },
  {
    element: "html",
    classname: "darkmode2"
  },
  {
    element: "button",
    classname: "darkmode1"
  },
  {
    element: "body",
    classname: "darkmode1"
  },
  {
    element: "#darkmodetext",
    classname: "darkmodetextwhite"
  },
  ]

  darkmodeelements.forEach(element => {
    var toggle = document.querySelector(element.element); // hämta elemetet element, alltså element.body
  toggle.classList.toggle(element.classname);

  })

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
  navigate('arbete');
});



