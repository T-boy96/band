const menubuttons = document.querySelectorAll('.menu button');
const sections = document.querySelectorAll('.content section');
const dates = document.querySelectorAll('#dates a');
const contactLinks = document.querySelectorAll('#contact a');

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