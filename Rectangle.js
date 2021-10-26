class Rectangle {
    constructor(length, width) {
        this._length = length;
        this._width = width;
    }
    get length() {
        return this._length;
    }
    set length(length) {
        return this._length = length;
    }
    get width() {
        return this._width;
    }
    set width(length) {
        return this._width = width;
    }
    getArea() {
        return this.length * this.width;
    }
    getPerimeter() {
        return 2*(this.length + this.width);
    }
    toString() {
        return `${this.getArea()}`;
    }
}