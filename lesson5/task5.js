

// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================



 {        
// function TegProperties (tagName, action, titleOfAttr1, actionOfAttr1, titleOfAttr2, actionOfAttr2, titleOfAttr3, actionOfAttr3){
     // this.tagName = tagName;
     // this.action = action;
     // this.titleOfAttr1 = titleOfAttr1;
     // this.actionOfAttr1 = actionOfAttr1;
     // this.titleOfAttr2 = titleOfAttr2;
     // this.actionOfAttr2 = actionOfAttr2;
     // this.titleOfAttr3 = titleOfAttr3;
     // this.actionOfAttr3 = actionOfAttr3;]

     // this.descriptionTeg () {
     //      // debugger
     //      this.object = {}
     //      this.object.tagName = tagName;
     //      this.object.action = action;
     //      this.object.attrs = [{titleOfAttr1: titleOfAttr1, actionOfAttr1: actionOfAttr1}, {titleOfAttr2: titleOfAttr2, actionOfAttr2: actionOfAttr2}, {titleOfAttr3: titleOfAttr3, actionOfAttr3: actionOfAttr3}]
     //      console.log(this.object)

     // }







// }
     
     // const t1 = new TegProperties("a", "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.", 
     // "accesskey",
     // "Активация ссылки с помощью комбинации клавиш", 
     // "href", 
     // "Задает адрес документа, на который следует перейти",   
     // "shape", 
     // "Задает форму активной области ссылки для изображений");



     // t1.descriptionTeg()
     
     
     // const t2 = new TegProperties("div", "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.", 
     // "accesskey", "Активация ссылки с помощью комбинации клавиш", 
     // "href", "Задает адрес документа, на который следует перейти",   
     // "shape", "Задает форму активной области ссылки для изображений");
     // t2.descriptionTeg()
     



     // const t3 = new TegProperties("h1", "HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня", 
     // "align", "Определяет выравнивание заголовка",);
     // t3.descriptionTeg()
     
     // const t4 = new TegProperties("span", "Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.",
     // "class", "Определяет имя класса, которое позволяет связать тег со стилевым оформлением", 
     // "dir", "Задает направление и отображение текста — слева направо или справа налево",);
     // t4.descriptionTeg()
     


     
     // const t5 = new TegProperties("input", "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.",
     // "accept", "Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов", 
     // "align", "Определяет выравнивание изображения",   
     // "form", "Связывает поле с формой по её идентификатору");
     // t5.descriptionTeg()

     
     // const t6 = new TegProperties("form", "Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером",
     // "accept-charset", "Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные", 
     // "action", "Адрес программы или документа, который обрабатывает данные формы",   
     // "method", "Метод протокола HTTP");
     // t6.descriptionTeg()



     // const t7 = new TegProperties("option", "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей",
     // "label", "Указание метки пункта списка", 
     // "disabled", "Заранее устанавливает определенный пункт списка выделенным",   
     // "value", "Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов");
     //  t7.descriptionTeg()


     // const t8 = new TegProperties("select", "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее",
     // "accesskey", "Позволяет перейти к списку с помощью некоторого сочетания клавиш", 
     // "autofocus", "Устанавливает, что список получает фокус после загрузки страницы",   
     // "form", "Связывает список с формой");
     //  t8.descriptionTeg()
}







// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================


