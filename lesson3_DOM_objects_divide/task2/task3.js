// // - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

// let person1 = {
// 	name: "tolya",
// 	age: 26,
// 	isMarried: false
// }
// let person2 = {
// 	name: "ivan",
// 	age: 23,
// 	isMarried: true
// }
// let person3 = {
// 	name: "misha",
// 	age: 21,
// 	isMarried: true
// }
// let person4 = {
// 	name: "max",
// 	age: 35,
// 	isMarried: true
// }
// let person5 = {
// 	name: "kolia",
// 	age: 21,
// 	isMarried: false
// }



// // - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

// let person = {
// 	name: "tolya",
// 	age: 26,
// 	isMarried: true,
// 	wife: {isBeautiful: true},
// 	kids: ["stas", "ira", "andriy"]
// }
// let market = {
// 	catgory: "electronic",
// 	director: {sex: man},
// 	commodity: [smartphones, computers]
// }
// let computer = {
// 	model: "dell Inspirion 15 30000",
// 	user: {isMe: true},
// 	complctation: [mouse, mat, charget]
// }
// let window = {
// 	frame: 3,
// 	appearance: {color: "white"},
// 	view: ["trees", "hostel"]
// }
// let map = {
// 	specific: {coating: "scretch"},
// 	coverage: "the whole planet",
// 	marked: ["Slovakia", "Czech Republic"]
// }


// // - При помощи for in вывести все ключи всех объектов из задания 1 и 2

// for(let i in person1){
// 	console.log(i);
// }


// for(let i in person2){
// 	console.log(i);
// }

// for(let i in person3){
// 	console.log(i);
// }

// for(let i in person4){
// 	console.log(i);
// }

// for(let i in person5){
// 	console.log(i);
// }

// for(let i in person){
// 	console.log(i);
// }

// for(let i in market){
// 	console.log(i);
// }
// for(let i in computer){
// 	console.log(i);
// }
// for(let i in window){
// 	console.log(i);
// }
// for(let i in map){
// 	// debugger
// 	console.log(i);
// }

// // - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// for(let i in map.specific){
// 	console.log(i);
// }
// for(let i in person.wife){
// 	console.log(i);
// }

// for(let i in market.director){
// 	console.log(i);
// }
// for(let i in computer.user){
// 	console.log(i);
// }
// for(let i in window.appearance){
// 	console.log(i);
// }

// // - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)                     #5

// let cars = [{
// 		model: "Tesla Motors Model S",
// 		year: "2009",
// 		power: "421 л.с.",
// 		color: "silver"
// 	},
// 	{
// 		model:"Tesla Motors Model X",
// 		year: "2012",
// 		power: "762 л.с.",
// 		color: "blue"

// 	}, 
// 	{
// 		model: "Tesla Motors Model Y",
// 		year: "2019",
// 		power: "687 л.с.",
// 		color: "white"
// 	}, 
// 	{
// 		model: "TESLA MOTORS ROADSTER",
// 		year: "2018",
// 		power: "722 л.с.",
// 		color: "black"
// 	}, 
// 	{
// 		model: "Tesla Cybertruck",
// 		year: "2022",
// 		power: "864 л.с.",
// 		color: "silver"
// 	}, 
// 	{
// 		model: "Scania G-series",
// 		year: "2005",
// 		power: undefined,
// 		color: "white"
// 	}, 
// 	{
// 		model: "Dodge Challenger SRT Demon",
// 		year: "2018",
// 		power: "656 л.с.",
// 		color: "white"
// 	}, 
// 	{
// 		model: "Lamborghini Aventador LP750-4 Superveloce Roadster on Forgiato Wheels",
// 		year: "2018",
// 		power: "726 л.с.",
// 		color: "pomarang"
// 	},
// 	{
// 		model: "Jaguar I-Pace EV400 AWD HSE Black Pack",
// 		year: '2020',
// 		power: "696 л.с.",
// 		color: "silver"
// 	},
		
// 	{
// 		model: "Bentley Flying Spur First Edition",
// 		year: "2020",
// 		power: "684 л.с.",
// 		color: "black"
// 	},]

// // - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)								#6

// let cities = [
// 	{
// 		named: "Жиди",
// 		population: "Забагато",
// 		country: "Напевно всі",
// 		region: "В Одесі точно є"
// 	},
// 	{
// 		named: "Азгардійці",
// 		population: "Після Таноса половина лишилась",
// 		country: "Ірландія",
// 		region: "Десь біля моря"
// 	},
// 	{
// 		named: "Смурфики",
// 		population: "Не більше 200",
// 		country: "Смурфляндія",
// 		region: "Грибна поляна"
// 	}
// ]


// // - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.            #7

// let carsAndDrivers = [{
// 	model: "Tesla Motors Model S",
// 	year: "2009",
// 	power: "421 л.с.",
// 	color: "silver",
// 	driver: {
// 		name: "Ivan",
// 		age: "25",
// 		sex: "men",
// 		stazh: "5 years"
// 	}
// },
// {
// 	model:"Tesla Motors Model X",
// 	year: "2012",
// 	power: "762 л.с.",
// 	color: "blue",
// 	driver: {
// 		name: "Misha",
// 		age: "21",
// 		sex: "men",
// 		stazh: "2 years"
// 	}

// }, 
// {
// 	model: "Tesla Motors Model Y",
// 	year: "2019",
// 	power: "687 л.с.",
// 	color: "white",
// 	driver: {
// 		name: "Vika",
// 		age: "24",
// 		sex: "women",
// 		stazh: "3 years"
// 	}
// }, 
// {
// 	model: "TESLA MOTORS ROADSTER",
// 	year: "2018",
// 	power: "722 л.с.",
// 	color: "black",
// 	driver: {
// 		name: "Kolia",
// 		age: "32",
// 		sex: "men",
// 		stazh: "6 years"
// 	}
// }, 
// {
// 	model: "Tesla Cybertruck",
// 	year: "2022",
// 	power: "864 л.с.",
// 	color: "silver",
// 	driver: {
// 		name: "Vita",
// 		age: "23",
// 		sex: "women",
// 		stazh: "3 years"
// 	}
// }, 
// {
// 	model: "Scania G-series",
// 	year: "2005",
// 	power: undefined,
// 	color: "white",
// 	driver: {
// 		name: "Vasia",
// 		age: "45",
// 		sex: "men",
// 		stazh: "10 years"
// 	}
// }, 
// {
// 	model: "Dodge Challenger SRT Demon",
// 	year: "2018",
// 	power: "656 л.с.",
// 	color: "white",
// 	driver: {
// 		name: "Slava",
// 		age: "36",
// 		sex: "men",
// 		stazh: "8 years"
// 	}
// }, 
// {
// 	model: "Lamborghini Aventador LP750-4 Superveloce Roadster on Forgiato Wheels",
// 	year: "2018",
// 	power: "726 л.с.",
// 	color: "pomarang",
// 	driver: {
// 		name: "Vova",
// 		age: "54",
// 		sex: "men",
// 		stazh: "28 years"
// 	}
// },
// {
// 	model: "Jaguar I-Pace EV400 AWD HSE Black Pack",
// 	year: '2020',
// 	power: "696 л.с.",
// 	color: "silver",
// 	driver: {
// 		name: "Ania",
// 		age: "35",
// 		sex: "women",
// 		stazh: "15 years"
// 	}
// },
	
// {
// 	model: "Bentley Flying Spur First Edition",
// 	year: "2020",
// 	power: "684 л.с.",
// 	color: "black",
// 	driver: {
// 		name: "Pavlo",
// 		age: "46",
// 		sex: "men",
// 		stazh: "22 years"
// 	}
// },]


// - проитерировать каждый массив из задания 5,6,7 при помощи while.

// let i = 0;
// while(i < cars.length){
// 	console.log(cars[i])

// 	i++
// }
// console.log("==========================================================");
// while(i < carsAndDrivers.length){
// 	console.log(cars[i])

// 	i++
// }
// console.log("==========================================================");

// while(i < cities.length){
// 	console.log(cars[i])

// 	i++
// }


// - проитерировать каждый массив из задания 5,6,7 при помощи for .

// for(let i = 0; i < carsAndDrivers.length; i++){
// 	console.log(carsAndDrivers[i])
// }
// console.log("==========================================================");

// for(let i = 0; i < cars.length; i++){
// 	console.log(cars[i])
// }
// console.log("==========================================================");

// for(let i = 0; i < cities.length; i++){
// 	console.log(driver[i])
// }
// console.log("==========================================================");



// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.


// for(let i of carsAndDrivers){
// 	console.log(i)
// }
// console.log("==========================================================");

// for(let i of cars){
// 	console.log(i)
// }
// console.log("==========================================================");

// for(let i of cities){
// 	console.log(i)
// }
// console.log("==========================================================");






// - взять объекты из задания 1 и превратить каждый в json.



