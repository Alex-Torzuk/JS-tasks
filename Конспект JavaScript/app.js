//_______________Переменные________________
//let num = 123
//alert(num)

//Объявление переменных, а потом присваиваем им значение
//let a, b, c
//a = 5
//b = 6
//c = 8

// Изменеие значения переменных
//let a
//a = 3
//a = 5
//alert(a)

// ---------------2 Числа и операции над ними--------------
//let a = 1 + 2 + 3
//alert(a)
//alert(2 + 2 + 5)

/*let a = 10
let b = 5
let c = a - b
let d = 7
let result = c + d
alert(result)*/

//Дроби
/*let a = 1.5
let b = 0.75
alert(a + b)*/

/*let a = 10
let b = 3
alert(a ** b)*/

// ------------------3 Строки-------------------

//let str = 'abc' + 'def'
//alert(str)

//косые кавычки
//let str = `abc
//def`
//alert(str)

// -------------4 Числа--------------
/*let a = parseFloat('5.5px')
let b = parseFloat('6.25px')
let c = a + b
alert(c + 'px') */

//---------------Преобразование к строке---------------

/*let nam1 = 2
let nam2 = 3
alert((String(nam1)) + (String(nam2)))*/

/*let num = 123456
let num2 = 343314
alert((String(num).length) + (String(num2).length))*/

//alert(String(true) + 1)// true1

//let str = 'abcde'
//alert((str[4]) + (str[3]) + (str[2]) + (str[1]) + (str[0]))

//let str = 'abcde'
//let num = 4
//alert(str[num])

/*let str = 'abcde'
let last = str.length - 3
alert(str[last])*/

//let num = 12345
//let str = String(num)
//alert((str[4]) + (str[3]) + (str[2]) + (str[1]) + (str[0]))

/*let num = 3
num++
let num2 = num--
alert(num2)*/

//alert('Ваше имя:' + prompt('Ваше имя?'))

/*let nam1 = prompt('Введите первое число')
let nam2 = prompt('Введите второе число')
alert(Number(nam1) + Number(nam2))*/

// ___________Массивы___________

/*let arr = ['a', 'b', 'c', 'd']
arr[0] = 'a+'
arr[1] = 'b+'
arr[2] = 'c+'
alert(arr.join(''))*/
//console.log(arr[1])
//console.log(arr[2])

/*let num = [1, 2, 3]
alert((String(num[0])) + (String(num[1])) + (String(num[2])))*/

/*let num = [2, 5, 3, 9]
let num1 = num[0] * num[1]
let num2 = num[2] * num[3]
let result = num1 + num2
alert(result)*/

//   Последгий элемент массива
/*let arr = [1, 2, 3]
console.log(arr[arr.length - 1])*/

// Изменение массива

/*let num = ['a', 'b', 'c']
num[0] = 1
num[1] = 2
num[2] = 3
alert(num)*/

// Перезапись элементов

/*let num = [1, 2, 3, 4]
num[0] += 100
num[1] += 100
num[2] += 100
num[3] += 100
alert(num)*/

//   Инкремент и декремент

/*let num = [1, 2, 3]
num[0]++
num[1]++
num[2]++
alert(num)*/

//  Заполнение массива

/*let num = []
num[0] = 1
num[1] = 2
num[2] = 3
alert(num)*/

/*let arr = [1, 2, 3]
arr[3] = 4
arr[4] = 5
alert(arr)*/

// Разреженный массив

/*let num = [1, 2, 3]
num[4] = 5
console.log(num)*/

/*let arr = []
arr[3] = 'a'
arr[8] = 'b'
console.log(arr.length)*/

//-------------------------Объекты-----------------------------

/*let obj = { 1: 'a', 2: 'b', 3: 'c' }
console.log(obj)*/

//Строковые ключи
/*let obj = { a: '1', b: '2', c: '3' }
obj = String(obj['a'] + obj['b'] + obj['c'])
console.log(obj)*/

//Ограничение на строковые ключи

/*let obj = { '1a': '2', '2b': 2, 'c-c': '3' }
obj = String(obj['1a'] + obj['2b'] + obj['c-c'])
console.log(obj)*/

// Альтергативный синтаксис или обращение через свойство объектов

/*let obj = { key1: 1, key2: 2, key3: 3 }
obj.key1 = '1'
obj.key2 = '2'
obj.key3 = '3'
obj = obj.key1 + obj.key2 + obj.key3
console.log(obj)*/

/*let user = { name: 'Александр ', surname: 'Сергеевич ', patronymic: 'Торзюк ' }
alert(user.patronymic + user.name + user.surname)*/

/*let date = { year: '2022', month: '01', day: '17' }
date.day = '-17'
date.month = '-01'
alert(date.year + date.month + date.day)*/

// ДВА ВАРИАНТА ИСПОЛЬЗОВАНИЯ ОБЪЕКТОВ
/*let obj = {}
obj['a'] = 1
obj.b = 2
obj.c = 3
console.log(obj)*/

// Ключи из переменных в java Script

/*let arr = ['a', 'b', 'c']
let key = 2
console.log(arr[key])*/

/*let arr = [1, 2, 3, 4, 5]
let key1 = 2
let key2 = 4
arr = String(arr)

alert(arr[key1] + arr[key2])*/

//Ключи объектов

/*let obj = { 'a': 1, 'b': 2, 'c': 3 }
let key = 'a'
console.log(obj[key])*/

//Типизация масивов и объектов

//console.log(typeof { a: 1, b: 2, c: 3 })
/*let arr = [1, 2, 3]
console.log(typeof arr[0])*/

//console.log(Array.isArray({ a: 1, b: 2, c: 2 }))

// Передача объектов по ссылки в java script
// let arr1 = [1, 2, 3]
// let arr2 = arr1
// arr1[0] = 'a'
// alert(arr1)

// let arr1 = [1, 2, 3]
// let arr2 = arr1
// arr1[0] = 'a'
// arr2[1] = 'b'
// alert(arr1)

// let arr1 = [1, 2, 3]
// let arr2 = arr1
// arr1[0] = 'a'
// arr2[0] = 'b'
// alert(arr2)

//Оператор in в java script

// let obj = { a: 1, b: 2, c: 3 }
// alert('a' in obj)

// Оператор delete в java script

// let obj = { a: 1, b: 2, c: 3 }
// delete obj.b
// console.log(obj)

// let arr = ['a', 'b', 'c', 'd', 'e']
// delete arr[0]
// delete arr[1]
// console.log(arr.length)

// Константы

// const arr1 = ['a', 'b', 'c']
// arr1[1] = '!'
// console.log(arr1)  --------------все будет работать-----------

// const arr1 = ['a', 'b', 'c']
// arr1 = [1, 2, 3]
// console.log(arr1) --------------все не будет работать-----------

// const arr1 = ['a', 'b', 'c']
// arr1 = ['a', 'b', 'c']
// console.log(arr1)

// let arr = [1, 2, 3, 4, 5]
// let res = arr[1] + arr[2]
// console.log(res)

// --------------------------Конструкция if-else в java script--------------------------------

// let test = 10
// if (test != 10) {
//     alert('вернор')
// } else {
//     alert('неверно')
// }

// let test1 = 1
// let test2 = 2
// if (test2 > test1) {
//     alert('верно')
// } else {
//     alert('неверно')
// }
//-------------Логическое ! НЕ---------------------
// let test1 = 3
// let test2 = '3'
// if (test1 != test2) {
//     alert('верно')
// } else {
//     alert('неверно')
// }
//-------------Логическое && И---------------------
// let num1 = 1
// let num2 = 3
// if (num1 <= 1 && num2 >= 3) {
//     alert('верно')
// } else { alert('неверно') }

//-------------Логическое || ИЛИ---------------------

// let num1 = -5
// let num2 = 15
// if (num1 >= 0 || num2 >= 0) {
//     alert('верно')
// } else { alert('неверно') }

// let num = 3
// if ((num > 0 && num < 5) || (num > 10 && num < 20)) {
//     alert('верно')
// } else {
//     alert('неверно')
// }

// let num = 3
// if (num > 5 || num > 0 && num < 3) {
//     alert('верно')
// } else {
//     alert('неверно')
// }

// let num = 3
// if (num == 9 || num > 10 && num < 20 || num > 20 && num < 30) {
//     alert('верно')
// } else {
//     alert('неверно')
// }
//------------------Инвертирование высказываний в if-else-------------------
// let num1 = 0
// let num2 = 10
// if (!(num1 >= 0 || num2 <= 10)) {   ---------- ! дает противоположный результат--------
//     alert('верно')
// } else {
//     alert('неверно')
// }

//---------------------Конструкция if-else и булевые значения--------------------------

// let test = true
// if (test === true) {
//     alert('верно')
// } else {
//     alert('неверно')
// }

// let test = ''
// if (test == false) {
//     alert('верно')
// } else {
//     alert('неверно') -----выдаст это----------
// }

