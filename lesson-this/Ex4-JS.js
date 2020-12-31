let calculator = {
    read: function () {
        this.a = +prompt("Введіть перше число","0");
        this.b = +prompt("Введіть друге число","0");
    },
    sum: function(){
        return this.a+this.b;
    },
    mul: function(){
        return this.a*this.b;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );