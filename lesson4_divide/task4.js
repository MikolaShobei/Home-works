// - створити функцію яка виводить масив

// function arr(){
//     let mas = [25, 87, 65, 022, 798];
//     console.log(mas)
// }
// arr()


// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

// function arr(){
//     let mas = [];
//     for(let i = 0; i < 20; i++){
//     mas[i] = parseInt(Math.random() * (85 - 5) + 5);

//     }
//     console.log(mas)
// }
// arr()




// // - створити функцію яка приймає три числа та виводить та повертає найменьше.

// function min(a, b, c) {
//     let m = [a, b, c];
    
//     let chislo = a;
//     for(let i = 1; i < m.length; i++){
//         m[i] > chislo ? chislo = chislo: chislo = m[i];
//     }
//     console.log(chislo)
//     return chislo;
// }
// min(22, 5, 54)




// // - створити функцію яка приймає три числа та виводить та повертає найбільше.

// function max(a, b, c) {
//     let m = [a, b, c];
    
//     let chislo = a;
//     for(let i = 1; i < m.length; i++){
//         m[i] > chislo ? chislo = m[i]: chislo = chislo;
//     }
//     console.log(chislo)
//     return chislo;
// }
// max(22, 5, 54)




// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function arr(){

//     chisloMin = arguments[0];
//     chisloMax = arguments[0];
//     for(let i of arguments){
//         i > chisloMin ? chisloMin = chisloMin: chisloMin = i;
//     }
    
    
//     for(let i of arguments){
//         i > chisloMax ? chisloMax = i: chisloMax = chisloMax;
//     }
//     console.log(chisloMax)
//     return chisloMin;
// }

// arr(2, 5, 8, 58, 69, 100 ,95)




// - створити функцію яка виводить масив
// Це вже було !!!!!!!!!

// - створити функцію яка повертає найбільше число з масиву


// let m = [25, 87, 65, 022, 798];

// function max() {
    
//     let chislo = m[0];
//     for(let i = 1; i < m.length; i++){
//         m[i] > chislo ? chislo = m[i]: chislo = chislo;
//     }
//     console.log(chislo)
//     return chislo;
// }
// max(m)










// - створити функцію яка повертає найменьше число з масиву



// let m = [25, 87, 65, 1, 22, 798];
// function min() {
//     let chislo = m[0];
//     for(let i = 1; i < m.length; i++){
//         m[i] > chislo ? chislo = chislo: chislo = m[i];
//     }
//     console.log(chislo)
//     return chislo;
// }
// min(m)









// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// let c = [25, 87, 65, 1, 22, 798];
// function scepler(m){
//     let sum = 0;
//     for (let i of m){
//         sum +=  i;
//     }
//     console.log(sum)
//     return sum
// }
// scepler(c)


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let c = [25, 87, 65, 25, 798];
// function scepler(m){
//     let iter = 0, sum = 0;
//     for (let i of m){
//         sum +=  i;
//         iter++;
//     }
//     console.log(sum)
//     console.log(sum / iter)
//     return sum / iter;
// }
// scepler(c)



// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві



// let c = [25, 87, 65, 25, "798"];
// function scepler(m){
//     let iter = 0;
//     for (let i in m){
//         iter++;
//     }
//     console.log(iter)
//     return iter;
// }
// scepler(c)

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них


// let c = [25, 87, 65, 25, "798", {name: "ffd"}, [25, 65, 87]];
// function scepler(m){
//     let iter = 0;
//     for (let i of m){
//         if(typeof i === "object"){
//             //iter -=1;      // якщо потрібно щоб об'єкти та масиви з об'єктами в середині не рахувались
//             for(let j in i){
//             iter++;
//             }
//         }
//         iter++;
//     }
//     console.log(iter)
//     return iter;
// }
// scepler(c)


// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

// function sumIndex(a, b){
//     let sum = [];
//     for(let i in a){
//         sum[i] = a[i] + b[i];
//     }
//     console.log(sum);
//     return sum

// }
// sumIndex([15, 20, 25], [5, 10, 15])





//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

function zamina(a, i){
    
    a[i] = i + 1;
    console.log(a);
    console.log(i)
    return a

}
zamina([15, 20, 25], 2)








// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.