// let json1 = JSON.stringify(person1);
// let json2 = JSON.stringify(person2);
// let json3 = JSON.stringify(person3);
// let json4 = JSON.stringify(person4);
// let json5 = JSON.stringify(person5);

// console.log(json1);
// console.log(json2);
// console.log(json3);
// console.log(json4);
// console.log(json5);




// - взять json из задания 11 и превратить их обратно в объекты.
// console.log(JSON.parse(json1));
// console.log(JSON.parse(json2));
// console.log(JSON.parse(json3));
// console.log(JSON.parse(json4));
// console.log(JSON.parse(json5));



// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .


// for(let i of cars){
// 	console.log(JSON.stringify(i))
// }


// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// for(let i of cities){
// 	console.log(JSON.stringify(i))
// }

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let newCarsAndDrivers = [];
// for(let i of carsAndDrivers){
// 	let index = JSON.stringify(i);
// 	newCarsAndDrivers.push(JSON.parse(index));

// }
// console.log(newCarsAndDrivers);






// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo']}, 
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
// 	{name: 'max', age: 30, status: true, skills: ['mysql', 'mongo']}
// ];

// for(let i of users){
// 	for(let j in i){
// 		console.log(j + ":  " + `${i[j]}` )
// 		if(j === "skills"){
// 		for(let k of i.skills)
// 			console.log(k)
// 		}
// 	}
// 	console.log("==================")

// }





// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo']}, 
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
// 	{name: 'max', age: 30, status: true, skills: ['mysql', 'mongo']}
// ];
// let skilsArr = [];

// for(let i of users){
// 	for(let j in i){
// 		console.log(j + ":  " + `${i[j]}` )
// 		if(j === "skills"){
// 		for(let k of i.skills)
// 			console.log(k)
// 		}
// 	}
// 	skilsArr.push(i.skills);
// 	console.log("==================")
	
	
// }
// console.log(skilsArr)
// console.log("==================")



// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//  -------- Зверху вроді так і зробив

// - ==============================================================================================================================================


            			// let users = [{
            			// 	name: 'vasya',
            			// 	age: 31,
            			// 	status: false,
            			// 	address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
            			// }, {
            			// 	name: 'petya',
            			// 	age: 30,
            			// 	status: true,
            			// 	address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
            			// }, {
            			// 	name: 'kolya',
            			// 	age: 29,
            			// 	status: true,
            			// 	address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
            			// }, {
            			// 	name: 'olya',
            			// 	age: 28,
            			// 	status: false,
            			// 	address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
            			// }, {
            			// 	name: 'max',
            			// 	age: 30,
            			// 	status: true,
            			// 	address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
            			// }, {
            			// 	name: 'anya',
            			// 	age: 31,
            			// 	status: false,
            			// 	address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
            			// }, {
            			// 	name: 'oleg',
            			// 	age: 28,
            			// 	status: false,
            			// 	address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
            			// }, {
            			// 	name: 'andrey',
            			// 	age: 29,
            			// 	status: true,
            			// 	address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
            			// }, {
            			// 	name: 'masha',
            			// 	age: 30,
            			// 	status: true,
            			// 	address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
            			// }, {
            			// 	name: 'olya',
            			// 	age: 31,
            			// 	status: false,
            			// 	address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
            			// }, {
            			// 	name: 'max',
            			// 	age: 31,
            			// 	status: true,
            			// 	address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
                        // }];
                        
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// for(let i of users){
//     for(let address in i.address ) {
//         console.log(address +': ' + i.address[address] );
    
//     }
//     console.log('==============================')
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// for (const user of users) {
// 	let div = document.createElement('div');
// 	div.innerText = `${user.name} ${user.age} ${user.status} ${user.address.city} ${user.address.country} ${user.address.street} ${user.address.houseNumber}`
// 	document.body.appendChild(div);
// 	div.style.marginBottom = '10px';
// 	div.style.padding = '5px';
// 	div.style.backgroundColor = 'silver';  

// }






// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)






// for (const user of users) {
// 	let outerDIV = document.createElement('div');
// 	outerDIV.style.marginBottom = '30px';
// 	outerDIV.style.backgroundColor = "black"
// 	let br = 0;
// 	for (const userKey in user) {
// 		br++;
// 		if(br === 4){
// 			for(const i in user.address){
// 				let propertyValueDIV = document.createElement('div');
// 				propertyValueDIV.innerText = `${user.address[i]}`;
// 				propertyValueDIV.classList.add(i);
// 				propertyValueDIV.style.marginBottom = '10px';
// 				propertyValueDIV.style.padding = '5px';
// 				propertyValueDIV.style.backgroundColor = 'silver';
// 				outerDIV.appendChild(propertyValueDIV);
// 			}
// 			break;	
			