// let test = 3 * 'a'
// if (test == true) {
//     alert('верно')
// } else {
//     alert('неверно')
// }

//---------------------Сокращенный иф--------------------------

// let test = true
// if (test) {
//     alert('верно')
// } else {
//     alert('неверно')
// }

// let test = true
// if (!test) {
//     alert('верно')
// } else {
//     alert('неверно')
// }

// let test = '0'
// if (test) {
//     alert('верно')
// } else {
//     alert('неверно')
// }

// let test = 10
// if (test == 10) {
//     alert('yes')
// }

// let day = 33
// if (day == 10) {
//     alert('value1')
// } else if
//     (day <= 20) {
//     alert('value2')
// } else if (day == 30) {
//     alert('value3')
// } else {
//     alert('Нет правильного ответа')
// }

// let num = 102
// if (num < 10 || num > 99) {
//     alert('Данное число меньше 10 или больше 99')
// }
//------------------------------Область видимости в if-else------------------------
// let age = 17
// let adult

// if (age >= 18) {
//     adult = true
// } else {
//     adult = false
// }
// console.log(adult)

// let age = 17
// let result
// if (age >= 18) {
//     if (age <= 23) {
//         result = 'от 18 до 23'
//     } else {
//         result = 'больше 23'
//     }
// } else {
//     result = 'меньше 18'
// }
// console.log(result)

// let age = 19
// let result
// if (age >= 19) {
//     if (age <= 23) {
//         result = 'от 18 до 23'
//     } else {
//         result = 'больше 23'
//     }
// } else {
//     result = 'меньше 18'
// }
// console.log(result)

// let arr = [1, 2, 3]
// if (arr.length == 3) {
//     console.log(arr.length)
// }

// let num = 20
// let first = String(num)
// if (first[1] == 0) {
//     console.log('да')
// }

// let num = 20
// let str = String(num)
// if (str[2] == 0 || 2 || 4 || 8) {
//     console.log('четное число')
// } else {
//     console.log('нечетное')
// }

//------------------Задачи-----------------

// let month = 12
// if (month >= 3) {
//     if (month <= 5)
//         console.log('весна')
// } if (month >= 6) {
//     if (month <= 8)
//         console.log('лето')
// } if (month >= 9) {
//     if (month <= 11)
//         console.log('осень')
// } if (month >= 1) {
//     if (month <= 2)
//         console.log('зима')
// } if (month == 12) {
//     console.log('зима')
// }

// let str = 'abcde'
// if (str[0] == 'a') {
//     alert('да')
// } else {
//     alert('нет')
// }

// let num = 12345
// let str = String(num)
// if (str[2] == '1' || str[2] == '2' || str[2] == '3') {
//     alert('да')
// } else {
//     alert('нет')
// }

// let num = 145
// let strNum = String(num)
// alert(Number(strNum[0]) + Number(strNum[1]) + Number(strNum[2]))

// let num = 123123
// let strNum = String(num)
// let firstThree = Number(strNum[0]) + Number(strNum[1]) + Number(strNum[2])
// let secondThree = Number(strNum[3]) + Number(strNum[4]) + Number(strNum[5])
// if (firstThree == secondThree) {
//     alert('yes')
// } else {
//     alert('no')
// }

//-------------------------Конструкция switch-case в Java Script---------------------------

// let lang = 'ru'
// if (lang == 'ru') {
//     alert('рус')
// } else if (lang == 'en') {
//     alert('анг')
// } else if (lang == 'de') {
//     alert('нем')
// } else {
//     alert('язык не поддерживается')
// } ----------------------------------------с помощью if-else


// let lang = 'ru'
// switch (lang) {
//     case 'ru':
//         alert('рус')
//         break
//     case 'en':
//         alert('англ')
//         break
//     case 'de':
//         alert('нем')
//         break
//     default:
//         alert('язык не поддерживается')
//         break
// }----------------------------------------с помощью switch-case

//----------------------------------Тернарный оператор-------------------------------------------

//--------С помощью if-else
// let age = 17
// let adult
// if (age >= 18) {
//     adult = true
// } else {
//     adult = false
// }
// console.log(adult)

// --------------тоже самое с помощью тернарного оператора

// let age = 17
// let adult = age >= 18 ? true : false
// console.log(adult)

// let num = 1
// let result = num >= 0 ? 1 : -1
// console.log(result)

//----------------Операторы ==, ===, !=, <, > и т.д. возвращают своим результатом либо true, либо false

//Задачки

// let a = 2 * (3 - 1)
// let b = 6 - 2
// let result = a == b
// console.log(result)

// let a = 5 * (7 - 4)
// let b = 1 + 2 + 7
// let result = a > b
// console.log(result)

// let a = 2 * 4
// let b = 4 * 2
// let c = a != b
// console.log(c)

// let age = 13
// if (age < 14 || age > 90) {
//     alert(true)
// } else {
//     alert(false)
// }

// let start = prompt('Кто там?', '')
// if (start == 'Админ') {
//     let password = prompt('Пароль?', '')

//     if (password == 'Я главный') {
//         alert('Здравствуйте')
//     } else if (password == '' || password == null) {
//         alert('Отмена')
//     } else {
//         alert('Неверный пароль')
//     }
// } else if (start == '' || start == null) {

//     alert('Отменене')
// } else {
//     alert('Я вас не знаю')
// }

// let start = prompt('Добро пожаловать, введите вашу фамилию', '')
// if (start == 'Торзюк') {
//     let password = prompt('Пожалуйста, введите Ваш пароль', '')
//     if (password == '185688') {
//         alert('Здравствуйте, Вы вошли на свою страницу')
//     } else if (password == '' || password == null) {
//         alert('Отменено')
//     } else {
//         alert('Вы ввели неверный пароль')
//     }
// } else if (start == '', start == null) {
//     alert('Отменено')
// } else {
//     alert('В базе такой фамилии нет')
// }

//-------------------Функция confirm in Java Script--------------------------

// let age = confirm('Вам есть уже 18 лет')
// if (age) {
//     alert('Вам доступный текст для взрослых')
// } else {
//     alert('Контент заблокирован, вам доступ запрещен')
// }


//_________________________________________________________Циклы while___________________________________________________________________

// let i = 1
// while (i < 100) {
//     console.log(i)
//     i++
// }

// let i = 11
// while (i < 33) {
//     console.log(i)
//     i++
// }

// let i = 2
// while (i <= 10) {
//     console.log(i)
//     i += 2
// }

// let i = 0
// while (i < 100) {
//     console.log(i)
//     i += 2
// }

// let i = 1
// while (i < 99) {
//     console.log(i)
//     i += 2
// }

// let i = 30
// while (i > 0) {
//     console.log(i)
//     i--
// }

//_________________________________________________________Циклы for___________________________________________________________________

// for (i = 1; i < 100; i++) {
//     console.log(i)
// }

// for (i = 11; i < 33; i++) {
//     console.log(i)
// }

// for (i = 0; i <= 100; i += 2) {
//     console.log(i)
// }

// for (i = 1; i <= 99; i += 2) {
//     console.log(i)
// }

// for (i = 100; i >= 0; i--) {
//     console.log(i)
// }

//-----------------------------------Накопление результата в цикле-----------------------------------------

// let result = 0
// for (let i = 1; i < 100; i++) {
//     result = result + i
// }
// console.log(result)

// let result = 0
// for (let i = 1; i <= 20; i++) {
//     result = result + i
// }
// console.log(result)

// let result = 0
// for (let i = 2; i <= 6; i += 2) {
//     result = result + i
// }
// console.log(result)

// let result = 0
// for (let i = 1; i <= 6; i += 2) {
//     result = result + i
// }
// console.log(result)

//-----------------------------------Цикл for для массивов-----------------------------------------

// let arr = [1, 2, 3, 4, 5]
// for (let i = 0; i <= 4; i++) {
//     console.log(arr[i])
// }

// let arr = [1, 2, 3, 4, 5]
// for (let i = 0; i <= arr.length - 1; i++) {
//     console.log(arr[i])
// }

// let arr = [1, 2, 3, 4, 5]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// let arr = ['a', 'b', 'c', 'd', 'e']
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

//-----------------------------------Перебор массива и if-----------------------------------------

// let arr = [1, 2, 3, 4, 5]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i]) // выводяться только четные числа
//     }
// }

// let arr = [1, 2, 3, 4, 5]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 1) {
//         console.log(arr[i]) // выводяться только нечетные числа
//     }
// }

//-----------------------------------Нахождение суммы элементов-----------------------------------------

// let result = 0
// let arr = [1, 2, 3, 4, 5]
// for (let i = 0; i < arr.length; i++) {
//     result += arr[i]
// }
// console.log(result)

//-----------------------------------Произведение элементов-----------------------------------------

// let result = 1
// let arr = [1, 2, 3, 4, 5]
// for (let i = 0; i < arr.length; i++) {
//     result *= arr[i]
// }
// console.log(result)

