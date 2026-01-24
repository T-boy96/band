const mediaQueryTablet = window.matchMedia('(min-width: 768px) and (max-width: 1023px)');
const mediaQueryDesktop = window.matchMedia('(min-width: 1024px)');

const hamburger = document.querySelector('.hamburger');
const menuButtons = document.querySelectorAll('.menu button');
const triggerTds = document.querySelectorAll('.trigger-td')
const contentSections = document.querySelectorAll('.content section');
const dates = document.querySelectorAll('#dates a');
const contactLinks = document.querySelectorAll('#contact a');
const emailAddr = "ninaktiv [at] GMX [dot] com";

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
});

menuButtons.forEach(mb => {
    mb.addEventListener('click', () => {
        const targetId = mb.dataset.target;
        contentSections.forEach(section => {
            section.hidden = section.id !== targetId;
        });
        menuButtons.forEach(b => {
            (b.dataset.target === targetId) ? b.classList.add('active') : b.classList.remove('active');
        });
    });
});

triggerTds.forEach(td => {
    const cell = td.nextElementSibling;
    if (mediaQueryDesktop.matches) {
        td.addEventListener('mouseenter', function () {
            td.setAttribute('hidden', '');
            cell.classList.add('is-visible');
        }, { once: true });
    } else {
        td.setAttribute('hidden', '');
    }
});

function clickHandler(e) {
    window.goatcounter.count({
        path: 'Clicked on ' + this.href,
        title: this.parentElement.parentElement.id + '/' + this.innerHTML,
        event: true,
    });
}

[...dates, ...contactLinks].forEach(link => {
    link.addEventListener('click', clickHandler);
});

function showEmail() {
    const showEmailButton = document.getElementById("showEmail");
    const showEmail = document.getElementById("e");
    showEmail.textContent = emailAddr;
    showEmailButton.style.display = "none";
}