function getNumber(dice) {
    return Math.floor(Math.random() * dice + 1);
}

console.log(getNumber(6));