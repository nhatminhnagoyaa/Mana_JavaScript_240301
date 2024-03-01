const heading = document.querySelector('#heading');

const keyframes = {
  color: ['transparent', '#fff'],  //文字色を透明から白に
  backgroundPosition: ['100% 0', '0 0']　//背景に位置を動かして四角形が伸びたようにする

};

const options = {
  duration: 2000,
 
  easing: 'ease',
}

// animate with default easing and duration
// heading.animate(keyframes, 2000); 

// Use a different easing function
heading.animate(keyframes, options);
