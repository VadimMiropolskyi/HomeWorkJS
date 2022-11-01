var message;
var login = prompt("login");

login == "Вася" ?  message = "Привет": message ="";
document.write (message);


login == "Директор" ?  message = "Здравствуйте" :  message =""; 
    document.write (message);

login == "" ? message = "Нет логина" : message ="Логин не верный или отсутствует";
    document.write (message);