// let arr = [2, 5, 9, 15, 1, 4, 6]
// let result
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 3 && arr[i] <= 10) {
//         result = arr[i]

//     } console.log(result)// Меньше 3 и больше 9
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// let result = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         result += arr[i]
//     }

// }
// console.log(result) // Сумма положительных элементов массива

// let arr = [1, 2, 3, 4, 5]
// let result = 0
// let result_2
// for (let i = 0; i < arr.length; i++) {
//     result += arr[i]
//     result_2 = result / arr.length
// }
// console.log(result_2)

// let arr = [10, 20, 30, 50, 235, 3000]
// console.log(arr[0], arr[1], arr[2]) // выводяться на экран числа массива которые начинаються на 1, 2, 5

// let arr = [1, 2, 3, 4, 5]
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]) // Выводяться элементы массива в обратном порядке
// }

// let arr = [6, 1, 7, 3, 5]
// let result
// for (let i = 0; i < arr.length; i++) {
//     if (arr[1] == 1 && arr[3] == 3) {
//         console.log(arr[1], arr[3]) // эллементы значение которых совпадают с их порядковым номером
//     }
// }

// let arr = [1, 2, 3, 4, 5, 6]
// for (let i = 0; i < arr.length; i++) {
//     document.write(arr[i], '<br>')// переводим каждый эллемент массива но новую строку
// }

// let arr = [1, 2, 3, 4, 5, 6]
// for (let i = 0; i < arr.length; i++) {
//     document.write(arr[i], '<p>')// каждый эллемент массива пишем с абзаца
// }

// let fiveDaysOfTheWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт']
// let exit = ['Сб', 'Вс']
// let daysOfTheWeek = fiveDaysOfTheWeek.concat(exit)
// document.write(daysOfTheWeek)// соединяем два массива

// let fiveDaysOfTheWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт']
// let exit = ['Сб', 'Вс']
// let daysOfTheWeek
// for (let i = 0; i < exit.length; i++) {
//     exit[i] = exit[i].bold()
//     daysOfTheWeek = fiveDaysOfTheWeek.concat(exit)
// }
// document.write(daysOfTheWeek)// делаем жирным только субботу, воскресенья

// let week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пн', 'Сб', 'Вс']
// for (let i = 0; i < week.length; i++) {
//     if (week[5] == 'Сб' && week[6] == 'Вс') {
//         week[5] = week[5].bold()
//         week[6] = week[6].bold()

//     } document.write(week[i])

// }//-------делаем жирными только выходные

// let daysOfTheWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
// let day = 1
// for (let i = 0; i < daysOfTheWeek.length; i++) {
//     daysOfTheWeek[day] = daysOfTheWeek[day].italics()
// }
// document.write(daysOfTheWeek)// ВАРИАНТ 1 выделяем текущий день курсивом


// let daysWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
// let day = 2
// for (let i = 0; i < daysWeek.length; i++) {
//     if (daysWeek[day] == 'Ср') {
//         daysWeek[day] = daysWeek[day].italics()
//     }
//     document.write(daysWeek[i])// ВАРИАНТ 2 выделяем текущий день курсивом
// }


//------------------------------------------------Перебор массива циклом for of-------------------------------------------------

// let arr = [1, 2, 3, 4, 5, 6]
// for (let elem of arr) {
//     console.log(elem)// выводим циклом все эллементы массива
// }

// let str = ['a', 'b', 'c', 'd', 'e']
// for (let elem of str) {
//     console.log(elem)// выводим циклом все эллементы массива
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// let result = 0
// for (let elem of arr) {
//     result += elem
// }
// console.log(result)// находим сумму эллементов

//Задачки

// let month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
// for (let result of month) {
//     console.log(result)
// }

// let year = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
// let month = 10
// for (let i = 0; i < year.length; i++) {
//     year[month] = year[month].italics()

// }

// document.write(year)

//---------------------------Перебор объекта циклом for-in в JavaScript------------------------------------

// let arr = { 1: 'a', 2: 'b', 3: 'c', 4: 'd' }
// for (let elem in arr) {
//     console.log(arr[elem])// выводим эллемент объекта
// }

// let arr = { 1: 'a', 2: 'b', 3: 'c', 4: 'd' }
// for (let elem in arr) {
//     console.log(elem)// выводим ключи объекта
// }

// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
// let result = 0
// for (let key in obj) {
//     result += obj[key]
// } console.log(result)// cумма элементов этого объекта

//---------------------------------------Инструкция break в JavaScript-----------------------------------------------

// let arr = [0, 1, 2, 3, 4, 5, 6, 7]
// for (let elem of arr) {
//     if (elem == 0) {
//         console.log(elem)// останавливаем цикл при нахождении нужного числа
//         break
//     }
// }

// let arr = [1, 2, 3, 4, 5, 6, -1, -2]
// let result = 0
// for (let elem of arr) {
//     if (elem == -1) {
//         break
//     }
//     result += elem
// }
// console.log(result)// находим сумму элементов и останавливаем цикл если он доходит до отрицательного числа

// let arr = [1, 2, 3, 4, 5]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 3) {
//         console.log(arr.indexOf(3))// Находим позицию числа 3 в массиве
//     }
// }


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// let i = 0
// for (let elem of arr) {
//     i = i += elem
//     if (i >= 100) {

//         break
//     } console.log(i)
// }


//----------------------------Работа с флагами в JavaScript---------------------------------

// let arr = ['a', 'b', 'c', 'd', 'e']
// let flag = false
// for (let elem of arr) {
//     if (elem == 'c') {
//         flag = true
//         break
//     }
// }
// if (flag === true) {
//     console.log('yes')// проверяем с помощью флага есть ли буква (с) в массиве
// } else {
//     console.log('no')
// }

//-------------------------------Нахождение простых чисел на JavaScript-----------------------------------------

// let num = 31
// let flag = true
// for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//         flag = false
//         break
//     }
// } console.log(flag)// true


//----------------------------------------Циклы без заданного количества итераций в JavaScript------------------------------------------

// let num = 500;

// while (num > 10) {
//     num = num / 2;
// }

// console.log(num)

// let num = 12
// let arr = 1000
// while (num < arr) {
//     num = num * 3
//     console.log(num)
// }


// let arr = 1000
// for (let num = 12; num < arr; num = num * 3) {
//     console.log(num)
// }

//----------------------------------------Формирование строк через циклы в JavaScript-------------------------------------------

// let str = ''
// for (let i = 0; i < 10; i++) {
//     str += '0'
// } console.log(str)

//----------------------------------------Строка с цифрами-------------------------------------------

// let nun = ''
// for (let i = 1; i <= 5; i++) {
//     nun = nun + i
// } console.log(nun)

// let nun = ''
// for (let i = 1; i <= 9; i++) {
//     nun = nun + i
// } console.log(nun)

// let num = ''
// for (let i = 9; i >= 1; i--) {
//     num = num + i
// } console.log(num)

// let str = ''
// for (let i = -1; i >= -9; i--) {
//     str = str + i
// } console.log(str)

//---------------------Цикл for и типы данных JavaScript-------------------

// for (let i = 1; i <= 1000; i++) {
//     let str = String(i)

//     if (str[0] == 1 || str[0] == 2) {

//         console.log(i)

//     }

// }


// for (let i = 1; i <= 100; i++) {
//     let str = String(i); // преобразуем число в строку

//     if (str[0] == 1 || str[0] == 2) {
//         console.log(i);
//     }
// }

//--------------------Типизация и сумма-----------------------

// let result = 0;

// for (let i = 1; i <= 9; i++) {
//     result = result + i;
// }

// console.log(result)

// let result = ''; // начальное значение - пустая строка

// for (let i = 1; i <= 9; i++) {
//     result = result + String(i); // преобразуем i к строке с помощью String()
// }

// console.log(result);

// let result = '';

// for (let i = 1; i <= 9; i++) {
//     result = result + i;
// }

// console.log(result);

// let result = ''
// for (let i = 1; i <= 30; i++) {
//     result += i
// } console.log(result)

//---------------------------Вложенные циклы в JavaScript----------------------------------

// for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= 6; j++) {
//         document.write(i);//111111222222333333444444555555666666777777888888999999
//     }
// }
//---------------------------------------------------------------------------------------------------------------------------
// for (let i = 11; i <= 33; i++) {
//     for (let j = 12; j <= 20; j = 0) {

//     }
//     for (let k = 24; k <= 30; k = 0) {

//     }
//     console.log(i)
// }
// должно получиться С помощью двух вложенных циклов выведите на экран следующую строку:

//11 12 13 21 22 23 31 32 33

//---------------------------------------------------------------------------------------------------------------------------

//---------------------------------Заполнение массивов через цикл в JavaScript----------------------------------------

// let arr = []
// arr[0] = 1
// arr[1] = 2
// arr[2] = 3
// arr[3] = 4
// arr[4] = 5
// arr[5] = 6
// arr[6] = 7
// arr[7] = 8
// arr[8] = 9
// arr[9] = 10
// console.log(arr)

