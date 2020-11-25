// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// let myInput = document.getElementById('myInput')
// myInput.value = localStorage.getItem('txt')

// myInput.oninput = ev => {
//     localStorage.setItem('txt', ev.target.value)

    
// }



// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.
// const myForm1 = document.getElementById('myForm1')
// pokaz(myForm1)
// myForm1.oninput = () => {
//     privet(myForm1)
// }
// function privet(tag) {
//     for (let i = 0; i < tag.length; i++ ) {
//         tagElement = tag[i]
//         if(tagElement.type === 'checkbox' || tagElement.type === 'radio'){
//             tagElement.checked ? tagElement.value = true: tagElement.value = false
//         }
//         localStorage.setItem(tagElement.id, tagElement.value)    
        
//     }
// }
// function pokaz(tag) {
//     for(let i = 0; i < tag.length; i++){
//         tag[i].value = localStorage.getItem(tag[i].id)
//         if(localStorage.getItem(tag[i].id) === 'true') {
//             tag[i].setAttribute('checked', 'checked')
//         }       

//     }
// }


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).


// function storyTask(){

//     const myForm2 = document.getElementById('myForm2')
//     const myBtnLeft = document.getElementById('myBtnLeft')
//     const myBtnRight = document.getElementById('myBtnRight')
//     const myInput2 = document.getElementById('myInput2')
//     const myBtnSave = document.getElementById('myBtnSave')

//     let i = 0;
//     let j = null
//     if(localStorage.getItem(`activeI`) !== null){
//         i = localStorage.getItem(`activeI`)
//         j = localStorage.getItem(`maxI`)
//         console.log(i)
//     }

//     myInput2.oninput = () => {
//         myBtnSave.onclick = ev => {
//             if(j > i){
//                 for(let cleaner = i+1; cleaner <= j; cleaner++){
//                     localStorage.removeItem(`${cleaner}`)
//                 }
//             }
//             i++ 
//             j = i
//             localStorage.setItem(`${i}`, document.forms.myForm2.myInput2.value)
//             localStorage.setItem(`activeI`, `${i}`)
//             localStorage.setItem(`maxI`, `${j}`)

//         }
//     }
//     myBtnLeft.onclick = ev => {
//         i--
//         if(i < 1){
//             myBtnLeft.style.visibility = 'hidden'
//             document.forms.myForm2.myInput2.value = ''
//             return
//         }
//         myBtnRight.style.visibility = 'visible'

//         document.forms.myForm2.myInput2.value = localStorage.getItem(`${i}`)
//         localStorage.setItem(`activeI`, `${i}`)

//     }
//     myBtnRight.onclick = ev => {
//         i++
//         if(i > j){
//             myBtnRight.style.visibility = 'hidden'
//             document.forms.myForm2.myInput2.value = ''
//             return
//         }
//         myBtnLeft.style.visibility = 'visible'

//         document.forms.myForm2.myInput2.value = localStorage.getItem(`${i}`)
//         localStorage.setItem(`activeI`, `${i}`)

//     }
//     console.log(localStorage.getItem(`txt`))

// }
// storyTask()









// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

// function book(){

// const myForm3 = document.getElementById('myForm3')
// const userId = document.getElementById('userId')
// const fio = document.getElementById('fio')
// const nunberPhone = document.getElementById('nunberPhone')
// const post = document.getElementById('post')
// const firma = document.getElementById('firma')
// const department = document.getElementById('department')
// const birthDay = document.getElementById('birthDay')
// const saveUser = document.getElementById('saveUser')
// const deliter = document.getElementById('deliter')


// class BookWithUsers{
//     constructor(fio, nunberPhone, post, firma, department, birthDay){
//         this.fio = fio;               
//         this.nunberPhone = nunberPhone;                   
//         this.post = post;               
//         this.firma = firma;               
//         this.department = department;               
//         this.birthDay = birthDay;               
//     }
// }


  
// saveUser.onclick = ev => {
//     let user = new BookWithUsers(document.forms.myForm3.fio.value, document.forms.myForm3.nunberPhone.value, document.forms.myForm3.post.value, document.forms.myForm3.firma.value, document.forms.myForm3.department.value, document.forms.myForm3.birthDay.value)
//     console.log(user)
//     localStorage.setItem(document.forms.myForm3.userId.value, JSON.stringify(user))


// }
// deliter.onclick = ev => {
//     ev.stopPropagation()
//     localStorage.removeItem(document.forms.myForm3.userId.value)
// }
// }
// book()








