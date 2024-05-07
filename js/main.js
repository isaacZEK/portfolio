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
setInterval(changeText, 5000); // Changed interval timing for testing


window.addEventListener("scroll",activemenu);

const header  = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",window.scrollY > 50)
})

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector("navbar");

menuIcon.onclick = () =>{
    menuIcon.checkVisibilitylassList.toggle("bx-x");
    navbar.classList.toggle("open");
    
}


//mi it up portfolio section
var mixer = mixitup('.portfolio-gallery');