// 		}

// 		let propertyValueDIV = document.createElement('div');
// 		propertyValueDIV.innerText = `${user[userKey]}`;

// 		propertyValueDIV.classList.add(userKey);
// 		propertyValueDIV.style.marginBottom = '10px';
// 		propertyValueDIV.style.padding = '5px';
// 		propertyValueDIV.style.backgroundColor = 'silver';
// 		outerDIV.appendChild(propertyValueDIV);

		
// 	}
// 	document.body.appendChild(outerDIV);
// }










// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості




// for (const user of users) {
// 	let outerDIV = document.createElement('div');
// 	outerDIV.style.marginBottom = '80px';
// 	outerDIV.style.backgroundColor = "black"
// 	let br = 0;
// 	for (const userKey in user) {
// 		let propertyValueDIV = document.createElement('div');
// 		br++;
// 		if(br === 4){
// 			let adressDIV = document.createElement('div');
// 			adressDIV.classList.add(userKey);
// 			adressDIV.style.marginBottom = '50px';
// 			adressDIV.style.padding = '5px';
// 			adressDIV.style.backgroundColor = 'yellow';
			
// 			for(const i in user.address){
// 				let adressValueDIV = document.createElement('div');
// 				adressValueDIV.innerText = `${user.address[i]}`;
// 				adressValueDIV.classList.add(i);
// 				adressValueDIV.style.marginBottom = '10px';
// 				adressValueDIV.style.padding = '3px';
// 				adressValueDIV.style.backgroundColor = 'gold';
// 				outerDIV.appendChild(adressValueDIV);
// 			}
// 			propertyValueDIV.appendChild(adressDIV);
// 			break;	
			
// 		}

// 		propertyValueDIV.innerText = `${user[userKey]}`;

// 		propertyValueDIV.classList.add(userKey);
// 		propertyValueDIV.style.marginBottom = '50px';
// 		propertyValueDIV.style.padding = '5px';
// 		propertyValueDIV.style.backgroundColor = 'silver';
// 		outerDIV.appendChild(propertyValueDIV);

		
// 	}
// 	document.body.appendChild(outerDIV);
// }











// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
            // let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
            // let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];





    // for(let users of usersWithId) {
    //     for(let city of citiesWithId) {
    //         if(users.id === city.user_id) {
    //             users.address = city;
    //         }
    //     }
	// }
	// console.log(usersWithId)

 // Записати цей об'єкт в новий масив
// let usersWithCities = [];
//  for(let users of usersWithId) {
// 	for(let city of citiesWithId) {
// 		if(users.id === city.user_id) {
// 			users.address = city;
// 			usersWithCities.push(users);

// 		}
// 	}
// }
// console.log(usersWithCities)


// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]


 


// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу

// let rozmH3 = document.createElement("h3");
// rozmH3.id = "1";
// rozmH3.className = "newH3";
// rozmH3.innerText = "Some text xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
// document.body.appendChild(rozmH3);
// let content = document.getElementById("1");
// let contentClassName = document.getElementsByClassName("newH3");
// let contentTag = document.getElementsByTagName("h3");

// console.log(content.innerText);
// console.log(contentClassName[0].innerText);
// console.log(contentTag[0].innerText);






// // - змінити цей текст використовуючи селектори id, class,  tag

// content.innerText = "Kaaaaaaaput!!!!!!!";
// console.log(content.innerText);
// contentClassName[0].innerText = "AVE Caesar !!!!!!!!!!!!!!!!!";
// console.log(contentClassName[0].innerText);
// contentTag[0].innerText = "Valar Morhulis";
// console.log(contentTag[0].innerText);





	// // - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

	// contentTag[0].style.length = "900px";
	// content.style.height = "500px";
	// contentClassName[0].style.backgroundColor = "blue";




// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// let tbl = document.createElement("table");
// let row = document.createElement("tr");
// for(let i = 0; i < 3; i++){
// 	let cell = document.createElement("td");
// 	let cellText = document.createTextNode("колонка" + i);
// 	cell.appendChild(cellText);

// 	cell.style.height = "10px";
// 	row.appendChild(cell);
// }

// tbl.appendChild(row);
// document.body.appendChild(tbl);

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
//  - знайти всі div та змінити ім колір на червоний

// ============
// ====class===
// ============

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},

// 			];




// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
