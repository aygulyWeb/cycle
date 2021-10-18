//10) Необходимо суммировать все нечётные целые числа в диапазоне, 
//который введёт пользователь с клавиатуры.

var start, finish, summ = 0;


start = +prompt('Введите начало:');
finish = +prompt('Введите конец:');

var i = start;

while (i <= finish) {
	if (i % 2 == 1) {
		summ += i;

	}
	i++;

}
alert(summ);

