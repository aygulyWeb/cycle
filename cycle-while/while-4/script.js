//4) Найти сумму и произведение цифр, введенного натурального числа. 
//Например, если введено число 325, то сумма его цифр равна 10 (3+2+5), а произведение 30 (3*2*5).

var num, numReverse, plus = 0, mult = 1;
num = +prompt('Введите число:');

while (num > 0) {
	numReverse = num % 10;
	plus += numReverse;
	mult *= numReverse;
	num = parseInt(num / 10)
}
alert(plus);
alert(mult);
