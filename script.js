const tooltips = document.getElementById('tooltips');
const cont = document.getElementById('map');
const path = document.querySelectorAll('#svg2 path');
const title = document.querySelector('#tooltips h3');
const capital = document.querySelector('#tooltips section p')
const list = document.querySelector('#tooltips ul');
const alldivs = document.querySelectorAll('div');



const obser = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slidein');
            observer.unobserve(entry.target);
        }
    });
});

alldivs.forEach((element) => {
    obser.observe(element)
});

path.forEach((state) => {
    state.addEventListener('mouseover', (e) => {
        const name = e.target.getAttribute('title');
        const key = e.target.getAttribute('id');
        const x = e.clientX - cont.getBoundingClientRect().left + 10;
        const y = e.clientY - cont.getBoundingClientRect().top + 10;
        
        n = statesCity[key].length;
        list.textContent = '';
        for (let i = 0; i < n; i++){
            list.innerHTML += '<li> - ' + statesCity[key][i] + '</li>';
        }
        capital.innerHTML = e.target.getAttribute('data-capital');
        tooltips.style.left = x > window.innerWidth - 255? window.innerWidth/4 + 'px' : x + 'px';
        tooltips.style.top = y > cont.getBoundingClientRect().height - 255? y - 250 + 'px'  : y + 'px';
        title.textContent = name;
        tooltips.style.display = 'block'
    });
    state.addEventListener('mouseout', () => {
        tooltips.style.display = 'none';
    });
});