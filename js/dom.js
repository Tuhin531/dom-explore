const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = '2px solid green';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightgrey';
}
// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'lightblue';

const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text');