// let str = []
// str[0] = 'x'
// str[1] = 'x'
// str[2] = 'x'
// document.write(str)

// let arr = []
// for (let i = 0; i <= 4; i++) {
//     arr[i] = i + 1
// } console.log(arr)

// let arr = []
// for (let i = 0; i <= 100; i++) {
//     arr[i] = i + 1
// } console.log(arr)

//----------------- Заполнение значениями не по порядку

// let arr = [];

// for (let i = 2; i <= 100; i += 2) {
//     arr[i] = i;
// }

// console.log(arr); // массив получится с пропусками

// let arr = [];

// for (let i = 2, j = 0; i <= 100; i += 2, j++) {
//     arr[j] = i;
// }

// console.log(arr); // от 1 до 100 четными цифрами

// let arr = []
// for (let i = 1, j = 0; i <= 99; i += 2, j++) {
//     arr[j] = i
// }
// console.log(arr)// от 1 до 99 не четными цифрами

//-------------------Изменение массива в цикле JavaScript

// let arr = [1, 2, 3, 4, 5]
// for (let i = 0; i <= 5 - 1; i++) {
//     arr[i] = arr[i] * 2
// } console.log(arr)// каждый элемент массива умножаем на 2

//--------------------------Сокращенные операции

// let arr = [1, 2, 3, 4, 5]
// for (let i = 0; i < arr.length; i++) {
//     arr[i]--
// } console.log(arr)// отнимаем

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let i = 0; i < arr.length; i++) {
//     arr[i] += 10
// } console.log(arr)// добавляю 10 к каждому элементу массива

//--------------------Заполнение массива методом push в JavaScript

// let arr = []
// arr.push(1)
// arr.push(2)
// arr.push(3)
// arr.push(4)
// arr.push(5)
// arr.push(6)
// arr.push(7)
// arr.push(8)
// arr.push(9)
// arr.push(10)
// console.log(arr)// заполняем элементы масива с помошью .push()

//------------------------------Заполнение массива в цикле

// let arr = []
// for (let i = 1; i <= 10; i++) {
//     arr.push(i)
// } console.log(arr)// заполняем массив с помощью .push()

// let arr = []
// for (let i = 1; i <= 10; i++) {
//     arr[i] = i + 1
// } console.log(arr)// заполнение массива без помощи .push()

// let str = []
// for (let i = 0; i <= 10; i++) {

//     str.push(i)
//     str[i] = 'x'
// } console.log(str)// добовляем 10 'x' при помощи .push


//------------------------Заполнение массива из другого массива

// let arr = [1, 2, 3, 4, 5];
// let result = [];

// for (let elem of arr) {
// 	if (elem % 2 == 0) {
// 		result.push(elem);
// 	}
// }

// console.log(result); // выведет [2, 4]

// let arr = [1, 2, 3, 4, 5]
// let result = []
// for (let elem of arr) {
//     if (elem % 2 == 1) {
//         result.push(elem)
//     }
// } console.log(result)

//Задача

//Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел.


//--------------Переворот массива

// let arr = ['a', 'b', 'c', 'd', 'e']
// let result = []
// for (let i = arr.length - 1; i >= 0; i--) {
//     result.push(arr[i])
// } console.log(result)

// let arr = ['e', 'd', 'c', 'b', 'a']
// let result = []
// for (let i = arr.length - 1; i >= 0; i--) {
//     result.push(arr[i])
// } console.log(result)

//------------------------------------Заполнение объектов через цикл в JavaScript-----------------------------------

// let obj = {}
// obj['Пн'] = 1
// obj['Вт'] = 2
// obj['Ср'] = 3
// obj['Чт'] = 4
// obj['Пт'] = 5
// obj['Сб'] = 6
// obj['Вс'] = 7
// console.log(obj)

// let keys = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let value = [1, 2, 3, 4, 5, 6, 7];
// let obj = {}
// for (let i = 0; i <= 6; i++) {

//     obj[keys[i]] = value[i]
// } console.log(obj)// Из 2 массивов делаем объект с ключ, значение

// let keys = ['a', 'b', 'c', 'd', 'e'];
// let values = [1, 2, 3, 4, 5];
// let obj = {};

// for (let i = 0; i <= 4; i++) {
//     obj[keys[i]] = values[i];
// }

// console.log(obj);// Из 2 массивов делаем объект с ключ, значение

// let keys = [1, 2, 3, 4, 5, 6, 7]
// let values = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
// let obj = []
// for (let i = 0; i <= 6; i++) {
//     let key = keys[i]
//     let value = values[i]
//     obj[key] = value
// } console.log(obj)// ПЕРВЫЙ ВЫРИАНТ РЕШЕНИЯ


// let keys = [1, 2, 3, 4, 5, 6, 7]
// let values = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
// let obj = []
// for (let i = 0; i <= 6; i++) {
//     obj[keys[i]] = values[i]
// } console.log(obj)//// ВТОРОЙ ВЫРИАНТ РЕШЕНИЯ

//----------------------------------------------Заполнение объекта из другого объекта

// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// let result = {};

// for (let key in obj) {
// 	if (obj[key] % 2 == 0) {
// 		result[key] = obj[key];
// 	}
// }

// console.log(result); // выведет {'b': 2, 'd': 4};

// let obj = { 'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17 }
// let result = {}
// for (let key in obj) {
//     if (obj[key] > 10) {
//         if (
//             obj[key] < 20
//         )
//             result[key] = obj[key]
//     }
// } console.log(result)// ВЫБИРАЕМ ОБЪЕКТЫ В ЩБЪЕКТЕ БОЛЬШЕ 10 И МЕНЬШЕ 20

// let obj = { 'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17 }
// let result = {}
// for (let key in obj) {
//     if (obj[key] > 10 && obj[key] < 20) {

//         result[key] = obj[key]
//     }
// } console.log(result)// ВЫБИРАЕМ ОБЪЕКТЫ В ЩБЪЕКТЕ БОЛЬШЕ 10 И МЕНЬШЕ 20


// let obj = { 1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс' }
// let result = {}
// for (let key in obj) {
//     if (key % 2 != 0) {
//         result[key] = obj[key]
//     }
// } console.log(result)// ВЫВОДЯТЬСЯ ТОЛЬКО НЕЧЕТНЫЕ ДНИ НЕДЕЛИ ПО ИХ КЛЮЧУ

//------------------------------Изменение объекта в цикле

// let obj = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 };

// for (let key in obj) {
//     obj[key] = obj[key] * 2;
// }

// console.log(obj); // выведет {'a': 2, 'b': 4, 'c': 6, 'd': 8, 'e': 10}

// let obj = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }
// for (let key in obj) {
//     obj[key] = Math.pow(obj[key], 2)
// } console.log(obj)// ВОЗВОДИМ КАЖДЫЙ ЭЛЕМЕНТ ОБЪЕКТА В КВАДРАТ

//-------------------------------Обмен ключей и значений объекта

// let obj = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }
// let result = {}
// for (let key in obj) {
//     result[obj[key]] = key
// } console.log(result) // {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}

//-------------------------Практика на циклы с массивами и объектами JavaScript--------------------------------

// let obj = {
//     employee1: 100,
//     employee2: 200,
//     employee3: 300,
//     employee4: 400,
//     employee5: 500,
//     employee6: 600,
//     employee7: 700,
// }
// let up = {}
// for (let result in obj) {
//     obj[result] += 50
//     up = obj
// } console.log(up)//Увеличьте зарплату каждого работника на 50 грн

// let obj = {//Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам, у которых она меньше или равна 400.
//     employee1: 100,
//     employee2: 200,
//     employee3: 300,
//     employee4: 400,
//     employee5: 500,
//     employee6: 600,
//     employee7: 700,
// }
// let up = {}
// for (let res in obj) {
//     if (obj[res] <= 400) {
//         obj[res] += 50
//         up = obj
//     }
// } console.log(up)


//----------------- задачаЗадача 3⋕js.Pm.Lp.APF.3




// let obj = { 1: 6, 2: 7, 3: 8, 4: 9, 5: 10 }


// Найдите сумму ключей этого объекта и поделите ее на сумму значений.

// let obj = {
// 	1: 125,
// 	2: 225,
// 	3: 128,
// 	4: 356,
// 	5: 145,
// 	6: 281,
// 	7: 452,
// }

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let obj = {}
// obj[arr1] = arr2
// console.log(obj)

// let obj = { 1: 6, 2: 7, 3: 8, 4: 9, 5: 10 };
// let resKey = 0
// let resObjKey = 0
// let result
// for (let key in obj) {
//     key = Number(key)
//     resKey += key
//     resObjKey += obj[key]
//     result = resKey / resObjKey
// }console.log(result)

// let obj = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 };
// let arrKey = []
// let arrObjKey = []
// for (let key in obj) {
//     arrKey += key
//     arrObjKey += obj[key]
// } console.log(arrKey)
// console.log(arrObjKey)

// let obj = {
// 	1: 125,
// 	2: 225,
// 	3: 128,
// 	4: 356,
// 	5: 145,
// 	6: 281,
// 	7: 452,
// };
// let arr = []
// arr[0] = obj[1]
// arr[1] = obj[2]
// arr[2] = obj[3]
// arr[3] = obj[5]
// arr[4] = obj[6]
// console.log(arr)

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {}
// obj[1] = arr[0]
// obj[2] = arr[1]
// obj[3] = arr[2]
// obj[4] = arr[3]
// obj[5] = arr[4]
// console.log(obj)

// let arr = ['a', 'b', 'c', 'd', 'e']
// let obj = {}
// obj[arr[0]] = 1
// obj[arr[1]] = 2
// obj[arr[2]] = 3
// obj[arr[3]] = 4
// obj[arr[4]] = 5
// console.log(obj)



// let balance = 10000
// const payment = 2000
// let message = alert(`Общая стоимость заказа ${payment} кредитов. Проверяем количество доступных средств на счету`)
// if (payment <= balance) {
//     balance -= payment
//     alert(`На счету  осталось ${balance}`)
// } else {
//     alert('На счету недостаточно средств для проведения операции!')
// }
// alert('Операция завершена')

// const option = 1;
// let message = ''
// switch (option) {
//     case 1:
//         message = ''
//         break;
//     case 2:
//         message = ''
//     default:
//         break;
// }
 


//Подсчет количества элементов в массиве JavaScript

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let counter = 0;
// let counter_2 = 0;
// for (let elem of arr) {
//     if (elem == 3) {
//         counter += 1;
//     }
//     if (elem == 2) {
//         counter_2 += 1
//     }
// } console.log(counter)
// console.log(counter_2)


// let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
// let count = { a: 0, b: 0, c: 0 };
// for (let elem of arr) {
//     count[elem] += 1;
// }console.log(count)

// let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
// let count = {};

// for (let elem of arr) {
// 	if (count[elem] === undefined) {
// 		count[elem] = 1;
// 	} else {
// 		count[elem]++;
// 	}
// }

// console.log(count); // выведет {a: 3, b: 2, c: 1}--------------------------НЕ ПОНЯЛ!!!

// let str = 'ababab'
// let count = 0
// let counter_2 = 0
// for (let i = 0; i < str.length; i += 1) {
//     if (str[i] == 'a') {
//         count += 1
//     }
//     if (str[i] == 'b') {
//         counter_2 += 1
//     }
// }console.log(count)
//     console.log(counter_2)//Дана строка. Подсчитайте сколько раз в ней встречается каждый из ее символов.

//-------------------------------------------Получение соседей элементов в массиве JavaScript

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i -1]);
// }