{
// class TegProperties {
//                constructor (tagName, action, titleOfAttr1, actionOfAttr1, titleOfAttr2, actionOfAttr2, titleOfAttr3, actionOfAttr3){
//                this.tagName = tagName;
//                this.action = action;
//                this.titleOfAttr1 = titleOfAttr1;
//                this.actionOfAttr1 = actionOfAttr1;
//                this.titleOfAttr2 = titleOfAttr2;
//                this.actionOfAttr2 = actionOfAttr2;
//                this.titleOfAttr3 = titleOfAttr3;
//                this.actionOfAttr3 = actionOfAttr3;     
//                }

//                descriptionTeg () {
//                     this.object = {}
//                     this.object.tagName = this.tagName;
//                     this.object.action = this.action;
//                     this.object.attrs = [
//                          {titleOfAttr1: this.titleOfAttr1, actionOfAttr1: this.actionOfAttr1}, 
//                          {titleOfAttr2: this.titleOfAttr2, actionOfAttr2: this.actionOfAttr2}, 
//                          {titleOfAttr3: this.titleOfAttr3, actionOfAttr3: this.actionOfAttr3}]
//                     console.log(this.object)

//                }

//           }


//           const t1 = new TegProperties("a", "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.", 
//           "accesskey",
//           "Активация ссылки с помощью комбинации клавиш", 
//           "href", 
//           "Задает адрес документа, на который следует перейти",   
//           "shape", 
//           "Задает форму активной области ссылки для изображений");



//           t1.descriptionTeg()


//           const t2 = new TegProperties("div", "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.", 
//           "accesskey", "Активация ссылки с помощью комбинации клавиш", 
//           "href", "Задает адрес документа, на который следует перейти",   
//           "shape", "Задает форму активной области ссылки для изображений");
//           t2.descriptionTeg()




//           const t3 = new TegProperties("h1", "HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня", 
//           "align", "Определяет выравнивание заголовка",);
//           t3.descriptionTeg()

//           const t4 = new TegProperties("span", "Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.",
//           "class", "Определяет имя класса, которое позволяет связать тег со стилевым оформлением", 
//           "dir", "Задает направление и отображение текста — слева направо или справа налево",);
//           t4.descriptionTeg()




//           const t5 = new TegProperties("input", "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.",
//           "accept", "Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов", 
//           "align", "Определяет выравнивание изображения",   
//           "form", "Связывает поле с формой по её идентификатору");
//           t5.descriptionTeg()


//           const t6 = new TegProperties("form", "Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером",
//           "accept-charset", "Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные", 
//           "action", "Адрес программы или документа, который обрабатывает данные формы",   
//           "method", "Метод протокола HTTP");
//           t6.descriptionTeg()



//           const t7 = new TegProperties("option", "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей",
//           "label", "Указание метки пункта списка", 
//           "disabled", "Заранее устанавливает определенный пункт списка выделенным",   
//           "value", "Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов");
//           t7.descriptionTeg()


//           const t8 = new TegProperties("select", "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее",
//           "accesskey", "Позволяет перейти к списку с помощью некоторого сочетания клавиш", 
//           "autofocus", "Устанавливает, что список получает фокус после загрузки страницы",   
//           "form", "Связывает список с формой");
//           t8.descriptionTeg()


}







// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
{
// let car = {

//      model: "Model X",
//      manufacturer: "Tesla Motors",
//      year: 2013,
//      maxSpid:  270,
//      vMotor: "Battary",
//      drive:  ()  =>  console.log(`Їдемо зі швидкістю ${car.maxSpid} на годину`) ,
//      increaseMaxSpeed: (newSpeed) => car.maxSpid += newSpeed,
//      changeYear: (newValue) => car.year = newValue,
//      addDriver: (driver) => car.driver = driver

// }

// car.drive()


}


// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
{
//      function Car (model, manufacturer, year, maxSpid, vMotor = "Battary"){

//      this.model = model
//      this.manufacturer = manufacturer
//      this.year = year
//      this.maxSpid = maxSpid
//      this.vMotor = vMotor
//      this.drive =  function() { 
//      console.log(`Їдемо зі швидкістю ${this.maxSpid} на годину`)
// }
//      this.info = function() { 
//           console.log(this)
//      }
//      this.increaseMaxSpeed = function (newSpeed) {
//           this.maxSpid += newSpeed
//      }
//      this.changeYear = function (newValue) {
//           this.year = newValue
//      }
//      this.addDriver = function (driver)  { 
//           this.driver = driver
//      }
// }



// let tesla = new Car("Model X", "Tesla Motors", 2013, 270, 45)

// tesla.drive()
// tesla.info()
}
// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================


