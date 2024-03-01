// 着火点となる要素
const p = document.getElementById("paragraph");
 
const options = {
  rootMargin:"10px 20px 30px 40px", // マージンを設定
  threshold: buildThresholdList()
};
 


// threshold の設定
function buildThresholdList() {
  let thresholds = [0, 0.5, 1];
  let numSteps = 20;
 
  for (let i = 1; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }

  return thresholds;
}

// 実行するよ
const observer = new IntersectionObserver(showElements, options);

// p に到達したら発動
observer.observe(p);

// 要素が表示されたら実行する動作
function showElements(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
    
      let ratio = Math.round(entry.intersectionRatio * 100);

      const heading = document.getElementById('heading');
      heading.style.backgroundImage = `
      linear-gradient(
        45deg,
        rgb(37, 47, 255) ${0 - ratio}%,
        rgb(124, 192, 226) ${100 - ratio}%,
        rgb(37, 47, 255) ${200 - ratio}%
      `
      const heading3 = document.getElementById('heading2');
      heading3.style.backgroundImage = `
      linear-gradient(
        45deg,
        rgb(255, 37, 41) ${0 - ratio}%,
        rgb(124, 192, 226) ${100 - ratio}%,
        rgb(37, 47, 255) ${200 - ratio}%
      `
    }
      const heading2 = document.getElementById('heading3');
      heading2.style.backgroundImage = `
      linear-gradient(
        45deg,
        rgb(37, 255, 222) ${0 - ratio}%,
        rgb(124, 192, 226) ${100 - ratio}%,
        rgb(37, 47, 255) ${200 - ratio}%
      `

    
  });
}
