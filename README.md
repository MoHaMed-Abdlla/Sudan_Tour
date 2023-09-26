# Sudan Tour
### link to my website 
### Description:
Sudan Tour is a static website where you  can explore and learn information about the Republic of Sudan and its state.
I made this website to provide users with an informative and interactive experience to learn more about Sudan.
## Features:
- Interactive map for exploring  Sudan's states, when each state hovers a tooltip appears and shows the state's name, capital, and localities.
- Basic information about every state, including photos from around the state.
- Beautiful images displaying  the natural beauty of Sudan.
- Easy navigation and user-friendly interface.

## Project Structure:
1. ### 'index.html'
    This file is to redirect the user to the Arabic version if the browser language is Arabic or to the English version if not Arabic.
1. ### './ar' & './en'
    Both ar and en have the same content but different  languages.
    - 'index.html' \
         This is the main file and contains information about Sudan
         - navbar: I made the navbar fixed top to help users navigate to any part of the website at any time, the navbar has links to main headers, link to Arabic or English version, and link to states page. links to sections are highlighted  when the section is in the viewport.
         - header: Introduction to the website (I designed the header background image)
         - '#map' & svg Sudan map: A svg Sudan map that shows the states of Sudan and when each state is hovering a tooltip appears and shows the state name and capital and its localities.
         - sections: Each section has information about a specific topic, images, and maybe cards. each section topic and image are placed next to each other, side by side to make the website better design.
         - figures & cards & images: Pictures that I took or downloaded from [Wikimedia](commons.m.wikimedia.org).
         - 'footer': The footer of the website shows links to recourses, links to contact, and a quote.

    - 'states.html' \
        This site shows information about the capital of Sudan and the States of Sudan.
        - '.navbar': Has links to different parts of the site.
        - 'header': Introduction to the website.
        - 'main sections': The main content of the site  starts with information about the capital.
        - 'carousel': The first one for the capital shows images for it, and the second one is for the states.
        - 'select': Instead of tabs I used select because it much better design for my website, with select you can navigate to different  parts of Sudan and each part has information about the states of that part.
        - 'main .tab-content': Shows information about different  parts of the country, you can change the shown part by changing the above select, for each option there are: one or more states and their information, logo/s for the state/s, a carousel that shows images of that part.
        - 'footer': Footer of the website shows links to recourses, links to contact, and a quote.
1. './images' \
    all images and logos are in this folder. all img tags have loading set to lazy to make the website lighter.
1. 'style.css' \
    specify the colors paddings and sizing of the website.
    - Imported font from [google fonts](https://fonts.google.com).
    - Add slide in effect by moving all 'div' to the left and when they enter the viewport they slide in to make the website more interactive.
    - I chose colors with the help of  [pallettemaker](https://pallettemaker.com/app).
1. 'transAR.js & transEN.js' /
    contain a dictionary  of arrays each array has a key of state key and the value is all localities of that state.
1. 'script.js'
    - The First seven lines are to select all elements that I want to make interactive.
    - 'const obser': is to track all 'div' so that when they enter the viewport make them slide in.
    - 'path.forEach()': this function is for svg map path, when each path is hovered  tooltip is inside of screen limits. and when the mouse is out of the svg tooltip is hidden.

## Technologies Used
- HTML
- CSS
- JavaScript
- JQuery
- Bootstrap

## Usage:
- Upon opening the website you will find an interactive map of Sudan.
- Hover on any state of the map to view its districts.
- Navigate through different sections of the website using the navbar.

## Contact
For questions or feedback about Sudan Tour, please [contact me](mailto:mohmedabdllamoon14@gmail.com)
