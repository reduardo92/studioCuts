const log = console.log;

// Toogle burger
const burger = document
  .querySelector('.burger-toggle')
  .addEventListener('click', e => {
    const body = document.body;
    log(e.target);
    if (body.className === '') {
      body.classList = '';
      body.classList.add('toggle');
    } else {
      body.classList = '';
    }
  });

// Get Nav links
const navLinks = document.querySelectorAll('.nav--links__item');

// Intersection Observer

///// All sections
const sections = document.querySelectorAll('.sections');

///// Sections Options
const sectionsOptions = {
  threshold: 0.25,
  rootMargin: '-15%'
};

///// Observer Function
const sectionsObserver = new IntersectionObserver(
  (entries, sectionsObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      // check if observer matches nav--link dataset
      navLinks.forEach(link => {
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

log(navLinks);