// let arr = [1, 2, 3, 4, 5];

// for (let i = 1; i < arr.length; i++) {
// 	console.log(arr[i - 1] + arr[i]);
// }
    
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i += 1) {
//   console.log (arr[i] += 1 + arr[i])
// }

// let arr = [8, 9, 10, 11, 12, 13]
// for (let i = 0; i < arr.length; i += 1) {
//     console.log((arr[i] -=2) + (arr[i] + (arr[i] += 2)))
// }

// const min = 6;
// const max = 13;
// let total = 0
// for (let i = min; i <= max; i += 1) {
//     if (i % 2 === 0) {
//         total += i
//     }
// }console.log(total)

// const arr = [33, 65, 34, 77, 87, 2];
// let smoolNumber = arr[0]
// for (let number of arr) {
//     if (number < smoolNumber) {
//         smoolNumber = number
//     }
// } console.log(smoolNumber)

//--------------------------------------Получение чисел Фибоначчи в JavaScript
//  let one = 0;
// let two = 1;

// for (let i = 1; i <= 10; i++) {
// 	let current = one + two;
	 
// 	one = two;
// 	two = current;
	
// 	console.log(current);
// }//----------НЕ ПОНЯЛ

//                  Вывод пирамидок на JavaScript

// let str = '';

// for (let i = 0; i < 5; i++) {
// 	str += 'xx';
// 	document.write(str  + '<br>')
// }

// for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= 3; j++) {
//         document.write(i)
//     }
//     document.write('<br>')
// }

// for (let i = 1; i <= 9; i++) {
//     if (i % 2 !== 0) {
//         for (let j = 1; j <= i; j += 1) {
//             document.write (i)
//         }
//     }document.write('<br>')
// }

// for (let i = 9; i >= 1; i -= 1) {
//     let str = ''
//     for (let j = 1; j <= i; j += 1) {
//         str += i
//     }
//     document.write (str + '<br>')
// }

//                 Заполнение массивов с накоплением строки в JavaScript

// let arr = []
// let str = ''
// for (let i = 0; i < 5; i++) {
//     str += 'xx'
//     arr.push(str)
// }console.log(arr)

// let arr = [];

// for (let i = 1; i < 10; i++) {
// 	let str = '';
	
// 	for (let j = 0; j < i; j++) {
// 		str += i;
// 	}
	
// 	arr.push(str);
// }

// console.log(arr);

// Создаем пустой массив
// let arr = []
// // Нужно сделать цикл от 1 до 5
// for (let i = 1; i <= 5; i += 1) {
//     // Создаем строку
//     let str = ''
//     // Нужно сделать цикл в цикле
//     for (let j = 1; j <= 5; j += 1) {
//         // Добавляем к строке цикл i
//         str += i
        
//     }
//     //К arr добавляем push(str)
//     arr.push(str)

// }
// //  Выводим в консоле arr
// console.log(arr)

//Советы по написанию кода циклов в JavaScript

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0
// for (let elem of arr) {
//     if (elem % 3 === 0) {
//         sum += elem
//     }
// }console.log (sum)

// let arr = [10, 20, 30, 40, 21, 32, 51];
// let all = arr[0] + arr[1] + arr[4]
// console.log(all)

// let arr = [10, 20, 30, 40, 21, 32, 51];
// let sum = 0
// for (let elem of arr) {
//     if (elem[0] === 1 && elem[0] === 2) {
//         sum += elem
//     }
// } console.log(sum)//           XZ

// let arr = ['21', '32', '34', '43', '45', '54', '55'];
// let sum = 0;

// for (let elem of arr) {
// 	if (+elem[0] === +elem[1] + 1) {
// 		sum += +elem; // исправляем
// 	}
// }

// console.log(sum); // все работает

// Задача 1⋕js.Pm.Lp.Dbg.1

// Исправьте ошибки, допущенные в следующем коде:

// let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
// let sum
// let arr = []
// for (let key in obj) {
//      arr.push(obj[key])
// }
// if (arr[0] - 9 === 1 && arr[1] - 18 === 2) {
//     sum = arr[0] + arr[1]
    
// }console.log(sum) // сложить значение которое начинается с 1 и 2

//Отработка циклов JavaScript
// let arr = [1, 14, 5, 12, 11, 9]
// let sum = 0
// let res
// for (let elem of arr) {
//     console.log(arr.length)
//     sum += elem
//     res = sum / arr.length
//     }
// console.log(res)

//Многомерные массивы в JavaScript

// let arr = [
// 	['a', 'b', 'c'],
// 	['d', 'e', 'f'],
// 	['g', 'h', 'i'],
// 	['j', 'k', 'l'],
// ];
// console.log(arr[3][2] + ',' + arr[1][1]  + ',' + arr[2][0]  + ',' + arr[0][0] + '.');


// let arr = [[1, 2], [3, 4], [5, 6]];
// console.log (sum += arr[0][0] + arr[0][1] + arr[1][0] + arr[1][1] + arr[2][0] + arr[2][1])


// let arr = [
// 	[
// 		[1, 2],
// 		[3, 4],
// 	],
// 	[
// 		[5, 6],
// 		[7, 8],
// 	],
// ];
// let sum = 0
// console.log(arr[0][0][0] + arr[0][0][1] + arr[0][1][0] + arr[0][1][1] + arr[1][0][0] + arr[1][0][1] + arr[1][1][0] + arr[1][1][1])

// let arr = [
// 	[
// 		1, 2, 3,
// 		[4, 5,
// 			[6, 7]
// 		]
// 	],
// 	[
// 		8, [9, 10]
// 	]
// ];
// console.log(arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3][0] + arr[0][3][1] + arr[0][3][2][0] + arr[0][3][2][1] + arr[1][0] + arr[1][1][0] + arr[1][1][1])
	
// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0;
// for (let subArr of arr) {
// 	for (let elem of subArr) {
// 		sum += elem
// 	}
// } console.log(sum)

// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let sum = 0;
// for (let subArr of arr) {
// 	for (let subArr_2 of subArr) {
// 		for (let elem of subArr_2) {
// 			sum += elem
// 		}
// 	}
// }console.log (sum)

// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0;
// for (let i = 0; i < arr.length; i += 1) {
// 	for (let j = 0; j < arr[i].length; j += 1) {
// 		sum += arr[i][j]
// 	}
// }console.log(sum)

// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let sum = 0;
// for (let i = 0; i < arr.length; i += 1) {
// 	for (let j = 0; j < arr[i].length; j += 1) {
// 		for (let k = 0; k < arr[i][j].length; k += 1) {
// 			sum += arr[i][j][k]
// 		}
// 	}
// }console.log(sum)

//Заполнение многомерных массивов JavaScript

// let arr = []
// for (let i = 0; i < 3; i += 1) {
//     arr[i] = []
//     for (let j = 0; j < 5; j += 1) {
//         arr[i].push(j + 1)
        
//     }
// }console.log(arr)

// let arr = [];
// for (let i = 0; i < 3; i += 1) {
//     arr[i] = []
//     for (let j = 0; j < 5; j += 1) {

//         arr[i][j]  = 'x'
//     }
// }console.log(arr)

// let arr = []
// for (let i = 0; i < 3; i += 1) {
//     arr[i] = []
//     for (let j = 0; j < 2; j += 1) {
//         arr[i][j] = []
//         for (let k = 0; k < 5; k++) {
//             arr[i][j][k] = k + 1
//             // arr[i][j].push(k + 1)
//         }
        
//     }
// }console.log(arr)

// let arr = [];

// for (let i = 0; i < 3; i++) {
//     arr[i] = []
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }

