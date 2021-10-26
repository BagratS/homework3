class Account {
    constructor(id, name, balance) {
        this._id = id;
        this._name = name;
        this._balance = balance;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this_name;
    }
    set name(name) {
        return this._name = name;
    }
    get balance() {
        return this._balance;
    }
    set balance(balance) {
        return this._balance = balance;
    }
    credit(amount) {
        this.balance += amount;
        return this.balance;
    }
    debit(amount) {
        if(this.balance >= amount) {
            this.balance -= amount;
            return this.balance;
        }
        return 'Exceeded';
    }
    transferTo(anotherAc, amount) {
        if(this.balance >= amount) {
            this.balance -= amount;
            anotherAc.balance += amount;
            return this.balance;
        }
        return 'Exceeded';
    }
    static identifyAccounts(accountFirst, accountSecond) {
        if(JSON.stringify(accountFirst) === JSON.stringify(accountSecond)) {
            return true;
        }
        return false;
    }
    toString() {
        return `${this.id}
        ${this.name}` 
    }
}