const getPosition = () => {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

getPosition().then((position) => console.log(position)).catch((error) => console.error(error.message));