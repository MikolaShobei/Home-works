{
// function wakeUp(hour, cb){
//     console.log(`Відкриваєш очі..`)
//     console.log(`Дивишся на годинник, а там ${hour}`)
//     setTimeout( () =>{
//         if(hour > 7){
//             cb(false)
//         } else {
//             cb(true)
//         }
//     }, 500)
    
// }
// function washing(state, cb){
//     console.log(`Підходиш до раковини і включаю воду`)
//     setTimeout( () =>{
//         if(!state){
//             cb(false)
//         } else {
//             cb(true)
//         }
//     }, 500)
// }
// function eat(state, cb){
//     console.log(`Відкривєш холодильник`)
//     setTimeout( () =>{
//         if(!state){
//             cb(false)
//         } else {
//             cb(true)
//         }
//     }, 1000)
// }
// function goToPari(color, cb){
//     console.log('Збираєшся на пари. Підхожу до світлофора')
//     console.log(`Переходиш на ${color}`)
//     setTimeout( () =>{
//         if(color !== 'зелений'){
//             cb('тебе короче збила машина НАСМЕРТЬ', null)
//         } else {
//             cb(null, 'ти досі живий (хоч не факт чи на довго)')
//         }
//     }, 1500)
// }
// function isExam(dete, munthNomber, cb){
//     console.log('Прийшоа в універ, питаєшся в одногрупника що й до чого...')
    
//     setTimeout(() => {
//         if(dete > 31 || dete <= 0 || munthNomber > 12 || munthNomber <= 0){
//             console.log('Не страдай фігньою, а подивись в календар і скажи яка дата сьогодні')
//             return
//         }
//         if(dete >= 21 && (munthNomber == 12 || munthNomber == 6)){
//             cb('якщо ти не в курсі, в тебе сьогодні екзамен, а ти нічого не вчив і взагалі не пойми нащо прийшов')
//         }else{
//             cb(null, 'в тебе скоро екзамени. Ще маєш час вивчити')
//         }
//     }, 2000)
// }
// function goHome(quantity, cb){
//     console.log('Ти вертаєшся з пар повз стройку і тут ти чуєш шум згори, піднімаєш бошку, а там якийсь молдаванин лишив розсипані цвяхи на піддоні який зараз катається на стрілі. І та вся хріновини градом летить тобі на голову')
//     setTimeout(() => {
//         if(quantity > 150){
//             cb('Але не вимахуйся, їх забагато!! Ти вмер майже одразу. Звісно в тебе лишився шанс на реінкарнацію, але щось нічого ярче "сусліка" тобі не світить')
//         }else{
//             cb(null, 'І ти виходиш з під бомбардування наче нічого й не було')
//         }
//     }, 1500)
// }
// function night(quantity, cb){
//     console.log('Ти вже лягаєш спати, але в туркменів в сусідній кімнаті двіжуха. Першим ділом ти перевіряєш скільки їх там')
//     setTimeout(() => {
//         if(quantity > 10){
//             cb('Ну нафіг Вася, їх забагато!! Йди пацанів збирай бо сьогодні спати не будеш')
//         }else{
//             cb(null, 'В принципі...,  монтіровка в помощь і ти їх порозгпняєш')
//         }
//     }, 2500)
// }


// wakeUp(6, (result) => {
//     if(!result){
//         console.log("Всьо фігня! Давай по новій!!! Ти проспав, завтра став десять будильників")
//         return
//     }
//     console.log('Нормально, не проспав. Можна йти мити фізію')       
//     washing(true, (haveWater) => {
//         if(!haveWater){
//             console.log('Ага! Розігнався, трубу прорвало, води не буде')
//             return
//         }
//         console.log('Вода є, фізію помили можна і поїсти')
//         eat(true, haveSomeFood =>{
//             if(!haveSomeFood){
//                 console.log('Ага! Розігнався, ти студент, звідки в тебе продуктам взятись?!!!')
//                 return
//             }
//             console.log('Ну.. впринципі вчорашня мівінка теж піде')
//             goToPari('зелений', (deth, life) => {
//                 if(deth){
//                     console.log('Мої вітання ', deth)
//                     return
//                 }
//                 console.log('Мої вітання ', life)
//                 isExam(2, 12, (err, norm) =>{
//                     if(err){
//                         console.log('А він тобі --- ', err)
//                         return
//                     }
//                     console.log('А він тобі --- ', norm)
//                     goHome(20, (err, life) => {
//                         if(err){
//                             console.log('В тебе включається режим "Нео із матриці" і ти увертаєшся від всіх як в мультіку. ', err)
//                             return
//                         }
//                         console.log('В тебе включається режим "Нео із матриці" і ти увертаєшся від всіх як в мультіку. ', life)
//                         night(10, (err, norm) => {
//                             if(err){
//                                 console.log(err)
//                                 return
//                             }
//                             console.log(norm)
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })
}

