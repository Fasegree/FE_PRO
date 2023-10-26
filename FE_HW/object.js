// Напишите класс NumberArray, который будет содержать сво-во array. В качестве значения св-ва необходимо сформировать массив с числовыми типами.
class NumberArray{
	constructor(arr){
		this.array = arr
	}
	// К этому классу напишите список методов: 
	// getLastElem(). Метод должен всегда возвращать последний элемент массива
	getLastElem(){
		return this.array[this.array.length - 1]
	}
	// getAbs(). Метод должен возвращать абсолютное значение разницы первого и последнего элемента 
	getAbs(){
		return Math.abs(this.array[0] - this.getLastElem())
	}
	// getSum(). Метод должен возвращать сумму всех элементов сво-ва array
	getSum() {
		return this.array.reduce((acc, el) => acc+el, 0)
	}
		// setArray(n). Метод должен переопределить сво-во array на новый массив, где каждый элемент будет умножен на аргумент n.
		setArray(n){
			return this.array = this.array.map(el => el * n)
		}
		// createObject(). Метод должен вернуть объект c количеством сво-йств равному количеству элементов массива сво-ва array. В качестве ключа сформируйте значение elem{n} 
		createObject(){
			return this.array.reduce((acc, el, i) => {
				 acc[`elem${i+1}`] = el
				 return acc
			},{})
		}

}

let arr = new NumberArray([10,20,30,40])
let arr1 = new NumberArray([1,2,3])
console.log(arr.createObject());
console.log(arr1.createObject());
// console.log(arr);
// console.log(arr1);


// Пример:
// Пример сво-ва
// array: [10,20,30,40]

// Пример результата

// {
// elem1: 10,
// elem2: 20,
// elem3: 30,
// elem4: 40
// }

// Обратите внимание на то, что к сво-вам объекта можно обращаться через квадратные скобки, например, obj[‘name’] (аналог obj.name)
