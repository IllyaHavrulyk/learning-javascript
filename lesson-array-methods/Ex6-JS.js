function Calculator() {
    this.operations = [{ operation: '+', method: (a, b) => a + b }, { operation: '-', method: (a, b) => a - b }];
    this.calculate = (str) => {
        let arr = str.split(" ");
        for (let elem of this.operations) {
            if (elem.operation === arr[1]) {
                return elem.method(+arr[0], +arr[2]);
            }
        };
        return "Невідома операція";
    }
    this.addMethod = (o, m) => {
        this.operations.push({ operation: o, method: m });
    }
}

let calc = new Calculator;

alert(calc.calculate("3 + 7"));
alert(calc.calculate("45 - 11"));

calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

alert(calc.calculate("2 ** 3"));
alert(calc.calculate("10 * 8"));
alert(calc.calculate("56 / 12"));

