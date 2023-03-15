let storyopening = document.querySelector(".story-opening");
let draftpick1button = document.querySelector(".option-one");
console.log(draftpick1button);
let section1images = document.querySelector(".section1images");
console.log(section1images);
let section1buttons = document.querySelector(".section1buttons");
console.log(section1buttons);
let draftpick2button = document.querySelector(".option-two");
console.log(draftpick2button);


let JalenCarter = document.querySelector(".option-one-screen");
console.log(JalenCarter);

let QuentinJohnston = document.querySelector(".option-two-screen");
console.log(QuentinJohnston);
/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables*/
draftpick1button.onclick = function() {
    JalenCarter.style.display = "block";
    storyopening.style.display = "none";
    section1images.style.display = "none";
    section1buttons.style.display = "none";
};

draftpick2button.onclick = function() {
    QuentinJohnston.style.display = "block";
    storyopening.style.display = "none";
    section1images.style.display = "none";
    section1buttons.style.display = "none";
};
let JalenCarterimage = document.querySelector(".JalenCarterimage");
let optiononeend =document.querySelector(".optiononeend");
JalenCarterimage.onclick = function() {
JalenCarter.style.display="none";
optiononeend.style.display="block";
};

