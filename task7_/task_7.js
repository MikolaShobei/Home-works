// // - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let text = document.querySelector('#text')

// console.log(text)
// const btn1 = document.createElement('button');
// btn1.innerText = 'REMOVE!';
// document.body.appendChild(btn1)
// btn1.onclick = (ev) => {
//     text.style.display = 'none'
//     console.log('REMOVE');
//     ev.stopPropagation();
// }
// // - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// const btn2 = document.createElement('button');
// btn2.innerText = 'REMOVE!';
// document.body.appendChild(btn2)
// btn2.onclick = (ev) => {
//     ev.target.style.display = 'none'
//     console.log('REMOVE');
//     ev.stopPropagation();
// }
// // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
 
// document.forms.myForm1.someText.oninput = () => {
//     let txt = document.forms.myForm1.someText.value;
    
//     document.forms.myForm1.submit.onclick = (ev) => {
//         ev.stopPropagation();
//         if (txt < 18){
//         alert("Підрости ще трохи!!!!!")
//         return
//         }
        
    
//     }
    
// }

// // - Создайте меню, которое раскрывается/сворачивается при клике

// const menu = document.getElementById('a1')
// const menuList = document.getElementById('list')
// let flag = false
// a1.onclick = ev => {
//     if(flag) {
//     menuList.style.display = 'bLock' 
//     flag = false 
//     } else{
//         menuList.style.display = 'none' 
//         flag = true
//     }

// }




// // - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// // Вывести список комментариев в документ, каждый в своем блоке.
// //  Добавьте каждому комментарию по кнопке для сворачивания его body.


// let coments = [
//     {
//         title : 'Первое правило Бойцовского клуба',
//         body : 'Никому не рассказывать о Бойцовском клубе'
//     },
//     {
//         title : 'Второе правило Бойцовского клуба',
//         body : 'Никогда никому не рассказывать о Бойцовском клубе'
//     },
//     {
//         title : 'Tретье правило Бойцовского клуба',
//         body : 'В схватке участвуют только двое.'
//     },
//     {
//         title : 'Четвертое правило Бойцовского клуба.',
//         body : 'Не более одного поединка за один раз'
//     },
//     {
//         title : 'Пятое правило Бойцовского клуба.',
//         body : 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title : 'Шестое правило Бойцовского клуба.',
//         body : 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title : 'Седьмое правило Бойцовского клуба.',
//         body : 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок oкончен'
//     },
//     {
//         title : 'Восьмое и последнее правило Бойцовского клуба.',
//         body : 'Новичок обязан принять бой.'
//     }
// ]


// coments.forEach (element => {
//     let div = document.createElement('div')
//     div.style.padding = '10px'
//     let a = document.createElement('a')
//     let p = document.createElement('p')
//     a.innerText = element.title
//     p.innerText = element.body
//     let btn0 = document.createElement('button')
//     btn0.innerText = 'Приховати'
//     let flag = false
//     btn0.onclick = ev => {
//         if(flag){
//             p.style.display = 'block'
//             flag = false
//             btn0.innerText = 'Приховати'

//         }else{
//             p.style.display = 'none'
//             flag = true
//             btn0.innerText = 'Показати'

//         }
//     }
    

//     document.body.appendChild(div)
//     div.appendChild(a)
//     div.appendChild(p)
//     a.appendChild(btn0)
    
//     console.log(element.title)

// })





// // - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// // Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


// // let myForm2 = document.getElementsByName("myForm2")
// // let myForm3 = document.getElementsByName("myForm3")


// const myBtn = document.getElementById('myBtn')
// const someText1 = document.getElementById('someText1')
// const someText2 = document.getElementById('someText2')
// const someText3 = document.getElementById('someText3')
// const someText4 = document.getElementById('someText4')

// myBtn.onclick = ev => {
//     ev.stopPropagation();
//     console.log(document.forms.myForm2.someText1.value)
//     console.log(document.forms.myForm2.someText2.value)
//     console.log(document.forms.myForm3.someText3.value)
//     console.log(document.forms.myForm3.someText4.value)
    
// }










// // - Створити функцію, яка генерує таблицю.
// // Перший аргумент визначає кількість строк.
// // Другий параметр визначає кліькіть ячеєк в кожній строці.
// // Третій параметр визначає елемент в який потрібно таблицю додати.
// function createTable (row, colum, element){
//     let div = document.createElement('div')
//     let table = document.createElement('table')
//     for (let i = 1; i <= row; i++){
//         let tr = document.createElement('tr')
        
//         for(let j = 1; j <= colum; j++){
//             let td = document.createElement('td')
//             let tdText = document.createTextNode("    колонка" + i + j)
//             td.style.height = "10px";
//             td.appendChild(tdText)
//             tr.appendChild(td)
//         }
//         table.appendChild(tr)
//     }
//     div.appendChild(table)

//     document.body.appendChild(div)
// }
// createTable(5,3, 'div')



// // - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// // При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додатковачастина для завдання)

// // - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let tatoo = ['Image/tatoo1.jpg', 'Image/tatoo2.jpg', 'Image/tatoo3.jpg', 'Image/tatoo4.jpg', 'Image/tatoo5.jpg', 'Image/tatoo6.jpg', 'Image/tatoo7.jpg', ]
// function karusel(arr) {

// let dinWithTatoo = document.createElement('div')
// let imgWithTatoo = document.createElement('img')
// let left = document.createElement('button')
// let right = document.createElement('button')

// imgWithTatoo.style.width = '300px'
// imgWithTatoo.style.height = '400px'
// left.innerText = '<---'
// right.innerText = '--->'
// let iter = 0
// imgWithTatoo.src = tatoo[iter]

