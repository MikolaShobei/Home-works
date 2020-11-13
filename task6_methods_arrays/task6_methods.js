
// // - создать массив с 20 числами.
// let myMass = [7,84,5,21,3,6,55,99,88,70,44,11,22,68,32,87,45,69,78,80]



// // -- при помощи метода sort и колбека  отсортировать массив.
// let sort1 = myMass.sort( (a, b) => {return a - b })
// console.log(sort1)

// // -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let sort2 = myMass.sort( (a, b) => {return b - a })
// console.log(sort2)

// // -- при помощи filter получить числа кратные 3
// let filter1 = myMass.filter((value) => !(value % 3) )
// console.log(filter1)
// // -- при помощи filter получить числа кратные 10
// let filter2 = myMass.filter((value) => !(value % 10) )
// console.log(filter2)

// // -- перебрать (проитерировать) массив при помощи foreach()
// let forEach = myMass.forEach((value) =>{

//     console.log(value)
// } )

// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let map = myMass.map((value) => value * 3 )
// console.log(map)
// // - создать массив со словами на 15-20 элементов.
// let myWordsMass = ['massiv', 'pivo', 'lodka', 'kugut', 'mouse', 'phithics', 'army', 'battary', 'lamp', 'tapochok', 'nalivai', 'patetos', 'markva', 'wikend', 'marshmallo', 'faculty', 'nanotekhology']

// // -- отсортировать его по алфавиту в восходящем порядке.
// let sortTextArr = myWordsMass.sort(() =>{return 1} )
// console.log(sortTextArr)
// // -- отсортировать его по алфавиту  в нисходящем порядке.
// let sortTextArrRevers = myWordsMass.sort(() =>{return -1} )
// console.log(sortTextArrRevers)

// // -- отфильтровать слова длиной менее 4х символов
// let filterTextMass = myWordsMass.filter((word) => word.length >=4 )
// console.log(filterTextMass)

// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let mapTextMass = myWordsMass.map((word) => word = `${word} !` )
// console.log(mapTextMass)



// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];

// // - відсортувати його за  віком (зростання , а потім окремо спадання)
// let sortUsersAge = users.sort((a,b) => {return a.age - b.age} )
// console.log(sortUsersAge, "sortUsersAge")

// let sortUsersAgeReverse = users.sort((a,b) => {return b.age - a.age} )
// console.log(sortUsersAgeReverse, "sortUsersAgeReverse")

// // - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let sortUsersLangthName = users.sort((a, b) => a.name.length -b.name.length )
// console.log(sortUsersLangthName, "sortUsersLangthName")

// let sortUsersLangthNameReverse = users.sort((a, b) => b.name.length - a.name.length)
// console.log(sortUsersLangthNameReverse, "sortUsersLangthNameReverse")

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
let creatingId = users.map((user, index) => {
    
    return user.id = `${user.name[0]}${user.age.toString()[0]}`
} )
console.log(creatingId)

// - відсортувати його за індентифікатором
let sortcreatingId = creatingId.sort((a,b) => {return a.id - b.id} )
console.log(sortcreatingId, "sortcreatingId")
 
// -- наисать функцию калькулятора с 2мя числами и колбеком

// -- наисать функцию калькулятора с 3мя числами и колбеком

// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================




// let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, {producer:"mercedes",model: "e63",year 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// - двигун = 2л
// - виробник мерс
// - двигун більше 3х літрів + виробник мерседес
// - двигун більше 3х літрів + виробник субару
// - сили більше ніж 300
// - сили більше ніж 300 + виробник субару
// - мотор серіі ej
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// - двигун меньше 3х літрів + виробник мерседес
// - двигун більше 2л + сили більше 250
// - сили більше 250  + виробник бмв



// - взять слдующий массив
// let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// -- отсортировать его по id пользователей
// -- отсортировать его по id пользователей в обратном опрядке
// -- отсортировать его по возрасту пользователей
// -- отсортировать его по возрасту пользователей в обратном порядке
// -- отсортировать его по имени пользователей
// -- отсортировать его по имени пользователей в обратном порядке
// -- отсортировать его по названию улицы  в алфавитном порядке
// -- отсортировать его по номеру дома по возрастанию
// -- отфильтровать (оставить) тех кто младше 30
// -- отфильтровать (оставить) тех у кого отрицательный статус
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// -- отфильтровать (оставить) тех у кого номер дома четный


// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі


let cars = [ {producer:"subaru",year: 2010, power: 400, price: 200000, owner: {name: "petya", age: 29, experience: 11}}, 
    {producer:"subaru", year: 2007, power: 250, price: 300000, owner: {name: "vasia", age: 31, experience: 7}}, 
    {producer:"subaru", year: 2011, power: 300, price: 250000, owner: {name: "vika", age: 34, experience: 4}},
    {producer:"subaru", year: 1998, power: 140, price: 350000, owner: {name: "tanya", age: 27, experience: 6}}, 
    {producer:"subaru", year: 2014, power: 200, price: 400000, owner: {name: "andriy", age: 26, experience: 5}}, 
    {producer:"subaru", year: 2014, power: 165, price: 285000, owner: {name: "stas", age: 30, experience: 8}}, 
    {producer:"bmw", year: 2013, power: 120, price: 204000, owner: {name: "kolia", age: 48, experience: 21}}, 
    {producer:"bmw", year: 2010, power: 120, price: 225000, owner: {name: "sasha", age: 40, experience: 13}},
    {producer:"bmw", year: 2009, power: 350, price: 410000, owner: {name: "sergo", age: 32, experience: 11} }, 
    {producer:"bmw", year: 2012, price: 3700000, owner: {name: "max", age: 28, experience: 7} },
    {producer:"mercedes", year: 1990, power: 180, price: 160000, owner: {name: "Yivan", age: 32, experience: 8}}, 
    {producer:"mercedes", year: 2017, power: 400,price: 240000, owner: {name: "Yura", age: 35, experience: 16}}, 
    {producer:"mercedes", year: 2017, power: 230, price: 235000, owner: {name: "ira", age: 25, experience: 5}} 
];

let newDrivers = [
    {name: "shephan1", age: 27, experience: 6},
    {name: "shephan2", age: 35, experience: 12},
    {name: "shephan3", age: 29, experience: 4},
    {name: "shephan4", age: 38, experience: 15},
    {name: "shephan5", age: 25, experience: 7},
    {name: "shephan6", age: 28, experience: 3},
    {name: "shephan7", age: 26, experience: 5}
]
let remontAndChangeDrivers = (cars, newDrivers) =>{
let i = 0

cars.map((value, index)=> {
    if(!(index % 2)) {
        
        Math.floor(value.power += value.power * 0.1)
        Math.floor(value.price *= 1.05)
        value.owner = newDrivers[i]
        i++
    }
})

cars.map(value => {
    if(value.owner.age > 25 && value.owner.experience < 5){
        value.owner.experience += 1
    }
} )

}
remontAndChangeDrivers(cars, newDrivers)
console.log(cars)

let suma = (cars) => {
    let j = 0
    cars.forEach(value => {
        j += value.price
        
    })
    
    console.log(j)
}

suma(cars)

// =======================================================================================================================================
// =======================================================================================================================================

// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

// Пример:
let arrW = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.





function firstAndLastIndex (arrW, chislo) {
    let findIndex = arrW.findIndex(value => value === chislo )
    let findIndexLast = arrW.lastIndexOf(chislo)
    let answer = {}
    answer.MinIndex = findIndex
    answer.MaxIndex = findIndexLast
    return answer
}

console.log(firstAndLastIndex(arrW, 3))