// console.log(arr);

// let arr = [];
// let k = 1; // счетчик

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k; // записываем счетчик
// 		k++; // увеличиваем счетчик
// 	}
// }

// console.log(arr);

// let arr = [];

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++, k++) {
// 		arr[i][j] = k;
// 	}
// }

// console.log(arr);

// let arr = []
// let k = 1
// for (let i = 0; i < 4; i += 1) {
//     arr[i] = []
//     for (let j = 0; j < 2; j += 1) {
//         arr[i][j] = k ++
//     }
// }console.log(arr)

// let arr = []
// let k = 0
// for (let i = 0; i < 4; i += 1) {
//     arr[i] = []
//     for (let j = 0; j < 3; j += 1) {
//         arr[i][j] = k += 2
//     }
// }console.log (arr)

// let arr = []
// let num = 1
// for (let i = 0; i < 2; i++) {
//     arr[i] = []
//     for (let j = 0; j < 2; j++) {
//         arr[i][j] = []
//         for (let k = 0; k < 2; k++) {
//             arr[i][j][k] = num++
//         }
//     }
// }console.log(arr)

//                 Многомерные объекты в JavaScript

// let obj = {
// 	key1: {
// 		key1: 1,
// 		key2: 2,
// 		key3: 3,
// 	},
// 	key2: {
// 		key1: 4,
// 		key2: 5,
// 		key3: 6,
// 	},
// 	key3: {
// 		key1: 7,
// 		key2: 8,
// 		key3: 9,
// 	},
// }
// let sum = obj['key1']['key1'] + obj['key1']['key2'] + obj['key1']['key3'] + obj['key2']['key1'] + obj['key2']['key2'] + obj['key2']['key3'] + obj['key3']['key1'] + obj['key3']['key2'] + obj['key3']['key3']
// console.log(sum)

// let obj = {
// 	1: {
// 		1: 'a1',
// 		2: 'a2',
// 		3: 'a3',
// 	},
// 	2: {
// 		1: 'b1',
// 		2: 'b2',
// 		3: 'b3',
// 	},
// 	3: {
// 		1: 'c1',
// 		2: 'c2',
// 		3: 'c3',
// 	},
// }
// console.log(obj[2][2], obj[3][1])

// let obj = {
// 	key1: {
// 		a: 1, b: 2, c: {
// 			d: 3,
// 			e: 4,
// 		}, f: 5,
// 	},
// 	key2: {
// 		g: 6, h: 7,
// 	},
// }

// console.log (obj['key1']['a'] + obj['key1']['b'] + obj['key1']['c']['d'] + obj['key1']['c']['e'] + obj['key1']['f'] + obj['key2']['g'] + obj['key2']['h'])

//             Перебор многомерных объектов в JavaScript

// let obj = {
// 	a: {
// 		1: 'a1',
// 		2: 'a2',
// 		3: 'a3',
// 	},
// 	b: {
// 		1: 'b1',
// 		2: 'b2',
// 		3: 'b3',
// 	},
// 	c: {
// 		1: 'c1',
// 		2: 'c2',
// 		3: 'c3',
// 	},
// }

// for (let key in obj) {
//     let subObj = obj[key]
//     // console.log(subObj)
//     for (let subKey in subObj) {
//        console.log(subObj[subKey])
//    }
// }

// let obj = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// }
// let sum = 0
// for (let key in obj) {
//     let subObj = obj[key]
//     for (let subKey in subObj) {
//         sum += subObj[subKey]
//     }
// }console.log(sum)

//               Ключи из переменных в многомерных структурах JavaScript

// let obj = {
// 	'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
// 	'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
// };

// console.log(obj['ru'][3]);

// let months = {
// 	'ru': [
// 		'январь',
// 		'февраль',
// 		'март',
// 		'апрель',
// 		'май',
// 		'июнь',
// 		'июль',
// 		'август',
// 		'сентябрь',
// 		'октябрь',
// 		'ноябрь',
// 		'декабрь',
// 	],
// 	'en': [
// 		'january',
// 		'february',
// 		'march',
// 		'april',
// 		'may',
// 		'june',
// 		'july',
// 		'august',
// 		'september',
// 		'october',
// 		'november',
// 		'december',
// 	],
// };
// let lang = 'ru'; // может быть или 'ru' или 'en'
// let month = 5;   // число от 0 до 11
// console.log(months[lang][month])

// let affairs = {
// 	'2018': {
// 		11: {
// 			29: ['дело111', 'дело112', 'дело113'],
// 			30: ['дело121', 'дело122', 'дело123'],
// 		},
// 		12: {
// 			30: ['дело211', 'дело212', 'дело213'],
// 			31: ['дело221', 'дело222', 'дело223'],
// 		},
// 	},
// 	'2019': {
// 		12: {
// 			29: ['дело311', 'дело312', 'дело313'],
// 			30: ['дело321', 'дело322', 'дело323'],
// 			31: ['дело331', 'дело332', 'дело333'],
// 		}
// 	},
// }

// const year = '2018'
// const month = 12
// const day = 30
// const business = 1
// console.log(affairs[year][month][day][business])

// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// }
// let key1 = 'key2';
// let key2 = 'key4';
// console.log(obj[key1][key2]);

//                Многомерные массивы и объекты в JavaScript

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];
// console.log(employees[0].salary + employees[1].salary)

// let students = {
// 	'boys':  ['Коля', 'Вася', 'Петя'],
// 	'girls': ['Даша', 'Маша', 'Лена'],
// };
// console.log(students.boys[1], students.girls[2])

//              Перебор многомерных комбинаций в JavaScript

// let users = [
// 	{
// 		name: 'name1',
// 		age: 31,
// 	},
// 	{
// 		name: 'name2',
// 		age: 32,
// 	},
// 	{
// 		name: 'name3',
// 		age: 33,
// 	},
// ];
// for (let user of users) {
// 	document.write(user.name + ' ' + user.age + '<br>');
// }

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];
// for (let employee of employees) {
//     document.write(employee.name + ' ' + employee.salary + '<br>')
// }

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];
// let sum = 0
// for (let employee of employees) {
//     sum += employee.salary
// }console.log(sum)

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 		age: 28,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 		age: 29,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 		age: 30,
// 	},
// 	{
// 		name: 'name4',
// 		salary: 600,
// 		age: 31,
// 	},
// 	{
// 		name: 'name5',
// 		salary: 700,
// 		age: 32,
// 	},
// ];
// let sum = 0;
// for (let employee of employees) {
//     if (employee.age >= 30) {
//         sum += employee.salary
//     }
// }console.log(sum)

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 		dismissed: false,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 		dismissed: true,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 		dismissed: false,
// 	},
// 	{
// 		name: 'name4',
// 		salary: 600,
// 		dismissed: true,
// 	},
// 	{
// 		name: 'name5',
// 		salary: 700,
// 		dismissed: false,
// 	},
// ];
// for (let employee of employees) {
//     if (employee.dismissed === true) {
//         document.write(employee.name + ' ' + employee.salary + '<br>')
//     }
// }

// let students = {
// 	'group1': ['student11', 'student12', 'student13'],
// 	'group2': ['student21', 'student22', 'student23'],
// 	'group3': ['student31', 'student32'],
// };
// for (let group in students) {
// 	for (let name of students[group]) {
// 		console.log(name);
// 	}
// }

// let data = {
// 	1: [
// 		'data11',
// 		'data12',
// 		'data13',
// 	],
// 	2: [
// 		'data21',
// 		'data22',
// 		'data23',
// 	],
// 	3: [
// 		'data31',
// 		'data32',
// 		'data33',
// 		'data34',
// 		'data35',
// 	],
// 	4: [
// 		'data41',
// 		'data42',
// 	],
// };

