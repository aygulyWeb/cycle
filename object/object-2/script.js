

// ДЗ на тему Объекты (Часть 1): Придумать 10 литеральный и 5 объектов (Функция конструктор).
//  В каждый объект должен имеет минимум 5 свойств и 4 собственных методов. и вложенных объектов. 
//  Например school., car, person, building итд

function Univercity(name, adress, faculty, proffessors, students) {
	this.name = name;
	this.adress = adress;
	this.faculty = faculty;
	this.proffessors = proffessors;
	this.students = students;

	this.showName = function () {
		console.log("Где находится ВУЗ: " + this.name);
	};



}
let street = new Univercity("Досназаров");
street.showName();






