//7) Посчитать четные и нечетные цифры введенного натурального числа. 
//Например, если введено число 34560,  то у него 
//3 четные цифры (4, 6 и 0) и 2 нечетные (3 и 5).

var num, numReverse, odd = 0, even = 0, oddEven;

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