// for (let numbers in data) {
//     for (let datas of data[numbers]) {
//         console.log(datas)
//     }
// }

// let data = [
// 	{
// 		1: 'data11',
// 		2: 'data12',
// 		3: 'data13',
// 		4: 'data14',
// 	},
// 	{
// 		1: 'data21',
// 		2: 'data22',
// 		3: 'data33',
// 	},
// 	{
// 		1: 'data31',
// 		2: 'data32',
// 	},
// ];
// for (let arr of data) {
//     for (let obj in arr) {
//         console.log(arr[obj])
//     }
// }

// let data = [
// 	{
// 		1: [
// 			'data111',
// 			'data112',
// 			'data113',
// 		],
// 		2: [
// 			'data121',
// 			'data122',
// 			'data123',
// 		],
// 	},
// 	{
// 		1: [
// 			'data211',
// 			'data212',
// 			'data213',
// 		],
// 		2: [
// 			'data221',
// 			'data222',
// 			'data223',
// 			'data224',
// 		],
// 		3: [
// 			'data231',
// 			'data232',
// 			'data233',
// 			'data234',
// 			'data235',
// 		],
// 	},
// 	{
// 		1: [
// 			'data411',
// 			'data412',
// 			'data413',
// 		],
// 		2: [
// 			'data421',
// 		],
// 	},
// ];

// for (let arr of data) {
//     for (let obj in arr) {
//         for (let arr2 of arr[obj]) {
//             console.log(arr2)
//         }
//     }
// }

//                Стандартные методы

// let max = 10
// let min = 1
// let res = Math.floor(Math.random() * (max - min) + min)
// let arr = []
// for (let i = 0; i < res; i++){
//     arr.push(res)
// }console.log(arr)

// let str = 'java script'
// console.log (str.indexOf('script'))

// let str = 'http://.html'
// console.log(str.endsWith('.html'))

// let num = '123456789'
// let arr = num.split('')
// let arr2 = arr.reverse()
// let res = arr2.join('')
// console.log(res)

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.join('-'))

// let arr = [1, 2, 3]
// arr.unshift(4, 5, 6)
// console.log(arr)

// let arr = [1, 2, 3]
// let d = arr.pop()
// console.log(d)

// let arr = [1, 2, 3, 4, 5]
// let b = arr.splice(1, 0, 'a', 'b')
// let c = arr.splice(6, 0, 'c')
// let e = arr.splice(8, 0, 'e')
// console.log(arr)

// let arr = [1, 2, 3, 4, 5]
// console.log(arr.includes(3))

// let str = 'london';

// let result = str.slice(0, 1).toUpperCase() + str.slice(1);
// console.log(result); // выведет 'London'

// let str = 'london';
// let a = str.slice(0, 5)
// let res =  str.slice(5).toUpperCase()
// console.log(a + res)

// let str = 'london';
// let a = str.slice(0, 2).toUpperCase()
// let b = str.slice(2)
// console.log(a + b)

// let str = 'London';
// let res = str.slice(0, 1).toLowerCase() + str.slice(1)
// console.log(res)

// let str = 'word1 word2 word3';
// let words = str.split(' ')
// for (let i = 0; i < words.length; i += 1) {
//     words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1)
// }
// let res = words.join(' ')
// console.log(res)

// let str = 'var_test_text'
// let a = str.slice(0, 3)
// let aa = a.slice(0, 1).toLowerCase() + a.slice(1, 3)
// let b = str.slice(4, 8)
// let bb = b.slice(0, 1).toUpperCase() + b.slice(1, 4)
// let c = str.slice(9)
// let cc = c.slice(0, 1).toUpperCase() + c.slice(1)
// let res = aa + bb + cc
// console.log(res) // результат -  varTestText

// let str = 'Hello world'
// let arr = str.split(' ').reverse().join(' ')
// console.log(arr)


// let num = 12345;
// let arr = String(num).split('')
// console.log(arr)

// let sum = 0;
// for (let digit of arr) {
// 	sum += Number(digit);
// }

// console.log(sum);

// let num = 12345;
// let arr = String(num).split('');

// let prod = 1;
// for (let digit of arr) {
// 	prod *= digit;
// }

// console.log(prod);

// function func() {
//     let sum
//     for (let i = 1; i <= 100; i++){
//         sum = i
//         console.log(sum)
//     }
    
// }
// func()

// function func(num) {
//     alert(num * num)
// }
// func(5)

// function func(num) {
//     for (i = 0; i < num; i++){
//         console.log(i + '=^.^=')
//     }
    
// }
// func(10)

// function func(num) {
     
//     if (num == true) {
//     alert('+++')
// }else{alert('---')}
// }
// func(-1)

// function func(num1, num2, num3) {
//     alert(num1 + num2 + num3)
// }
// func(2, 4, 6)


// function func(num1, num2, num3) {
//     console.log(num1 + num2 + num3)
// }
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// func(param1, param2, param3)

// function func(num = 5) {
// 	alert(num * num);
// }
// func();


// function func(num1 = 0, num2 = 0) {
// 	return num1 + num2;
// }
// alert(func(2, 3));

// function func(num) {
//     return num ** num
// }
// let res = func(3)
// alert(res)

// function func(num) {
//     return num * num
// }
// let sum = func(3) + func(4)
// console.log(sum)

// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function round(num) {
// 	return num.toFixed(3);
// }
// let res = round(sqrt(2))
// console.log(res)

// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }

// function round(num) {
//     return num.toFixed(3)
// }
// let result = round(sum(sqrt(2), sqrt(3), sqrt(4)))
// console.log(result)

// function func(num) {
// 	return num;
	
// 	let result = num * num;
// 	return result;
// }

// alert( func(3) );

// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	} else {
// 		return num * num;
// 	}
// }

// alert(func(10));
// alert( func(-5) );

// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	}
	
// 	return num * num;
// }

// alert(func(10));
// alert( func(-5) );

// function func() {
// 	let sum = 0;
	
// 	for (let i = 1; i <= 5; i++) {
// 		sum += i;
// 		return sum;
// 	}
// }

// let result = func();
// alert(result);

// function func(num) {
// 	let sum = 0;
	
// 	for (let i = 1; i <= num; i++) {
// 		sum += i;
		
//     }
//     return sum;
// }

// alert( func(5) );

// Применение return в цикле

// function func(arr) {
// 	let sum = 0;
	
// 	for (let i = 0; i < arr.length; i++) {
// 		sum += arr[i];
// 		console.log(arr[i])
// 		//Если сумма больше или равна 10:
// 		if (sum >= 10) {
// 			return i + 1 ; // выходим из цикла и из функции
// 		}
// 	}
// }

// let result = func([1, 2, 3, 4, 5]);
// alert(result);

// function func() {
// 	let sum = 0;
// 	let i = 1;
	
// 	while (true) { // бесконечный цикл
// 		sum += i;
		
// 		if (sum >= 100) {
// 			return i; // цикл крутится пока не выйдет тут
// 		}
		
// 		i++;
// 	}
// }

// alert( func() );

// function func(num) {
//     while (true) {
        
//         console.log(num)
//         if (num <= 10) {
//            return num
//         }
//         num /= 2
//    }
// }
// let res = func(100)
// console.log(res)

// function func(num) {
// 	if (num >= 0) {
// 		return Math.sqrt(num);
// 	} else {
// 		return 0;
// 	}
// }

// alert(func(4));

// function func(num1, num2) {
	
	
// 	if (num1 > 0 && num2 > 0) {
// 		return num1 * num2;
// 	} else {
// 		return num1 - num2;
// 	}
	
	
// }

// alert(func(3, 4));

// function func() {
//     let number = []
//     for (let i = 1; i <= 10; i++){
//         number += i
       
//     }
//     return number
// }
// console.log(func())


// function func(arr) {
//     let sum
//     for (let elem of arr) {
//         sum = elem * elem
       
//     }
//     return sum
// }
// let arr1 = [1, 2, 3, 4];
// console.log(func(arr1))

// function getDigitsSum(num) {
//     return num * num
// }

// console.log(getDigitsSum(10))

// let arr = []
// let sum = 24
// let res
// for (let i = sum; i > 1; i--){
   
//     res = sum / i
//     arr.push(Math.trunc(res))
// } console.log(arr)

// function getDivision(sum) {
//     let arr = []
//     for (let i = sum; i >= 1; i--){
        
//         let res = sum / i
//         arr.push(res)
//     }
//     return arr
// }
// console.log(getDivision(24))

// function reversString(str) {
//     let strin = str.split('').reverse().join('')
//    return strin
// }
// console.log(reversString('Море'))

//Задача 5

// function delElem(elem, arr) {
//     let myIndex = arr.indexOf(elem)
//     if (myIndex !== false) {
//         arr.splice(myIndex, 1)
//     }
//     return arr
// }
// let num = 1
// let delArr = [1, 2, 3, 4, 5]
// console.log(delElem(num, delArr))


// function func(num) {
//     let arr = []
//     for (let i = 1; i <= num; i += 1) {
//         arr.push(i)
//     }
//     return arr
// }
// console.log(func(9))

