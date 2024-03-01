// 監視対象が範囲内に現れたら実行する動作
const stickyContainers = document.querySelectorAll('.sticky-container');
const io_options = {
	root: document.body,
  rootMargin: '0px 0px -100% 0px',
  threshold: 0
};
const io_observer = new IntersectionObserver(io_callback, io_options);

stickyContainers.forEach(element => {
	io_observer.observe(element);
});

function io_callback (entries, observer) {
	entries.forEach(entry => {
  	entry.target.classList.toggle('active', entry.isIntersecting);
  });
}