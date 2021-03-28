// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((memo, side) => memo + side, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (!!(this.countSides === 3)) {
            const a = this.sides[0];
            const b = this.sides[1];
            const c = this.sides[2];
            if (a + b > c && a + c > b && b + c > a) {
                return true;
            }
        }
        return false;
    }
}

class Square extends Polygon {
    get isValid() {
        if(!!(this.countSides === 4)) {
            return this.sides.every(side => side === this.sides[0]);
        }
        return false;
    }

    get area() {
        return this.sides[0] ** 2;
    }
}