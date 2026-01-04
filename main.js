const menubuttons = document.querySelectorAll('.menu button');
const sections = document.querySelectorAll('.content section');

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