// // --створити масив та вивести його в консоль:

// // - з 5 числових значень

// let mas = [1,2,3,4,5];
// console.log(mas);





// // - з 5 стічкових значень

// let mas = ["1","2","3","4","5"];
// console.log(mas);





// // - з 5 значень стрічкового, числового та булевого типу

// let mas = ["1",2,true,"4",5];
// console.log(mas);



                                                // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль





// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині



// let mas =[];
// for(i = 0; i < 10;i++){
//     mas[i] = i+1;
// }
// document.write(mas);
// console.log(mas);





// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// let mas =[];
// for(i = 0; i < 10;i++){
//     document.write("<div>Valar morhulis</div>")
// }




// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

    // let mas =[];
    // let i =0;
    // while(i < 10){
    //     document.write("<h1>Valar morhulis</h1>")
    //     i++;   
    // }




// // - За допомогою циклу while вивести в дов консоль всі його елементи в циклі.
// let mas = ['2', "25", "6", "65", "78", "84", "7", "9", "32", 'pivo'];
// let i =0;
// while(i < 10){
//     console.log(i)
//     i++;   
// }






// - Створити масив з 10 строкрових елементів. Вивекумент 20 блоків h1 c довільним текстом і індексом всередині.

// let mas = ['2', "25", "6", "65", "78", "84", "7", "9", "32", 'pivo'];
// let i =0;
// while(i < 10){
//     document.write(`<h1>Valar morhulis ${mas[i]} </h1>`);
//     document.write(`<h1>Valar morhulis ${mas[i]} </h1>`);
//     i++;   
// }





// - Створити масив з 10 числових елементів. Вивести сти в консоль всі його елементи в циклі.

// let mas2= [];
// let mas = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// let i =0;
// while(i < mas.length){
//     mas2.push(mas[i]);
//     console.log(mas2);
//     i++;   
// }








// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let mas = ['2', "25", "6", "65", "78", "84", "7", "9", "32", 'pivo'];
// let mas2= [];
// let i =0;
// while(i < mas.length){
//     mas2.push(mas[i]);
//     console.log(mas2);
//     i++;   
// }








// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let mas = ['2', 25, 6, true, false, "84", false, "9", false, 'pivo'];
// let i = 0;
// while(i < mas.length)
// {
    
//    if(typeof(mas[i]) == "boolean"){
//        console.log(mas[i]);
//        i++;
//    }else
//    i++
// }







// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let mas = ['2', 25, 6, 99, false, "84", false, "9", false, 'pivo'];
// let i = 0;
// while(i < mas.length)
// {
    
//    if(typeof(mas[i]) == "number"){
//        console.log(mas[i]);
//        i++;
//    }else
//    i++
// }







// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let mas = ['2', 25, 6, 99, false, "84", false, "9", false, 'pivo'];
// let i = 0;
// while(i < mas.length)
// {
    
//    if(typeof(mas[i]) == "string"){
//        console.log(mas[i]);
//        i++;
//    }else
//    i++
// }






// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let mas = [];
// mas[0] = 565;
// mas[1] = "privet";
// mas[2] = 999;
// mas[3] = true;
// mas[4] = undefined;
// mas[5] = "що ти хочеш?!!!";
// mas[6] = 58;
// mas[7] = 43858;
// mas[8] = "111"
// mas[9] = false; 
// for(i = 0; i < mas.length; i++){
//     console.log(mas[i]);
// }




// // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for(i = 0; i < 10; i++){
//     document.write(i + "<br>");
//     console.log(i);
// }




// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(i = 0; i < 100; i++){
//     document.write(i + "<br>");
//     console.log(i);
// }






// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for(i = 0; i < 100; i+=2){
//     document.write(i + "<br>");
//     console.log(i);
// }






// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for(i = 2; i < 100; i+=2){
//     document.write(i + "<br>");
//     console.log(i);
// }




// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for(i = 1; i < 100; i+=2){
//     document.write(i + "<br>");
//     console.log(i);
// }





// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)


// let i = 0;
// let j = 1;
// while(i <= 2){
//     if(i < 2){
//         while(j < 60){
            
