//логін: Адмін
//пароль: Я головний
let login=prompt("Введіть логін");
if(login=="Адмін"){
    let password=prompt("Введіть пароль");
    if(password=="Я головний"){
        alert("Добридень");
    }
    else if(password==""||password==null){
        alert("Відмінено");
    } 
    else{
        alert("Не правильний пароль");
    }
}
else if(login==""||login==null){
    alert("Відмінено");
}
else{
    alert("Я вас не знаю");
}