var doc = window.document,
  context = doc.querySelector('.js-loop'),
  clones = context.querySelectorAll('.is-clone'),
  disableScroll = false,
  scrollWidth = 0,
  scrollPos = 0,
  clonesWidth = 0,
  i = 0;

function getScrollPos () {
  return (context.pageYOffset || context.scrollLeft) - (context.clientLeft || 0);
}

function setScrollPos (pos) {
  context.scrollLeft = pos;
}

function getClonesWidth () {
  clonesWidth = 0;

  for (i = 0; i < clones.length; i += 1) {
    clonesWidth = clonesWidth + clones[i].offsetWidth;
  }

  return clonesWidth;
}

function reCalc () {
  scrollPos = getScrollPos();
  scrollWidth = context.scrollWidth;
  clonesWidth = getClonesWidth();

  if (scrollPos <= 0) {
    setScrollPos(1); // Scroll 1 pixel to allow upwards scrolling
  }
}

function scrollUpdate () {
  if (!disableScroll) {
    scrollPos = getScrollPos();

    if (clonesWidth + scrollPos >= scrollWidth) {
      // Scroll to the Left when you’ve reached the bottom
      setScrollPos(1); // Scroll down 1 pixel to allow upwards scrolling
      disableScroll = true;
    } else if (scrollPos <= 0) {
      // Scroll to the bottom when you reach the Left
      setScrollPos(scrollWidth - clonesWidth);
      disableScroll = true;
    }
  }

  if (disableScroll) {
    // Disable scroll-jumping for a short time to avoid flickering
    window.setTimeout(function () {
      disableScroll = false;
    }, 40);
  }
}

function init () {
  reCalc();
  
  context.addEventListener('scroll', function () {
    window.requestAnimationFrame(scrollUpdate);
  }, false);

  window.addEventListener('resize', function () {
    window.requestAnimationFrame(reCalc);
  }, false);
}

if (document.readyState !== 'loading') {
  init()
} else {
  doc.addEventListener('DOMContentLoaded', init, false)
}








// Just for this demo: Center the middle block on page load
window.onload = function () {
  setScrollPos(Math.round(clones[0].getBoundingClientRect().left + getScrollPos() - (context.offsetWidth - clones[0].offsetWidth) / 2));
};

const scroller = document.querySelectorAll(".scroller")

function scrollContent(direction) {
  var scrollAmount = 2000; // Adjust this value to control scrolling speed
  var currentScroll = scroller.scrollLeft;
  var newScroll = direction === 1 ? currentScroll + scrollAmount : currentScroll - scrollAmount;
  setScrollPos(getScrollPos() +  newScroll );
}