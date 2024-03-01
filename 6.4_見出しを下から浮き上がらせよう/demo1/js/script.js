const heading = document.querySelector('#heading');

const keyframes = {
  opacity: [0, 1],
  rotate: ['x 360deg', 0]
};

const options = {
  duration: 1000,
  easing: 'ease',
}

// Use a different easing function
heading.animate(keyframes, options);