{
// function wakeUp(hour){
//     return new Promise((resolve, reject) => {
//         console.log(`Відкриваєш очі..`)
//         console.log(`Дивишся на годинник, а там ${hour}`)
//         setTimeout( () =>{
//             if(hour > 7){
//                 reject("Всьо фігня! Давай по новій!!! Ти проспав, завтра став десять будильників")
//             } else {
//                 resolve(true)
//             }
//         }, 500)
//     })
    
    
// }
// function washing(state){
// return new Promise((resolve, reject) => {
//     console.log(`Підходиш до раковини і включаю воду`)
//     setTimeout( () =>{
//         if(!state){
//             reject('Ага! Розігнався, трубу прорвало, води не буде')
//         } else {
//             resolve(true)
//         }
//     }, 500)
// })

// }
// function eat(state){
//     return new Promise((resolve, reject) => {
//         console.log(`Відкривєш холодильник`)
//         setTimeout( () =>{
//             if(!state){
//                 reject('Ага! Розігнався, ти студент, звідки в тебе продуктам взятись?!!!')
//             } else {
//                 resolve(true)
//             }
//         }, 1000)
//     })
// }
// function goToPari(color){
//     return new Promise((resolve, reject) => {
//         console.log('Збираєшся на пари. Підхожу до світлофора')
//         console.log(`Переходиш на ${color}`)
//         setTimeout( () =>{
//             if(color !== 'зелений'){
//                 reject('Мої вітання, тебе короче збила машина НАСМЕРТЬ')
//             } else {
//                 resolve('ти досі живий (хоч не факт чи на довго)')
//             }
//         }, 1500)
//     })
// }
// function isExam(dete, munthNomber){
//     return new Promise((resolve, reject) => {
//         console.log('Прийшоа в універ, питаєшся в одногрупника що й до чого...')
//         setTimeout(() => {
//             if(dete > 31 || dete <= 0 || munthNomber > 12 || munthNomber <= 0){
//                 console.log('Не страдай фігньою, а подивись в календар і скажи яка дата сьогодні')
//                 return
//             }
//             if(dete >= 21 && (munthNomber == 12 || munthNomber == 6)){
//                 reject('якщо ти не в курсі, в тебе сьогодні екзамен, а ти нічого не вчив і взагалі не пойми нащо прийшов')
//             }else{
//                 resolve('в тебе скоро екзамени. Ще маєш час вивчити')
//             }
//         }, 2000)
//     })
// }
// function goHome(quantity){
//     return new Promise((resolve, reject) => {
//         console.log('Ти вертаєшся з пар повз стройку і тут ти чуєш шум згори, піднімаєш бошку, а там якийсь молдаванин лишив розсипані цвяхи на піддоні який зараз катається на стрілі. І та вся хріновини градом летить тобі на голову')
//         setTimeout(() => {
//             if(quantity > 150){
//                 reject('Але не вимахуйся, їх забагато!! Ти вмер майже одразу. Звісно в тебе лишився шанс на реінкарнацію, але щось нічого ярче "сусліка" тобі не світить')
//             }else{
//                 resolve('І ти виходиш з під бомбардування наче нічого й не було')
//             }
//         }, 1500)
//     })
// }
// function night(quantity){
//     return new Promise((resolve, reject) => {
//         console.log('Ти вже лягаєш спати, але в туркменів в сусідній кімнаті двіжуха. Першим ділом ти перевіряєш скільки їх там')
//         setTimeout(() => {
//             if(quantity > 10){
//                 reject('Ну нафіг Вася, їх забагато!! Йди пацанів збирай бо сьогодні спати не будеш')
//             }else{
//                 resolve('В принципі...,  монтіровка в помощь і ти їх порозгпняєш')
//             }
//         }, 2500)
//     })
// }

// wakeUp(6)
// .then(value => {
//     console.log('Нормально, не проспав. Можна йти мити фізію')
//     return washing(true)
// })
// .then(value => {
//     console.log('Вода є, фізію помили можна і поїсти')
//     return eat(true)
// })
// .then(value => {
//     console.log('Ну.. впринципі вчорашня мівінка теж піде')
//     return goToPari('зелений')
// })
// .then(value => {
//     console.log('Мої вітання ', value)
//     return  isExam(12, 12)
// })
// .then(norm => {
//     console.log('А він тобі --- ', norm)
//     return goHome(20)
// })
// .then(value => {
//     console.log('В тебе включається режим "Нео із матриці" і ти увертаєшся від всіх як в мультіку. ', value)
//     return  night(10)
// })
// .then(value => {
//     console.log(value)
// })
// .catch(reason => {
//     console.log(reason)
// })
}

