
const isAgreed = document.querySelector('#check');

const btn = document.querySelector('#btn');


isAgreed.addEventListener('change', () => {
  console.log('Checking');

  // if (isAgreed.checked){
  //   btn.disabled = false
  // }else{
  //   btn.disabled = true
  // }
// 「isAgreed.checked」が true なら、「false」代入されている
  btn.disabled = !isAgreed.checked;

})