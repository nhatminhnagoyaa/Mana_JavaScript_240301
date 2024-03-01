const btn = document.querySelector('#btn')

btn.addEventListener('click', function () {
    document.body.classList.toggle("dark-theme");

    // もしボタンのテキストが「ダークモードにする」になっているなら
    if (btn.textContent === 'ダークモードにする') {

        // クリックされたとき「ライトモードにする」に変更
        btn.textContent = 'ライトモードにする';
    } else {
        //  そうではなく、「ダークモードにする」と表示されているなら
         btn.textContent = 'ダークモードにする';
    }

});