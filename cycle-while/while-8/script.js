//8) Вывести на экран столько элементов ряда Фибоначчи, сколько указал пользователь. 
//Например, если на ввод поступило число 6, то вывод должен содержать шесть первых чисел ряда Фибоначчи: 1 2 3 5 8 13.

var num, numReverse, a = 0;

num = +prompt('Введите число:');

while (num > 0) {
	numReverse = num % 10;
	oddEven = numReverse % 2 == 0
	if (oddEven == true) {
		odd += numReverse;
	}
	else {
		even += numReverse;
	}
	num = parseInt(num / 10);
}
alert(odd);
alert(even);
