//1) С клавиатуры вводится натуральное число. Найти его наибольшую цифру.
// Например, введено число 764580. Наибольшая цифра в нем 8.

var number, nextNumber, max = 0;
number = +prompt('Введите число: ');


do {
	nextNumber = number % 10;
	number = parseInt(number / 10);
	if (nextNumber > max) max = nextNumber;
}
while (number > 0);
alert(max);