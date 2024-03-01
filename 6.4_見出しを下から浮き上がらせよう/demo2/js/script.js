const heading = document.querySelector('#heading');

const keyframes = {
  color: ['#f66', '#fc2', '#0c6', '#0bd']
};

const options = {
  duration:4000,
  direction: 'alternate',　　//終了地点にきたら開始地点に戻す指定
  iterations: Infinity,  //ずっと繰り返す指定
}

// animate with default easing and duration
// heading.animate(keyframes, 2000); 

// Use a different easing function
heading.animate(keyframes, options);
