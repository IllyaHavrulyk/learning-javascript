function min(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}

let a=+prompt("Введіть перше число");
let b=+prompt("Введіть друге число");
alert(min(a,b));