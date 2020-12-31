function Calculator() {
    this.read = function() {
        this.a=+prompt("Введіть перше число");
        this.b=+prompt("Введіть друге число");
    };
    this.sum = function() {
        return this.a+this.b;
    };
    this.mul = function() {
        return this.a*this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
