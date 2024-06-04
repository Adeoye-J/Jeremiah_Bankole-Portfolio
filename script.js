
//  || SHOW MENU
const navMenu = document.getElementById("nav_menu");
const navToggle = document.getElementById("nav_toggle");
const navClose = document.getElementById("nav_close");


// Menu Show
// Validate if constant exists
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show_menu");
    });
}

// Menu Hidden
// Validate if constant exists
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show_menu");
    });
    window.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    })
}



// REMOVE MENU after click on Nav Link

// const navLink = document.querySelectorAll(".nav_link");
// The variable access method above works with all the functions and routine below (forEach, for loop)

// The above should be the same as the one below here! Yes, they are. Try it out.

const navLink1 = document.getElementsByClassName("nav_link");
// This one above however doesn't work with the forEach function, it works with the others.

// Method-1

// navLink.forEach(n => n.addEventListener("click", () => {
//     const navMenu = document.getElementById("nav_menu");
//     navMenu.classList.remove("show_menu");
// }))


// Method-2

// for(i = 0; i < navLink1.length; i++) {
//     navLink1[i].addEventListener("click", () => {
//         const navMenu = document.getElementById("nav_menu");
//         navMenu.classList.remove("show_menu");
//     })
// }

// The addEventListener takes in two parameters, the "click" and function. The function could be separately stated as shown below!


// Method-3

const linkAction = () => {
    const navMenu = document.getElementById("nav_menu");
    navMenu.classList.remove("show_menu");
}

for(i = 0; i < navLink1.length; i++) {
    navLink1[i].addEventListener("click", linkAction);
}


// CHANGE BACKGROUND HEADER

const blurHeader = () => {
    const header = document.getElementById("header")
    // when the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add("blur_header") : header.classList.remove("blur_header");
    // The above works very fine without the "this". What is the essence of the "this" object or identifier. I know in a way it referes to the current class object in a function.....bla bla bla. What is it's work here? Will definitely paste this into chatgpt once i get my wifi from mr fabex. Todays date: January 29, 2024 @ DLHS AKR.
    // scrollY >= 50 ? header.classList.add("blur_header") : header.classList.remove("blur_header");
    if(this.scrollY >= 50) {
        header.classList.add("blur_header");
    } else {
        header.classList.remove("blur_header");
    }
}

window.addEventListener("scroll", blurHeader);

//  EMAIL JS

// const contactForm = document.getElementById("contact_form");
// const contactMessage = document.getElementById("contact_message");

// const sendEmail = (event) => {
//     event.preventDefault();
    
//     // serviceID - templateID - #form - publickey
//     emailjs.sendForm('service_f6zho88', 'template_imnahod', '#contact_form', "m_NKueL6HvYCdV9u5")
//         .then(() => {
//             // Show sent message 
//             contactMessage.textContent = "Message sent successfully ✅";
//         }, () => {
//             //Show error message
//             contactMessage.textContent = "Message not sent (service error) ❌";
//         })
// }

// contactForm.addEventListener("submit", sendEmail);

// || Show Scroll

const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll 
    this.srollY >= 350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp)


// || Scroll Sections Active Link

// const sections = document.querySelectorAll("section[id]")

// const scrollActive = () => {
//     const scrollY = window.pageYOffset

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight,
//             sectionTop = current.offsetTop - 58,
//             sectionId = current.getAttribute("id");
//             sectionsClass = document.querySelector(".nav_menu a[href*=' + *sectionId +  ']")
        

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             sectionsClass.classList.add("active-link")
//         } else {
//             sectionsClass.classList.remove("active-link")
//         }
//     })
// }

// window.addEventListener("scroll", scrollActive)
