

// // -- створити об'єкт (не меньше 5ти властивостей) який описує
// // - собаку
// let dog = {
// 	name: "Мухтар",
// 	age: 10,
// 	color: "black",
// 	eyeColor: "gray",
// 	breed: "Вівчарка"
// }



// // - людину

// let person = {
// 	name: "Джон",
// 	lastName: "Сноу",
// 	age: 35,
// 	haireColor: black,
// 	national: ukrainian,

// }

// // - автомобіль

// let auto = {
// 	mark: "Tesla",
// 	model: "model X",
// 	color: "silver",
// 	wheel: 4,
// 	cost = undefined,
// }

// // - квартиру
// let home = {
// 	kvadratura: '110 kv',
// 	rooms: 3,
// 	hightWalls: "3 m",
// 	floar: "5th"
// }
// // - книгу
// let book = {
// 	title: "Темна вежа. Вовки Kальї",
// 	autor: "Стівен Кінг",
// 	pages: 423,
// 	paliturka: "Тверда",
// 	pictures: "Вовк"

// }

// // -- Створити масив та вивести його в консоль:
// // - з 5 собак
// let dogs = ["вівчарка", "такса", "алабай", "хаскі", "мопс"]
// // - 3 5 людей
// let persons = ["Ivan", "Kolia", "Olia", "Yura", "DIma"]
// // - з 5 автомобілів
// let persons = ["BMW", "Scania", "Messedes", "Acura", "Man"]

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// let house = {
// 	kvadratura: "250 kv",
// 	roof: "Двоскатна",
// 	rooms: ["коридор", "кухня", "спальня", "холл", "ігрова", "спортзал"],
// 	windows: "21",
// 	garage: {
// 		auto: "Scania euro 6",
// 		moto: "TEKKEN 250"
// 	}
// }


// - водій
// let driver = {
// 	name: "Ivan",
// 	age: 42,
// 	dressed: ["кепка", "куртка", "джинси"],
// 	auto: "skoda fabia",
// 	family: {
// 		wife: "Yana",
// 		son: "Igor",
// 		douger: "Alina"
// 	}	
// }


// // - іграшку
// let igr = {
// 	type: "lego",
// 	figure: "530",
// 	fromGame: "Witcer",
// 	personnage: ["Geralt", "Yennifer", "Liutic", "Tcirilla"],
// 	travel: {
// 		made: "China",
// 		bought: "Ukraine"
// 	}
// }



// // Дан массив:
// let users = [
// 				{name: 'vasya', age: 31, status: false},
// 				{name: 'petya', age: 30, status: true},
// 				{name: 'kolya', age: 29, status: true},
// 				{name: 'olya', age: 28, status: false},
// 				{name: 'max', age: 30, status: true},
// 				{name: 'anya', age: 31, status: false},
// 				{name: 'oleg', age: 28, status: false},
// 				{name: 'andrey', age: 29, status: true},
// 				{name: 'masha', age: 30, status: true},
// 				{name: 'olya', age: 31, status: false},
// 				{name: 'max', age: 31, status: true}
// 			];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// console.log(users[7].status);

// - статус Максима
// console.log(users[10].status);

// - ім'я передостаннього об'єкту

// console.log(users[9].name);

// - ім'я третього об'єкта
// console.log(users[2].name);

// - вік Олега
// console.log(users[6].age);


// - вік Олі
// console.log(users[9].age);

// - вік + ім'я 5го об'єкта
// console.log(users[4].name + " " + users[4].age);

// - вік + сатус Анни
// console.log(users[5].age + " " + users[5].status);


// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

// -Візьміт ьфайл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"

// let content = document.getElementById("content");
// console.log(content);

// - отримує текст з блоку з id "rules"

// let rules = document.getElementById("rules");
// console.log(rules);

// // - замініть текст параграфа з id 'content' на будь-який інший

// let content = document.getElementById("content");
// content.innerHTML = " Синька зло но пить не брошу!!!"


// // - замініть текст параграфа з id 'rules' на будь-який інший

// let rules = document.getElementById("rules");
// rules.innerHTML = " Синька зло но пить не брошу!!!"



// // - змініть кожному елементу колір фону на червоний
// let rules = document.getElementById("rules");
// rules.style.backgroundColor = 'red';
// let content = document.getElementById("content");
// content.style.backgroundColor = "red";
// let li = document.getElementsByTagName("li");
// for(let i of li){	
// 	i.style.backgroundColor = "red"
	
// }

// - змініть кожному елементу кор тексту на синій

// let rules = document.getElementById("rules");
// rules.style.color = 'blue';
// let content = document.getElementById("content");
// content.style.color = 'blue';
// let li = document.getElementsByTagName("li");
// for(let i of li){	
// 	i.style.color = 'blue';
	
// }


// - отримати весь список класів елелімента з id=rules і вивести їх в console.log

// ось тут я не зрозумів завдання, id ж лише одне таке є то про який список касів йдеться???


// - отримати всі елементи з класом fc_rules
// let content = document.getElementsByClassName("fc_rules");
// console.log(content);


// - поміняти колір тексту у всіх елементів fc_rules на червоний
// let li = document.getElementsByTagName("li");
// for(let i of li){	
// 	i.style.color = 'red';
	
// }
// ====================
// ====================
// ====================

// =================
// =====class=======
// =================
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
// -- робить шириниу елементу ul 400 пікселів
// -- робить шириниу всіх елементів з класом linkList шириною 50%
// -- отримує текст який зберігається в елементі з класом listElement2
// -- отримує всі елементи li та змінює ім колір фону на сірий
// -- отримує всі елементи 'a' та додає їм клас anchor
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// -- отримати елементи p та змінити їм paddin на довільне значення
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
