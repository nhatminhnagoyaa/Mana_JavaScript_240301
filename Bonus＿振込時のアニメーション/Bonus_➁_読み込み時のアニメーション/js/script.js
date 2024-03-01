const loadingAreaLeft = document.querySelector('#loading-left');
const loadingAreaRight = document.querySelector('#loading-right');

const keyFrames = {
  transform: ['scaleX(1)', 'scaleX(0)'],
}

const options = {
  duration: 2000,
  easing: 'ease',
  fill: 'forwards'
};


window.addEventListener('load', () => {
  // ローディング中（左側）
  loadingAreaLeft.animate(keyFrames, options);

  // ローディング中（右側）
  loadingAreaRight.animate(keyFrames, options);
});