function nullIndex(a){
    const len = a.length;
    for(let i = 0; i < len; i++){
        if(a[i] === 0){
            a.push(a[i]);
            a.splice(i, 1);
            
        }
    }
    console.log(a);
    return a
}
nullIndex([25, 0, 2, 5, 0, 87, 1])

// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]








// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

// function hello(){
//     let div = document.createElement("div")
//     div.style.width = "100%";
//     div.style.height = "50px";
//     div.innerText = "Hello owu";
//     div.style.backgroundColor = "yellow"
//     document.body.appendChild(div);

// }
// hello()

// // - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function element(type, text){
//     let newEl = document.createElement(type);
//     newEl.innerText = text;
//     document.body.appendChild(newEl);


// }

// element("div", "Гай Ю́лій Це́зар А́вгуст Герма́нік (Калі́гула) (Gaius Iulius Caesar August Germanicus (Caligula)) (31 серпня 12 року, Анцій — 24 січня 41 року, Рим) — римський імператор з династії Юліїв-Клавдіїв (Gaius Caesar Augustus Germanicus, неофіційно Imperator Gaius Caesar, з 18 березня 37). Почесний титул Pater patriae (з початку 38 р.). Великий понтифік (Pontifex Maximus), консул 40 й 41 р., квестор 33 р., чотири рази трибун (після початку правління — щорічно).")
       



// ===============================================================================================





let cars = [{
            model: "Tesla Motors Model S",
    		year: "2009",
    		power: "421 л.с.",
    		color: "silver"
    	},
    	{
    		model:"Tesla Motors Model X",
    		year: "2012",
    		power: "762 л.с.",
    		color: "blue"
    
    	}, 
    	{
    		model: "Tesla Motors Model Y",
    		year: "2019",
    		power: "687 л.с.",
    		color: "white"
    	}, 
    	{
    		model: "TESLA MOTORS ROADSTER",
    		year: "2018",
    		power: "722 л.с.",
    		color: "black"
    	}, 
    	{
    		model: "Tesla Cybertruck",
    		year: "2022",
    		power: "864 л.с.",
    		color: "silver"
    	}, 
    	{
    		model: "Scania G-series",
    		year: "2005",
    		power: undefined,
    		color: "white"
    	}, 
    	{
    		model: "Dodge Challenger SRT Demon",
    		year: "2018",
    		power: "656 л.с.",
    		color: "white"
    	}, 
    	{
    		model: "Lamborghini Aventador LP750-4 Superveloce Roadster on Forgiato Wheels",
    		year: "2018",
    		power: "726 л.с.",
    		color: "pomarang"
    	},
    	{
    		model: "Jaguar I-Pace EV400 AWD HSE Black Pack",
    		year: '2020',
    		power: "696 л.с.",
    		color: "silver"
    	},
            
    	{
    		model: "Bentley Flying Spur First Edition",
    		year: "2020",
    		power: "684 л.с.",
    		color: "black"
        }
    ]


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці





// function carsBlock(cars, type){
//     let typE = document.createElement(type);
//     for(let i of cars){
//         let p = document.createElement("p");
//         p.innerText = i.model + " \n " + i.year + " \n " + i.power + " \n " + i.color;

//         typE.appendChild(p);
//     }
//     document.body.appendChild(typE);
// }
// carsBlock(cars, "div")
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

// function carsBlock(cars, type){
//     let typE = document.createElement(type);
//     for(let i of cars){
//         for(j in i){
//             let p = document.createElement("p");
//             p.innerText = j + ":  " + `${i[j]}`;

//             typE.appendChild(p);
//         }
//     }
//     document.body.appendChild(typE);
// }
// carsBlock(cars, "div")













// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// // Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// // Частковий приклад реультату:
// function razom(usersWithId, citiesWithId){

    // for(let users of usersWithId) {
    //     for(let city of citiesWithId) {
    //         if(users.id === city.user_id) {
    //             users.address = city;
    //         }
    //     }
    // }

//     return usersWithId;
// }
// console.log(razom(usersWithId, citiesWithId) )       

// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
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



// function fightClub(rules){

//     for(let rule of rules){
//         let div = document.createElement("div");
        
//         let h2 = document.createElement("h2");
//         let p = document.createElement("p");
//         h2.innerText = `${rule.title}`;
//         p.innerText = `${rule.body}`;
//         p.appendChild(h2);
//         div.appendChild(p);
//         document.body.appendChild(div);

        
//     }

// }

// fightClub(rules)
    

// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!




// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій

// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========
