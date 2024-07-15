import { createHome } from "./home";
import { createMenu } from "./menu";
import { createAbout } from "./about";
import { createContact } from "./contact";

const content = document.getElementById('content');

// clear all content of the div with id "content"
function clearContent() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}


function navigateTo(tab) {
    clearContent();
    let tabContent;
    switch (tab) {
        case 'home':
            tabContent = createHome();
            break;

        case 'menu':
            tabContent = createMenu();
            break;

        case 'about':
            tabContent = createAbout();
            break;

        case 'contact':
            tabContent = createContact();
            break;  

        default:
            tabContent = createHome();  

    }
    content.appendChild(tabContent);
}

// default to home tab on initial load
window.navigateTo = navigateTo;
navigateTo('home');
document.addEventListener('DOMContentLoaded', () => {
    // Default to home tab on initial load
    navigateTo('home');
});



