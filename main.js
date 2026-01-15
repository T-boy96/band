const menubuttons = document.querySelectorAll('.menu button');
const sections = document.querySelectorAll('.content section');
const dates = document.querySelectorAll('#dates a');
const contactLinks = document.querySelectorAll('#contact a');

const menuButtonMobile = document.querySelector('.menu-button');

menuButtonMobile.addEventListener('click', () => {
    menuButtonMobile.classList.toggle('active');
    const expanded = menuButtonMobile.getAttribute('aria-expanded') === 'true';
    menuButtonMobile.setAttribute('aria-expanded', String(!expanded));
});


menubuttons.forEach(mb => {
    mb.addEventListener('click', () => {
        const targetId = mb.dataset.target;
        sections.forEach(section => {
            section.hidden = section.id !== targetId;
        });
        menubuttons.forEach(b => {
            (b.dataset.target === targetId) ? b.classList.add('active') : b.classList.remove('active');
        });
    });
});

const mediaQuery = window.matchMedia('(min-width: 1024px)');

const triggertds = document.querySelectorAll('.trigger-td')
triggertds.forEach(td => {
    if (mediaQuery.matches) {
        td.addEventListener('mouseenter', function () {
            const cell = this.nextElementSibling;
            const secondCell = cell.nextElementSibling;
            cell.setAttribute('hidden', '');
            secondCell.classList.add('is-visible');
        }, { once: true });

    } else {
        const cell = td.nextElementSibling;
        cell.setAttribute('hidden', '');
    }
});

function clickHandler(e) {
    window.goatcounter.count({
        path: 'Clicked on ' + this.href,
        title: this.parentElement.parentElement.id + '/' + this.innerHTML,
        event: true,
    });
}

dates.forEach(d => {
    d.addEventListener('click', clickHandler);
});

contactLinks.forEach(cl => {
    cl.addEventListener('click', clickHandler);
})