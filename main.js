


function Login() {
    window.alert("This is just a Landing Page.")
}

function Contact() {
    window.alert("This is just a Landing Page.")
}

function Home() {
     window.alert("Welcome to A-MORE Landing Page.")
}
function buyNow() {
     window.alert("Buying Section Is Not Yet Avaliable.")
}








// window.onload = function() {
//     window.alert("Welcome to A-MORE Landing Page.")
// }

// window.onload = function() {
//     if( document.getElementById('number1').checked ) {
//         var h1 = document.createElement("h1");
//         h1.appendChild(document.createTextNode("Hello member"));
//         document.getElementById("container").appendChild(h1);
//     }
// }




let sections = document.querySelectorAll('div');



window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }

        else{
            sec.classList.remove('show-animate');
        }
    })
}








// SLIDER SECTION


let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slider = document.querySelector('.slider');



next.addEventListener('click', function(){
    let slides = document.querySelectorAll('.slides');
    slider.appendChild(slides[0]);
})

prev.addEventListener('click', function(){
    let slides = document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length - 1]);
})