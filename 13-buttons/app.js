const buttons = document.querySelector('.buttons');
const pushCount = document.querySelector('.pushCount');

buttons.addEventListener('click', (e) => {
    const buttonsArray = [...buttons.children];
    for (let i = 0; i < buttonsArray.length; i++) {
        if (e.target === buttonsArray[i]) {
            buttonsArray[i].innerHTML = 'Нажата';
            pushCount.innerHTML++;
        } else {
            buttonsArray[i].innerHTML = 'Нажми меня';
        }
    }
});