{
    
// function wakeUp(hour){
//     return new Promise((resolve, reject) => {
//         console.log(`Відкриваєш очі..`)
//         console.log(`Дивишся на годинник, а там ${hour}`)
//         setTimeout( () =>{
//             if(hour > 7){
//                 reject("Всьо фігня! Давай по новій!!! Ти проспав, завтра став десять будильників")
//             } else {
//                 resolve('Нормально, не проспав. Можна йти мити фізію')
//             }
//         }, 500)
//     })
    
    
// }
// function washing(state){
// return new Promise((resolve, reject) => {
//     console.log(`Підходиш до раковини і включаю воду`)
//     setTimeout( () =>{
//         if(!state){
//             reject('Ага! Розігнався, трубу прорвало, води не буде')
//         } else {
//             resolve('Вода є, фізію помили можна і поїсти')
//         }
//     }, 500)
// })

// }
// function eat(state){
//     return new Promise((resolve, reject) => {
//         console.log(`Відкривєш холодильник`)
//         setTimeout( () =>{
//             if(!state){
//                 reject('Ага! Розігнався, ти студент, звідки в тебе продуктам взятись?!!!')
//             } else {
//                 resolve('Ну.. впринципі вчорашня мівінка теж піде')
//             }
//         }, 1000)
//     })
// }
// function goToPari(color){
//     return new Promise((resolve, reject) => {
//         console.log('Збираєшся на пари. Підхожу до світлофора')
//         console.log(`Переходиш на ${color}`)
//         setTimeout( () =>{
//             if(color !== 'зелений'){
//                 reject('Мої вітання, тебе короче збила машина НАСМЕРТЬ')
//             } else {
//                 resolve('ти досі живий (хоч не факт чи на довго)')
//             }
//         }, 1500)
//     })
// }
// function isExam(dete, munthNomber){
//     return new Promise((resolve, reject) => {
//         console.log('Прийшоа в універ, питаєшся в одногрупника що й до чого...')
//         setTimeout(() => {
//             if(dete > 31 || dete <= 0 || munthNomber > 12 || munthNomber <= 0){
//                 console.log('Не страдай фігньою, а подивись в календар і скажи яка дата сьогодні')
//                 return
//             }
//             if(dete >= 21 && (munthNomber == 12 || munthNomber == 6)){
//                 reject('якщо ти не в курсі, в тебе сьогодні екзамен, а ти нічого не вчив і взагалі не пойми нащо прийшов')
//             }else{
//                 resolve('в тебе скоро екзамени. Ще маєш час вивчити')
//             }
//         }, 2000)
//     })
// }
// function goHome(quantity){
//     return new Promise((resolve, reject) => {
//         console.log('Ти вертаєшся з пар повз стройку і тут ти чуєш шум згори, піднімаєш бошку, а там якийсь молдаванин лишив розсипані цвяхи на піддоні який зараз катається на стрілі. І та вся хріновини градом летить тобі на голову')
//         setTimeout(() => {
//             if(quantity > 150){
//                 reject('Але не вимахуйся, їх забагато!! Ти вмер майже одразу. Звісно в тебе лишився шанс на реінкарнацію, але щось нічого ярче "сусліка" тобі не світить')
//             }else{
//                 resolve('І ти виходиш з під бомбардування наче нічого й не було')
//             }
//         }, 1500)
//     })
// }
// function night(quantity){
//     return new Promise((resolve, reject) => {
//         console.log('Ти вже лягаєш спати, але в туркменів в сусідній кімнаті двіжуха. Першим ділом ти перевіряєш скільки їх там')
//         setTimeout(() => {
//             if(quantity > 10){
//                 reject('Ну нафіг Вася, їх забагато!! Йди пацанів збирай бо сьогодні спати не будеш')
//             }else{
//                 resolve('В принципі...,  монтіровка в помощь і ти їх порозгпняєш')
//             }
//         }, 2500)
//     })
// }



// async function myDay(){
//     try{
        
//     const wake = await wakeUp(6)
//     console.log(wake)
//     const washin = await washing(true)
//     console.log(washin)
//     const ea = await eat(true)
//     console.log(ea)
//     const goToPar = await goToPari('зелений')
//     console.log(goToPar)
//     const isExa = await isExam(12, 12)
//     console.log(isExa)
//     const goHom = await goHome(20)
//     console.log(goHom)
//     const nigh = await night(5)
//     console.log(nigh)
//     } catch(err){
//         console.log('+++++++++++++++++++++++++++++++++++++++')
//         console.log(err)
//         console.log('+++++++++++++++++++++++++++++++++++++++')
//     }
// }
// myDay()
}






function q (word){
    function printer(elem){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(elem)
            }, (Math.trunc(Math.random() * (10 - 0) + 0)) * 100) 
        })
    }
    let i = 0
    async function a() {
        if(i === word.length)return
        const el = await printer(word[i])
        document.write(el)
        document.write('<br>')
        i++
        a()
    }
    a()
}
q('Miyagi & Эндшпиль feat Симптом - Люби меня (Lyric Video) | YouTube Exclusive')


