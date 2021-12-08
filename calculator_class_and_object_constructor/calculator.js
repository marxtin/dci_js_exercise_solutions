///Calculator

function Calculator(a, b) {
    this.a = a;
    this.b = b;
    this.sum = function () {
        return this.a + this.b
    }
    this.mul = function () {
        return this.a * this.b
    }
    this.read = function () {
        console.log(`Calculator says:\n ${this.a} added to ${this.b} is ${this.sum()}\n ${this.a} multiplied by ${this.b} is ${this.mul()}\n the square root of ${this.a} is ${this.square_a()},\n the square root of ${this.b} is ${this.square_b()}\n ${this.a} to the power of ${this.b} is ${this.square()}`)
    }
}

const calculator = new Calculator()
calculator.square_a = function () {
    return this.a ** 2
}
calculator.square_b = function () {
    return this.b ** 2
}
calculator.square = function () {
    return this.a**this.b
}

calculator.a = 5
calculator.b = 3
console.log(calculator);
calculator.read()



////Calculator Class

class Calculator {
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
        sum(){
            return this.a + this.b
        };
        subst(){
            return this.a - this.b
        };
        mul(){
            return this.a * this.b
        };
        div(){
            return this.a/this.b
        }
        read(){
            console.log(
                `\n
                 the sum of ${this.a} and ${this.b} is ${this.sum()}\n
                 the difference of ${this.a} and ${this.b} is ${this.subst()}\n
                 the product of ${this.a} and ${this.b} is ${this.mul()}\n
                 the quotient of ${this.a} and ${this.b} is ${this.div()}\n`);
        }
    
}

const newCalc = new Calculator(2,5);

console.log(newCalc);
newCalc.read()