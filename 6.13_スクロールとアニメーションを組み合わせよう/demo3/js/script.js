// 着火点となる要素
const headings = document.querySelectorAll('.heading');

// オプション指定
const options = {
  threshold: 1 // 指定範囲は0 〜 1
};

// 実行するよ
const observer = new IntersectionObserver(showElements);

// 各 .heading に到着したら発動。複数あるから
headings.forEach(heading => {
  // heading に到達したら発動
  observer.observe(heading);
});


// 要素が表示されたら実行する動作
function showElements(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) { // 一度でも交差
      entry.target.classList.add('active');
    }
  });
};