// right.onclick = ev => {
//     ev.stopPropagation();
//     if (iter === tatoo.length - 1){
//         iter = 0
//         imgWithTatoo.src = tatoo[iter]
//         console.log(iter)
//         return
//     }
//     iter++
//     imgWithTatoo.src = tatoo[iter]
// }
// left.onclick = ev => {
//     ev.stopPropagation();
//     if (iter === 0){
//         iter = tatoo.length - 1
//         imgWithTatoo.src = tatoo[iter]
//         return

//     }
//     iter--
//     imgWithTatoo.src = tatoo[iter]

// }
// dinWithTatoo.appendChild(left)
// dinWithTatoo.appendChild(imgWithTatoo)
// dinWithTatoo.appendChild(right)
// document.body.appendChild(dinWithTatoo)
// }
// karusel(tatoo)





// // - Сворити масив не цензцрних слів.
// // Сворити інпут текстового типу.
// // Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// // кинути алерт з попередженням.
// // Перевірку робити при натисканні на кнопку
// let censura = ['блять', 'сука', 'хуй', 'пізда', 'заєбісь', 'йобаний', 'йобана', 'хуєта', 'пиздак', 'поєбень', 'недоєбок', 'пича', 'дрочь', 'піздотєнь', ]



// let myForm4 = document.getElementsByName('myForm4')
// let someText41 = document.getElementById('someText41')
// const myBtn4 = document.getElementById("myBtn4")
// console.log(myBtn4)
// myBtn4.onclick = ev => {
//     ev.stopPropagation()
//     let txt = document.forms.myForm4.someText41.value;
//     censura.forEach (element => {
//         if(txt === element){
//             alert("Не матюкайся пес!!!")
            
//         }
//     })


//     console.log(txt)

// }

// // - Сворити масив не цензцрних слів.
// // Сворити інпут текстового типу.
// // Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// // Кинути алерт з попередженням у випадку якщо містить.
// // Перевірку робити при натисканні на кнопку

// let myForm5 = document.getElementsByName('myForm5')
// let someText51 = document.getElementById('someText51')
// const myBtn5 = document.getElementById("myBtn5")
// console.log(myBtn5)
// myBtn5.onclick = ev => {
//     ev.stopPropagation()
//     let txt = document.forms.myForm5.someText51.value;
//     censura.forEach (element => {
//         if(txt.includes(element)){
//             alert("Не матюкайся пес!!!")
            
//         }
//     })


//     console.log(txt)

// }










// // -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// // При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// const arrH2 = document.getElementsByTagName('h2')
// const content = document.getElementById('content')
// const wrap = document.getElementById('wrap')
// const ul = document.createElement('ul')
// for(let i = 0; i < arrH2.length; i++){
//     const li = document.createElement('li')
//     const a = document.createElement('a')
//     let yakor = `yakor${i}`
//     a.href = '#' + yakor
//     arrH2[i].id = yakor
//     a.innerHTML = arrH2[i].innerText;
//     li.appendChild(a)
//     ul.appendChild(li)
// }
// content.appendChild(ul)
// content.style.width = '25%'
// wrap.style.width = '75%'
// content.style.float = 'left'
// wrap.style.float = 'left'



// console.log('sdfghjk')








// // -- взять массив пользователей
// let usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//             ];
// // Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// // 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// // 2й - оставляет старше 29 лет включительно
// // 3й - оставляет тех у кого город киев
// // Данные выводить в документ


// const bigBox = document.getElementById('bigBox')
// const myCheckboxes = document.getElementById('myCheckboxes')
// let bigDiv = document.createElement('div')


// const check1 = document.createElement('input')
// const check2 = document.createElement('input')
// const check3 = document.createElement('input')

// const btn5 = document.createElement('button')

// const lable1 = document.createElement('label')
// const lable2 = document.createElement('label')
// const lable3 = document.createElement('label')

// check1.type = 'checkbox'
// check2.type = 'checkbox'
// check3.type = 'checkbox'

// lable1.innerHTML = 'осталяет со статусом false'
// lable2.innerText = 'оставляет старше 29 лет включительно'
// lable3.innerText = 'оставляет тех у кого город киев'
// btn5.innerText = 'Sort'


// myCheckboxes.appendChild(lable1)
// myCheckboxes.appendChild(check1)
// myCheckboxes.appendChild(lable2)
// myCheckboxes.appendChild(check2)
// myCheckboxes.appendChild(lable3)
// myCheckboxes.appendChild(check3)
// myCheckboxes.appendChild(btn5)





// btn5.onclick = ev =>{
//     let newArr = JSON.parse(JSON.stringify(usersWithAddress))
//     if(check1.checked) newArr = newArr.filter(el => el.status === false)
//     if(check2.checked) newArr = newArr.filter(el => el.age >= 29)
//     if(check3.checked) newArr = newArr.filter(el => el.address.city === 'Kyiv')
//     bigDiv.innerHTML = ''
//     bigDiv.appendChild(myFucCheckboxes(newArr))
//     console.log(newArr)
//     ev.stopPropagation()
    
// }


// function myFucCheckboxes(mass){
//     const div = document.createElement('div')
//     mass.forEach(i => {
//         const littleDiv =  document.createElement('div')

//         littleDiv.innerHTML = JSON.stringify(i)
//         div.appendChild(littleDiv)
        
//     })
//     return div
    

// }

// bigBox.appendChild(bigDiv)
// bigBox.appendChild(myCheckboxes)
// document.body.appendChild(bigBox)


// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
