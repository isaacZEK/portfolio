//change developer messages

let words = document.querySelectorAll(".word");

words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });

    setTimeout(() => {
        nextWord.style.opacity = "1";
        Array.from(nextWord.children).forEach((letter, i) => {
            letter.className = "letter behind";
            setTimeout(() => {
                letter.className = "letter in";
            }, 340 + i * 80);
        });
    }, 400); // Adjusted timing to ensure proper synchronization

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 6000); // Changed interval timing for testing


const header  = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",window.scrollY > 50)
});



//mix it up portfolio section
var mixer = mixitup('.portfolio-gallery');

//active menu
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelector("section");

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
    }
}

let active = activeMenu();
window.addEventListener("scroll", active);


// Toggle navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector("#main-nav");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("open");
}

// Close the navbar when clicking outside of it
document.addEventListener("click", function(event){
    if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) { 
        // Fix typo: event instead of events
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("open");
    }
});


//close the navbar when scrolling
window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("open"); 
}

//parallax

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));
