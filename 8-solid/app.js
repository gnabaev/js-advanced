class Billing {
    amount;

    constructor(amount) {
        this.amount = amount;
    }

    calculateTotal() { }
}

class FixedBilling extends Billing {
    constructor(amount) {
        super(amount);
    }

    calculateTotal() {
        return this.amount;
    }
}

class HourBilling extends Billing {
    hours;

    constructor(amount, hours) {
        super(amount);
        this.hours = hours;
    }

    calculateTotal() {
        return this.amount * this.hours;
    }
}

class ItemBilling extends Billing {
    count;

    constructor(amount, count) {
        super(amount);
        this.count = count;
    }

    calculateTotal() {
        return this.amount * this.count;
    }
}

const fixedBilling = new FixedBilling(50);
console.log(fixedBilling.calculateTotal());

const hourBilling = new HourBilling(50, 2);
console.log(hourBilling.calculateTotal());

const itemBilling = new ItemBilling(50, 3);
console.log(itemBilling.calculateTotal());