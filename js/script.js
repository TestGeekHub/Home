// Counter animation script
const counters = document.querySelectorAll('.counter');
const speed = 200; // Adjust the speed of the counting animation

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.parentElement.getAttribute('data-target');
    const count = +counter.innerText;

    const increment = target / speed;

    if(count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20); // Adjust the delay here
    } else {
      counter.innerText = target;
    }
  };

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const handleScroll = () => {
    if (isElementInViewport(counter)) {
      updateCount();
      window.removeEventListener('scroll', handleScroll); // Remove scroll event after counting
    }
  };

  window.addEventListener('scroll', handleScroll);
});
