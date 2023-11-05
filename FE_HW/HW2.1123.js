//ДЗ
// Создайте класс Delivery со свойствами name и phone. Помимо описанных свойств, добавьте геттер validPhone, которое проверяет значение свойства phone на вхождение знака + в начале строки. Если знак отсутствует, геттер validPhone должно принять булевое значение false, в противном случае — true. Создайте экземпляр класса Delivery и в качестве аргументов конструктора укажите значения переменных name и phone. 
// Пример значений переменных: 
// let name = "Pizza" 
// let phone = "81234567890" 

// Пример результата: false

class Delivery{
	constructor(name, phone){
		this.name = name,
		this.phone = phone
	}
	get validPhone(){
		return (this.phone[0]==='+')
	}
}

let deliv1 = new Delivery('Pizza','81234567890')
let deliv2 = new Delivery('Pizza','+81234567890')
console.log(deliv1.validPhone);
console.log(deliv2.validPhone);

// В программе создан класс Permissions, свойства которого описывают права пользователей на редактирование статей на сайте. Создайте новый класс Users, который наследуется от класса Permissions. Дополнительно в классе Users добавьте свойство name, значение которого класс принимает в качестве аргумента конструктора.


// Входные данные:
class Permissions {
    constructor() {
        this.create = false
        this.read = true
        this.update = false
        this.remove = false
    }
}
class Users extends Permissions{
	constructor(name){
		super()
		this.name = name
	}

}
let u1 = new Users('Alex')
console.log(u1);

// Все печатные издания имеют название, год издания, состоят из определенного количества страниц, а ещё могут портиться. 

// Создайте класс PrintEditionItem со свойствами: name, releaseDate, pagesCount, state, type. 

class PrintEditionItem{
	constructor(name, releaseDate, pagesCount){
		this.name = name,
		this.releaseDate = releaseDate,
		this.pagesCount = pagesCount,
		this.state = 100,
		this.type = null
	}
	 fix(){
		return this.state *=1.5 
	}
	set setState(number){
		if(number<0){
			this.state=0
		}else if(number>100){
			this.state=100
		} else{
			this.state=number
		}
	}
	get getState(){
		return this.state
	}
}


//// Конструктор класса должен принимать название (name), дату выпуска (releaseDate) и количество страниц (pagesCount) в качестве аргумента. Состояние (state) по умолчанию установите равным 100, тип type пока должен быть равен null. . 
//// Испорченное издание можно подклеить и этим улучшить его состояние. Создайте метод fix(), увеличивающий state в полтора раза. Метод не должен принимать аргументов. 
// Нельзя улучшить новое издание и бесполезно подклеивать полностью уничтоженное. Создайте «сеттер» для свойства state, принимающий в качестве аргумента новое состояние печатного издания (число). 
// Если новое состояние меньше 0, «сеттер» должен записать в свойство state значение 0. 
// Если новое состояние больше 100, должно быть записано значение 100. В остальных случаях в свойство state записывается переданное в «сеттер» значение. 

// Создайте «геттер», который читает значение свойства state. 

class Magazine extends PrintEditionItem{
	constructor(){
		super()
		this.type = 'magazine'
	}
}
// Создайте класс Magazine, который будет наследоваться от класса PrintEditionItem. Конструктор класса должен принимать такие же параметры, как и класс-родитель. От базового печатного издания журнал отличается только типом. Значение свойства type равно "magazine". 

class Book extends PrintEditionItem{
	constructor(author){
		super()
		this.author = author
		this.type = 'book'
	}
}
// Создайте класс Book, наследующийся от класса PrintEditionItem. Конструктор класса должен принимать такие же параметры, как и класс-родитель, а также имя автора книги author. Значение свойства type равно "book".

// Создайте классы NovelBook для романов, FantasticBook для фантастических произведений и DetectiveBook для детективов, наследующиеся от класса Book. Значения свойства type равны "novel", "fantastic" и "detective" соответственно.
class NovelBook extends Book{
	constructor(){
		this.type = 'novel'
	}
}
class FantasticBook extends Book{
	constructor(){
		this.type = 'fantastic'
	}
}
class DetectiveBook extends PrintEditionItem{
	constructor(){
		this.type = 'detective'
	}
}


// Также рекомендуется выполнить список задач из сервиса codewars
// https://www.codewars.com/
// Необходимо зарегистрироваться и выполнить список задач на функции:

// https://codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript
// Создайте метод, чтобы проверить, написана ли строка ЗАГЛАВНЫМИ БУКВАМИ.

// Примеры (ввод -> вывод)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

String.prototype.isUpperCase = function() {
	let result = true
	for (let i = 0; i < this.length; i++) {
		
		
		if ((this[i].charCodeAt() >= 97 && this[i].charCodeAt() <=122)) {return false}
	}
		
	
	return result
}

let str ='DDDD'
// console.log(str.isUpperCase())

// https://www.codewars.com/kata/58fa273ca6d84c158e000052/train/javascript
// Определите общее количество цифр в целом числе ( n>=0), заданном в качестве входных данных функции. Например, 9 — однозначное число, 66 — 2-значное, а 128685 — 6-значное. Будьте осторожны, чтобы избежать переполнения/недополнения.
function digits(n) {
  return n.toString().length
}
digits(66)
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
// Завершите решение так, чтобы строка разбивалась на пары по два символа. Если строка содержит нечетное количество символов, необходимо заменить отсутствующий второй символ последней пары подчеркиванием («_»).

// Примеры:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function abc(str){
	let result=[];
	for (let i = 0; i < str.length-1; i+=2) {
		 result.push(str[i]+str[i+1])
			
	}
	(str.length%2) ? result.push(str[str.length-1]+'_') : false
	console.log(result);
}

abc('abc')
abc('abcd')
// https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript


// Измените kebabizeфункцию так, чтобы она преобразовывала строку регистра верблюда в регистр кебаба.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Примечания:

// возвращаемая строка должна содержать только строчные буквы

let str0 = 'CAMEL'; // res 'c-a-m-e-l'
let str1 = 'StritDritGoo';  // strit-drit-Goo
let str2 = 'camelsHave3Humps';  // camels-have-humps
let str3 = 'CamelsHave3Humps';  // camels-have-humps

function kebabize(str){
let lowerStr = str.toLowerCase();
result='';
if(str === str.toUpperCase() ){
for (let i = 0; i < str.length-1; i++) {
     (str.charCodeAt(i) >=65 && str.charCodeAt(i)<=90) ? result +=str[i]+'-' : false
}
return (result+str[str.length-1]).toLowerCase()
} else {

    result +=str[0]
    for (let i = 1; i < str.length; i++) {
        if(str[i] === str[i].toUpperCase() && str.charCodeAt(i) >=65 && str.charCodeAt(i)<=90){ // if (str[i].charCodeAt(0) >=65 && str[i].charCodeAt(0)<90)
            result +='-'+str[i]
        }
        else{
            (str.charCodeAt(i) >=97 && str.charCodeAt(i)<=122) ?   result +=str[i] : result 
        }
    }
    return result.toLowerCase()

}
}
console.log(kebabize(str0));
console.log(kebabize(str1));
console.log(kebabize(str2));
console.log(kebabize(str3));