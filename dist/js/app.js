const log = console.log;

// Toogle burger
const burger = document
  .querySelector('.burger-toggle')
  .addEventListener('click', e => {
    const body = document.body;
    if (body.className === '') {
      body.classList.remove('toggle');
      body.classList.add('toggle');
    } else {
      body.classList.remove('toggle');
    }
  });

// Get Nav links
const nav = document.querySelector('.nav').addEventListener('click', e => {
  const navLinks = document.querySelectorAll('.nav--links__item');
  if (e.target.classList.contains('nav')) return;
  navLinks.forEach(link => link.classList.remove('activeNav'));
  e.target.classList.add('activeNav');
});

// Intersection Observer

///// All sections
const sections = document.querySelectorAll('.sections');

///// Sections Options
const sectionsOptions = {
  rootMargin: '-5%'
};

///// Observer Function
const sectionsObserver = new IntersectionObserver(
  (entries, sectionsObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      if (window.screen.availWidth <= 768) return;

      // check if observer matches nav--link dataset
      document.querySelectorAll('.nav--links__item').forEach(link => {
        if (link.dataset.active === entry.target.id) {
          link.classList.remove('activeNav');
          link.classList.add('activeNav');
        } else {
          link.classList.remove('activeNav');
        }
      });
    });
  },
  sectionsOptions
);

// Observe section
sections.forEach(sec => sectionsObserver.observe(sec));

// Modal Toggle
const modalToggle = document.addEventListener('click', e => {
  const body = document.body.classList;

  if (e.target.classList.contains('qoute')) {
    body.add('toogleModal');
  } else if (
    e.target.classList.contains('form--x') ||
    e.target.classList.contains('form--modal')
  ) {
    body.remove('toogleModal');
  }
});

// Form Button sumbmit
const formBtn = document
  .querySelector('.form--btn')
  .addEventListener('click', e => e.preventDefault());
