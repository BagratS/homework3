class Employee {
    constructor(id, firstName, lastName, position, salary, workingHours) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._position = position;
        this._salary = salary;
        this._workingHours = workingHours;
    }
    get id() {
        return this._id;
    }
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get position() {
        return this._position;
    }
    set position(position) {
        return this._position = position;
    }
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        return this._salary = salary;
    }
    get workingHours() {
        return this._workingHours;
    }
    set workingHours(hours) {
        return this._workingHours = hours;
    } 
    getFullName() {
        return this._firstName + ' ' + this._lastName;
    }
    getAnnualSalary() {
        return 12 * this._salary;  
    }
    raiseSalary(amountInPerent) {
        this.salary += this.salary*amountInPerent/100;
        return this.salary;
    }
}
const B = new Employee;
B.salary = 100;
const a = B.raiseSalary(25);
console.log(a);