//             console.log(i + "хв  " + j + "сек")
//             j++;
//         }
//     }else if(i === 2) {
//         j = 0;
//         console.log(i + "хв  " + j + "сек")
//     }
//     i++;
//     j = 0;
// }







// // - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// for(i = 0; i < 2; i++){
//     for(j = 0; j <= 20; j ++){
//         if(j < 20){
//             for(k = 0; k < 60; k++){
//                 console.log(i + "год " + j + "хв  " + k + "сек");
//         }
        
//         }else if( j === 20) {
            
//             k = 0;
//             console.log(i + "год " + j + "хв  " + k + "сек");
//         }
        
//     }
// }







// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let mas = [ 'a', 'b', 'c'];
// let word = "";
// for(i = 0; i <  mas.length; i++){
//     word = word + mas[i];  
// }
// console.log(word)






// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let mas = [ 'a', 'b', 'c'];
// let word = "";
// let i = 0;
// while(i <  mas.length) {
//     word = word + mas[i];   
//     i++;
// }
// console.log(word);







// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.


// let mas = [ 'a', 'b', 'c'];
// let word = "";
// for(const i of mas){
//     word = word + i;
    
// }
// console.log(word)








// =================
// =================
// =================
// =================

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.


// ============

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:



// 1. перебрати його циклом while
//let mas = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while(i < mas.length){
//     console.log(mas[i]);
//     i++;
// }
//                                       Не зрозумів що конкретно мається на увазі під словом перебрати, тому вивів у консоль.


// 2. перебрати його циклом for
//let mas = [2,17,13,6,22,31,45,66,100,-18];

// for(let i = 0; i < mas.length; i++){
//     console.log(mas[i])
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
//let mas = [2,17,13,6,22,31,45,66,100,-18];
// let i = 1;
// while(i < mas.length){
//     console.log(mas[i]);
//     i+= 2;
// }


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//let mas = [2,17,13,6,22,31,45,66,100,-18];
// for(let i = 1; i < mas.length; i+=2){
//     console.log(mas[i])
// }



// 5. перебрати циклом while та вивести  числа тільки парні  значення
//let mas = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while(i < mas.length){

//     if(mas[i] % 2 == 0){
//         console.log(mas[i]);
//     }
//     i++;
// }




// 6. перебрати циклом for та вивести  числа тільки парні  значення
//let mas = [2,17,13,6,22,31,45,66,100,-18];
// for(let i = 0; i < mas.length; i++){
//     if(mas[i] % 2 == 0){
//         console.log(mas[i]);
//     }
// }



// 7. замінити кожне число кратне 3 на слово "okten"
//let mas = [2,17,13,6,22,31,45,66,100,-18];
// for(let i = 0; i < mas.length; i++){
//     if(mas[i] % 3 == 0){
//         mas[i] = "okten";
//     }
// }
// console.log(mas);




// 8. вивести масив в зворотньому порядку.
//let mas = [2,17,13,6,22,31,45,66,100,-18];
// for(let i = mas.length - 1;i >= 0 && i < mas.length; i--){
//     console.log(mas[i]);
// }





// // 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// // 7. замінити кожне число кратне 3 на слово "okten"
// let mas = [2,17,13,6,22,31,45,66,100,-18];
// {
// for(let i = mas.length - 1; i >= 0 && i < mas.length; i--){
//     if(mas[i] % 3 == 0){
//         mas[i] = "okten";
//     }
// }
// console.log(mas);

// }


// // 6. перебрати циклом for та вивести  числа тільки парні  значення

// {
//     for(let i = mas.length - 1; i >= 0 && i < mas.length; i--){
//     if(mas[i] % 2 == 0){
//         console.log(mas[i]);
//     }
// }
// }


// // 5. перебрати циклом while та вивести  числа тільки парні  значення

// {
//     let i = mas.length - 1;
// while(i >= 0 && i < mas.length){

//     if(mas[i] % 2 == 0){
//         console.log(mas[i]);
//     }
//     i--;
// }


// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// }
// for(let i = mas.length - 1; i >= 0 && i < mas.length; i-=2){
//     console.log(mas[i])
// }

// // 3. перебрати циклом while та вивести  числа тільки з непарним індексом

