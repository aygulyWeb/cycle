//3) Сформировать из введенного числа обратное по порядку входящих в него цифр и вывести на экран.
//Например, если введено число 3486, то надо вывести число 6843.

var num, numReverse = 0;
num = +prompt('Введите число:');

while (num) {
	numReverse *= 10;
	numReverse += num % 10;
	num = parseInt(num / 10)
}
alert(numReverse);
