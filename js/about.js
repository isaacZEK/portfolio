  // Toggle navbar
  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector("#main-nav");

  menuIcon.onclick = () => {
      console.log('Menu icon clicked'); // Debugging line
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("open");
  }

  // Close the navbar when clicking outside of it
  document.addEventListener("click", function(event){
      console.log('Document clicked'); // Debugging line
      if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) { 
          menuIcon.classList.remove("bx-x");
          navbar.classList.remove("open");
      }
  });

  // Close the navbar when scrolling
  window.onscroll = () => {
      console.log('Window scrolled'); // Debugging line
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("open"); 
  }