// {
//     let i;
// if(mas.length % 2 === 0){
//     i = mas.length - 1;   
// }else{
//     i = mas.length - 2;   
    
// }

// while(i >= 1 && i < mas.length){
//     console.log(mas[i]);
//     i-= 2;
// }
// }



// // 2. перебрати його циклом for

// {
//     for(let i = mas.length - 1; i >= 0 && i < mas.length; i--){
//         console.log(mas[i])
//     }
// }


// // 1. перебрати його циклом while

// {
//     let i = mas.length - 1;
// while(i >= 0 && i < mas.length){
//     console.log(mas[i]);
//     i--;
// }
// }



// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.



// let mas = [];
// for(let i = 0; mas.length < 50; i++){
//     // debugger
//     let r = parseInt(Math.random()*(560 - 2) + 2);
//     if(r % 2 === 0){
//         mas.push(r);
//     }
// } console.log(mas)

// - заповнити його 50 непарними числами за допомоги циклу.


// let mas = [];
// for(let i = 0; mas.length < 50; i++){
//     // debugger
//     let r = parseInt(Math.random()*(560 - 2) + 2);
//     if(r % 2 === 1){
//         mas.push(r);
//     }
// } console.log(mas)


// 1
//  створити пустий масив та :
// 1. заповнити його 50 парними числами за допомоги циклу.
// 2. заповнити його 50 непарними числами за допомоги циклу.
// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)


// let mas = [];
// for(let i = 0; mas.length < 75; i++){
//     // debugger
//     let r = parseInt(Math.random() * (732 - 8) +8);
//     mas.push(r);

// } console.log(mas)




//  2. вывести на консоль  каждый третий елемент
// let mas = [];
// for(let i = 0; mas.length < 25; i++){
//     // debugger
//     let r = parseInt(Math.random() * (732 - 8) +8);
//     mas.push(r);

// }
// for(let i = 0; i < mas.length; i +=3){
//     console.log(mas[i])
// }




//  3. вывести на консоль  каждый третий елемент
//  но при условии что его значение является парным.

// let mas = [];
// for(let i = 0; mas.length < 25; i++){
//     // debugger
//     let r = parseInt(Math.random() * (732 - 8) +8);
//     mas.push(r);

// }
// for(let i = 0; i < mas.length; i +=3){
//     if(mas[i]  % 2 === 0){
//         console.log(mas[i])
//     }
    
// }


//  4. вывести на консоль  каждый третий елемент
//  но при условии что он имеет парное значение и
//  записать их в другой массив.

// let mas = [];
// for(let i = 0; mas.length < 25; i++){
//     // debugger
//     let r = parseInt(Math.random() * (732 - 8) +8);
//     mas.push(r);

// }
// let mas2 = [];
// for(let i = 0; i < mas.length; i +=3){
//     if(mas[i]  % 2 === 0){
//         mas2.push(mas[i]);
//     }
    
// }
// console.log(mas2)

//  5. Вывести каждый елемент массива у которого соседний с права элемент - парный
// let mas = [];
// for(let i = 0; mas.length < 25; i++){
//     // debugger
//     let r = parseInt(Math.random() * (732 - 8) +8);
//     mas.push(r);

// }
// for(let i = 0; i < mas.length; i +=3){
//     if(mas[i]  % 2 === 0 && i !== 0){
//         console.log(mas[i - 1])
//     }else if(i === 0){
//         console.log(mas[i])

//     }
    
// }

//   5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.

// let check = [100,250,50,168,120,345,188];
// let sum = 0;
// for(i of check){
//     sum += i;
// }
// console.log(sum)

// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let mas = [];
// let mas2 = [];
// for(let i = 0; mas.length < 25; i++){
//     // debugger
//     let r = parseInt(Math.random() * (732 - 8) +8);
//     mas.push(r);
//     mas2.push(r * 5)

// }
// console.log(mas);
// console.log(mas2);


// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
//  додати його в інший масив.


// let mas = [35, 87, "bjhcsbak", "qwerty", true, false, undefined, 7821, "321456"];
// let mas2 = [];
// for(i of mas){
//     if(typeof i === "number"){
//         mas2.push(i);
//     }
// }

// console.log(mas2);