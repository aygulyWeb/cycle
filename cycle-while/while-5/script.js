//5) Вычислить факториал введенного числа

var num, factorial = 1;
num = +prompt('Введите число:');


while (num > 1) {
	factorial *= num;
	num -= 1;

}
alert(factorial);

