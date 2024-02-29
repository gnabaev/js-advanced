function ageIsMore14(dateString) {
    const date = new Date(dateString);
    const dif = Date.now() - date.getTime();
    const difDate = new Date(dif);
    const difYear = difDate.getUTCFullYear();
    var age = Math.abs(difYear - 1970);

    if (age >= 14) {
        return true;
    }
    return false;
}

console.log(ageIsMore14('2010-02-26'));