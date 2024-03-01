const text = document.querySelector('#colorText');
const color = document.querySelector("#colorPicker");


//カラーピッカーを操作した時の一連の動作
const colorBg = () => {
    // 選択した色を背景に設定
    document.body.style.backgroundColor = color.value;
}

// カラーコードを検索
if (color.value === '#ffffff') {
    text.textContent = `カラーコード: ${color.value} (white)`;
} else if (color.vale === '#000000') {
    text.textContent = `カラーコード: ${color.value} (black)`;

} else {
    text.textContent = `カラーコード: ${color.value}`;
}

//カラーピッカーが変更さてたらcolorを発動させる
color.addEventListener('input', colorBg)