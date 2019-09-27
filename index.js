class Polygon {
    constructor(arrayOfSides) {
        this.arrayOfSides = arrayOfSides;
        // this.count = this.arrayOfSides.length
    }

    get countSides() {
        return this.arrayOfSides.length
    }

    get perimeter() {
        return this.arrayOfSides.reduce(function(a, b){
            return a + b
        }, 0)
    }
}

class Triangle extends Polygon {
    
    get isValid() {
        if(this.countSides !== 3) {
            return false
        }
        const side1 = this.arrayOfSides[0]
        const side2 = this.arrayOfSides[1]
        const side3 = this.arrayOfSides[2]

        if((side1 + side2 > side3) && (side2 + side3 > side1) && (side1 + side3 > side2)) {
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    
    get isValid() {
        const side1 = this.arrayOfSides[0]
        const side2 = this.arrayOfSides[1]
        const side3 = this.arrayOfSides[2]
        const side4 = this.arrayOfSides[3]

        if(this.countSides !== 4) {
            return false
        }
        if((side1 === side2) && (side1 === side3) && (side1 === side4)) {
            return true
        } else {
            return false
        }
    }

    get area() {
        return this.arrayOfSides[0] * this.arrayOfSides[1]
    }
}