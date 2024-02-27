class Car {
    #mark;
    #model;
    #mileage;

    constructor(mark, model, mileage) {
        this.#mark = mark;
        this.#model = model;
        this.#mileage = mileage;
    }

    get mileage() {
        return this.#mileage;
    }

    set mileage(mileage) {
        return this.#mileage = mileage;
    }

    info() {
        return `${this.#mark} ${this.#model}, пробег - ${this.#mileage} км`;
    }
}

const car = new Car('Mercedes-Benz', 'E-Класс 200', 30000);
console.log(car.info());
console.log(car.mileage);
car.mileage = 40000;
console.log(car.mileage);