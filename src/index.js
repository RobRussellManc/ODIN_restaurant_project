import home_page from "./home.js";
import menu_page from "./menus.js";
import about_page from "./about.js";

import "./styles.css";

const menu_buttons = (function() {
    const content_box = document.querySelector('#content');

    // Load page
    const load_page = (page_js) => {
        content_box.innerHTML = '';
        page_js(content_box)
    };

    // Create buttons + listeners
    const make_buttons = () => {
        const menu_buttons = ['Home', 'Menus', 'About'];
        const menu_scripts = [home_page, menu_page, about_page]
        const nav_bar = document.querySelector('nav');
        for (let i = 0; i < menu_buttons.length; i++ ) {
            let nav_item = document.createElement('button');
            nav_item.id = menu_buttons[i];
            nav_item.textContent = menu_buttons[i];
            nav_item.addEventListener("click", () => load_page(menu_scripts[i]))
            nav_bar.appendChild(nav_item);
        }
    }

    return {load_page, make_buttons}
})();

menu_buttons.make_buttons();
menu_buttons.load_page(home_page);

/*

const load_page = (page_js) => {
    //alert('click');
    const content_box = document.querySelector('#content');
    content_box.innerHTML = '';
    page_js(content_box)
};

load_page(home_page);
console.log('yo, dawg');




// listeners
const home_listener = document.querySelector('#home');
home_listener.addEventListener("click", () => load_page(home_page) );

const menus_listener = document.querySelector('#menus');
menus_listener.addEventListener("click", () => load_page(menu_page) );


*/

// Function to empty content and load new content



