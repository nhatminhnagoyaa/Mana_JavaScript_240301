// 着火点となる要素
const heading = document.getElementById('heading');

// オプション指定
const options = {
  threshold: 1 // 指定範囲は0 〜 1
};

// 要素が表示されたら実行する動作
function showElement(){
  heading.style.opacity = 1;
};

// 実行するよ
const observer = new IntersectionObserver(showElement, options);

// heading に到達したら発動
observer.observe(heading);
