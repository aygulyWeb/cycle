//13) Напишите код, который будет спрашивать логин с помощью prompt.
//Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша 
//Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

//Пароль проверять так:

//Если введён пароль «Я главный», то выводить «Здравствуйте!»,
//Иначе – «Неверный пароль»,
//При отмене – «Отменено».

var login, password;

login = prompt("Введите логин", "");
if (login == "Админ") {
	password = prompt("Пароль", "");

} else if (login == null || login == undefined) {
	alert("Вход отменён");
} else {
	alert("Я вас не знаю");
}






