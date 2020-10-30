document.querySelectorAll('[scroll-to]').forEach((item) => {
  item.addEventListener('click', () => {
    if (item.attributes['scroll-to'].value == 'top') {
      window.scrollTo({ top: 0 });
    } else {
      const elementToScrollTo = document.querySelector(
        item.attributes['scroll-to'].value
      );
      if (elementToScrollTo != null) {
        elementToScrollTo.scrollIntoView();
      }
    }
  });
});

const emailLink = document.querySelector('#email-link');
emailLink.onmouseover = emailLink.ontouchstart = () =>
  emailLink.setAttribute(
    'href',
    `mailto:${atob('bG91aXNAbG91aXNodWRkbGVzdG9uLmNvbQ==')}`
  );

const logo = document.querySelector('.lh-logo');
let scrolling;
logo.addEventListener('click', () => {
  if (!scrolling) {
    scrolling = true;
    logo.classList.add('twist-up');
    setTimeout(() => {
      logo.classList.remove('twist-up');
      scrolling = false;
    }, 500);
  }
});