{// class Car {
//      constructor(model, manufacturer, year, maxSpid, vMotor){
//           this.model = model;
//           this.manufacturer = manufacturer;
//           this.year = year;
//           this.maxSpid = maxSpid;
//           this.vMotor = "Battary";
//      }
//      drive(){
//                console.log(`Їдемо зі швидкістю ${this.maxSpid} на годину`)
//      }
//      info(){
//           console.log(this)
//      }
//      increaseMaxSpeed (newSpeed) {
//           this.maxSpid += newSpeed
//      }
//      changeYear (newValue){
//           this.year = newValue
//      }
//      addDriver (driver){
//           this.driver = driver
//      }
// }
// let tesla = new Car("Model X", "Tesla Motors", 2013, 270)
// tesla.drive()
// console.log(tesla.info())
// console.log("====================================")
// tesla.increaseMaxSpeed(30)
// tesla.changeYear(2010)
// tesla.addDriver({name: "vasia", age: "23", isMarried: true})
// tesla.info()
}

// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================






{//class Person{
//      constructor(name, age, size){
//           this.name = name
//           this.age = age
//      }
     
// }

// class Cinderella extends Person{
//      constructor(name, age, size){
//           super(name, age)
//           this.size = size
//      }
     

// }

// class Prince extends Person{
//      constructor(name, age, shooseSize){
//           super(name, age)
//           this.shooseSize = shooseSize
//      }
//      deduction (mass) {
//           let naishov = null;
//           for(const i of mass){
//                if(this.shooseSize === i.size){
//                     naishov = 1
//                     console.log(`Попелюшка знайдена звати: ${i.name}, років: ${i.age}, розмір лапці: ${i.size}` )
//                     break
//                }
//           }
//           if (naishov !== 1){
//                console.log("Попелюки тут немає")
//           }
//      }

// }



// let cindr1 = new Cinderella("vita", 25, 25)
// let cindr2 = new Cinderella("vika", 23, 23)
// let cindr3 = new Cinderella("ania", 6, 6)
// let cindr4 = new Cinderella("marina", 21, 21)
// let cindr5 = new Cinderella("alina", 20, 20)
// let cindr6 = new Cinderella("nastia", 18, 18)
// let cindr7 = new Cinderella("katia", 19, 19)
// let cindr8 = new Cinderella("sofia", 19, 19)
// let cindr9 = new Cinderella("ivanka", 22, 22)
// let cindr10 = new Cinderella("zolushka", 16, 29.5)


// let cinderellaList = [cindr1 ,cindr2, cindr3, cindr4, cindr5, cindr6, cindr7, cindr8, cindr9, cindr10]


// let prince1 = new Prince ("Arthur", 23, 29.5)

// prince1.deduction(cinderellaList)
}

//  ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================





 {//function Cinderella (name, age, size){
//           this.name = name
//           this.age = age
//           this.size = size
//      }


// function Prince(name, age, shooseSize) {
//      this.name = name
//      this.age = age
//      this.shooseSize = shooseSize

//      this.deduction = function(mass) {
//           let naishov = null;
//           for(const i of mass){
//                if(this.shooseSize === i.size){
//                     naishov = 1
//                     console.log(`Попелюшка знайдена звати: ${i.name}, років: ${i.age}, розмір лапці: ${i.size}` )
//                     break
//                }
//           }
//           if (naishov !== 1){
//                console.log("Попелюки тут немає")
//           }
//      }

// }


// let cindr1 = new Cinderella("vita", 25, 25)
// let cindr2 = new Cinderella("vika", 23, 23)
// let cindr3 = new Cinderella("ania", 6, 6)
// let cindr4 = new Cinderella("marina", 21, 21)
// let cindr5 = new Cinderella("alina", 20, 20)
// let cindr6 = new Cinderella("nastia", 18, 18)
// let cindr7 = new Cinderella("katia", 19, 19)
// let cindr8 = new Cinderella("sofia", 19, 19)
// let cindr9 = new Cinderella("ivanka", 22, 22)
// let cindr10 = new Cinderella("zolushka", 16, 29.5)


// let cinderellaList = [cindr1 ,cindr2, cindr3, cindr4, cindr5, cindr6, cindr7, cindr8, cindr9, cindr10]


// let prince1 = new Prince ("Arthur", 23, 29.5)

// prince1.deduction(cinderellaList)
}

