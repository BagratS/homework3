class Author {
    constructor(name, email, gender) {
        this._name = name;
        this._email = email;
        this._gender = gender;
    }
    get name () {
        return this._name;
    }

    set name(name) {
        return this._name = name;
    }

    get email () {
        return this._email;
    }
    set email(newEmail) {
        return this._email = newEmail;
    }
    get gender() {
        return this._gender;
    }
    toString() {
        return this.name;
    }
}

class Book extends Author {
    constructor(title, price, quantity, name, email, gender) {
        super(name, email, gender);
        this._title = title;
        this._price = price;
        this._quantity = quantity;
    }
    get title() {
        return this._title;
    }   
    get price() {
        return this._price;
    }
    set price(price) {
        return this._price = price;
    }
    get quantity() {
        return this._quantity;
    }
    set quantity(quant) {
        return this._quantity = quant;
    }
    getProfit() {
        return this.price*this.quantity;
    }
    toString() {
        return this.title;
    }
}