// function func(from, to) {
//     let arr = []
//     for (let i = from; i <= to; i += 1){
//         arr.push(i)
//     }
//     return arr
// }
// console.log(func(2, 12))

//                        Флаги в функциях JavaScript

// let num = 31;

// let flag = true;
// for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//
// 		flag = false;
// 		break;
// 	}
// }

// console.log(flag);

// function isPrime(num) {
//     let flag = true;
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             flag = false;
//             break;
//         }
//     }
	
//     return flag;
// }
// console.log(isPrime(10));
// console.log( isPrime(31) );

// function func(arr) {
//     for (let elem of arr) {
//         if (elem % 2 !== 0) {
//             return false
//         }
        
//     }
//     return true
// }
// console.log(func([2, 4, 6, 8]))

// function func(num) {
//     let arr = []
//     arr.push(num)
        
//     for (let elem of arr) {
//         if (elem % 2 == 0) {
//             return false
//         }
//     }
//     return true
// }
// console.log(func(555))

// function func(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < i; j++){
//             if (arr[j] === arr[i]) {
//                 return true
//             }
//         }
//     }
//     return false

// }
// console.log(func([1, 2, 2, 3, 4]))

//  Логические операторы без if в функциях JavaScript

// function func(a, b) {
// 	if (a == b) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// function func(a, b) {
//     return a == b
// }
// console.log(func(1, 1))

//              Поиск ошибок в коде с функциями JavaScript

// function func1(num1) {
// 	return num1
// }
// function func2(num2) {
// 	return num2
// }

// console.log( func1(3) + func2(5) );

// function sum(arr) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem;
		
//     }
//     return res;
// }

// alert(sum([1, 2, 3, 4, 5]));

// function func1() {
// 	return 3;
// }
// function func2() {
// 	return 5;
// }

// console.log( func1() + func2() );

// let arr = [1, 2, 3, 4, 5]

// alert(sum(arr));

// function sum(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
	
// 	return sum;
// }

// let res = sum([1, 2, 3, 4, 5]);
// alert(res);

// function sum(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += elem;
//     }
//     return sum
// }

// function add(num) {
// 	if (num <= 9) {
// 		return '0' + num;
// 	}else{return num}
// }
// console.log(add(7))

// let arr = [1, 2, 3, 4, 5];
// let summ = sum(arr);
// console.log(summ);

// function sum(arr) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem;
// 	}
	
// 	return res;
// }

// let num = 12345;
// let res = getDigitsSum(num);
// console.log(res);

// function getDigitsSum(num) {
// 	let str = String(num)
// 	let arr = str.split('')
// 	let sum = 0
// 	for (let i = 0; i <= arr.length; i += 1) {
// 		sum += i
// 	}
// return sum
// }

//    Правильное использование функций JavaScript

// let result = []
// for (let i = 1; i <= 100; i++) {
//     if (isPrime(i)) {
//         result.push(i)
//     }
// }console.log(result)


// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			return false;
// 		}
// 	}
	
// 	return true;
// }

// let result = [];
// let arr = [1524, 1321, 4563, 7144, 2879];

// for (let elem of arr) {
// 	if (checkDigitsPairsSum(elem)) {
// 		result.push(elem);
// 	}
// }

// console.log(result);

// function checkDigitsPairsSum(num) {
// 	let str = String(num);
// 	let sum1 = Number(str[0]) + Number(str[1]);
// 	let sum2 = Number(str[2]) + Number(str[3]);
	
// 	return sum1 == sum2;
// }



// let arr = []
// let res = []
// for (let i = 1; i <= 2030; i += 1) {
// 	arr.push(i)
	
// }
// for (let elem of arr) {
// 	if (getDigitsSum(elem) == 13) {
// 		res.push(elem)
// 	}
// }
// console.log(res)

	

// function getDigitsSum(num) {
// 	let sum = 0;
// 	let digits = String(num).split('');
	
// 	for (let digit of digits) {
// 		sum += Number(digit);
// 	}
	
// 	return sum;
// }
//С помощью приведенной функции getDigitsSum найдите все года от 1 до 2030, сумма цифр которых равна 13.

// let nums = [123, 456, 789];

// let result = [];
// for (let num of nums) {
// 	result.push(String(num).split('').reverse().join(''));
// }

// console.log(result); // выведет [321, 654, 987]

// let nums = [123, 456, 789]
// console.log(arrReverse(nums))

// function arrReverse(arr) {
//     let result = []
//     for (let num of arr) {
//         result.push(String(num).split('').reverse().join(''))
//     }
//     return result
// }

// let num1 = 234;
// let num2 = 531;

// let digits1 = String(num1).split('');
// let digitsSum1 = 0;
// for (let digit1 of digits1) {
// 	digitsSum1 += Number(digit1);
// }

// let digits2 = String(num1).split('');
// let digitsSum2 = 0;
// for (let digit2 of digits2) {
// 	digitsSum2 += Number(digit2);
// }

// if (digitsSum1 == digitsSum2) {
// 	alert('суммы цифр совпадают');
// } else {
// 	alert('суммы цифр не совпадают');
// }

// let num1 = 234;
// let num2 = 531;
// if (func(num1) == func(num2)) {
//     alert('Сумма цифр совпадают!!!')
// }
// else { alert('Сумма цифр не совпадают !!') }


// function func(comparison) {
//     let arr = String(comparison).split('')
//     let sum = 0
//     for (let elem of arr) {
//         sum += Number(elem)
//     }
//       return sum
    
// }
// let nums = [12, 24, 35, 14];

// for (let num of nums) {
// 	console.log(num + ': ' + getDivisors(num).join(', '));
// }

// function getDivisors(num) {
// 	let result = [];
	
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			result.push(i);
// 		}
// 	}
	
// 	return result;
// }

            // Комбинация вспомогательных функций JavaScript

// let num = 12345;

// console.log(getSum(getDigits(num)))

// function getDigits(num) {
// 	return String(num).split('');
// }

// function getSum(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += Number(elem);
// 	}
	
// 	return sum;
// }

// console.log( getAvg(getDivisors(24)) );

// // Нахождение среднего арифметического:
// function getAvg(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
	
// 	return sum / arr.length;
// }

// // Нахождение массива делителей числа:
// function getDivisors(num) {
// 	let result = [];
	
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			result.push(i);
// 		}
//     }
//     return result
// }
// console.log(getDivisors(24))

// Вспомогательные функции внутри других функций в JavaScript


// let arr = [12, 19, 28, 13, 14, 345];
// let result = [];

// function inRange(num) {
// 	let sum = getSum(getDigits(num));
// 	return sum >= 1 && sum <= 9;
// }

// function getSum(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += Number(elem);
// 	}
	
// 	return sum;
// }

// function getDigits(num) {
// 	return String(num).split('');
// }

// for (let elem of arr) {
// 	if (inRange(elem)) {
// 		result.push(elem);
// 	}
// }

// console.log(result);

        //    Дружественные числа на JavaScript

// function isFreindly(num1, num2) {
// 	let sum1 = getSum(getOwnDivisors(num1));
// 	let sum2 = getSum(getOwnDivisors(num2));
	
// 	if (sum1 == num2 && sum2 == num1) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(isFreindly(220, 284))

// function getOwnDivisors(num) {
//     let arr = []
//     for (let i = 1; i < num; i++) {
//         if (num % i == 0) {
//            arr.push(i)
//         }
//     }
//     return arr
// }

// function getSum(arr) {
//     let sum = 0
//     for (let elem of arr) {
//         sum += elem
//     }
//     return sum
// }

//  Задача 4, 5 - не решена!!!!

// Пересечение массивов на JavaScript

// let arr1 = [1, 2, 3];
// let arr2 = [2, 3, 4, 5];

// function getInt(arr1, arr2) {
// 	let result = [];
	
// 	for (let elem of arr1) {
// 		if (inArray(elem, arr2)) {
// 			result.push(elem);
// 		}
// 	}
	
// 	return result;
// }

// function inArray(elem, arr){
// 	return arr.indexOf(elem) !== -1;
// }

// console.log( getInt(arr1, arr2) );

//                                                    Разность массивов на JavaScript

// function getDiff(arr1, arr2){
// 	let diff1 = getFirstDiff(arr1, arr2);
// 	let diff2 = getFirstDiff(arr2, arr1);
	
// 	return [].concat( diff1, diff2 );
// }

// function getFirstDiff(arr1, arr2){
// 	let result = [];
	
// 	for (let elem of arr1) {
// 		if (!inArray(elem, arr2)) {
// 			result.push(elem);
// 		}
// 	}
	
// 	return result;
// }

// function inArray(elem, arr){
// 	return arr.indexOf(elem) !== -1;
// }

// console.log( getDiff([1, 2, 3], [2, 3, 4, 5]) ); // выведет [1, 4, 5]

// зАКРЕПЛЕНИЕ МАТЕРИАЛЛА









