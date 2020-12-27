const number =+prompt('Введіть число між 0 і 3',);
switch(number){
    case 0:
        alert("Ви ввели число 0");
        break;
    case 1:
        alert("Ви ввели число 1");
        break;
    case 2:
    case 3:
        alert("Ви ввели число 2, а може і 3");
        break;
}