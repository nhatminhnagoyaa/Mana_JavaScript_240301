// 監視対象が範囲内に現れたら実行する動作
const showKirin = (entries) => {
  const keyframes = {
    opacity: [0, 1],
    translate: ['200px 0', 0]

  };

  console.log('Kirin desu');
  console.log(entries[0].target); /* <img src="https://assets.codepen.io/85188/kirin.jpg" id="kirin" alt="キリン"> */
  entries[0].target.animate(keyframes, 1000);

}

// 監視ロボットの設定
const kirinObserver = new IntersectionObserver(showKirin);

// #kirinを監視するよう指示
kirinObserver.observe(document.querySelector('#kirin'));
