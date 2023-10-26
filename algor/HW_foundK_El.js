//--------------------
// Имея два отсортированных массива размера m и n соответственно, вам нужно найти элемент, который будет находиться на k-й позиции в конечном отсортированном массиве.


// Массив 1 - 100 112 256 349 770
// Массив 2 - 72 86 113 119 265 445 892
// к = 6
// Вывод : 256


// Окончательный отсортированный массив -
// 72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892
// 6-й элемент этого массива равен 256.


// нельзя использовать метод  shift(), slice() и другие.
// использование push() и length допустимо

//РЕШЕНИЕ 1  Сложность линейная O(n)
function findK(arr1, arr2, k) {
	let i = 0, j = 0
	let index = 0;
	do {
		if (arr1[i] > arr2[j]) {

			if (index === k) return console.log("k- element = " + arr2[j]);
			j++
		}
		else {
			if (index === k) return console.log('k- elem =' + arr1[i]);
			i++
		}
		index++
	
	} while ((i < arr1.length && j < arr2.length))

		while (i< arr1.length) {
			if (index === k) return console.log('k- elem =' + arr1[i]);
			i++
			index++
		}

		while (j < arr2.length) {
			
			if (index === k) return console.log("k- element = " + arr2[j]);
			j++
			index++
		}
	if (index !== k) console.log('No index');
}

// Объявление переменных
let arr1 = [100, 112, 256, 349, 770]
let arr2 = [72, 86, 113, 119, 265, 445, 892, 899, 900, 905, 908, 912]

// Вызов функции
for (let n = 0; n < 19; n++) {
	console.log(`n = ${n}`);
	findK(arr1, arr2, n)
	
}


//---------------------------------------------------------------- РЕШЕНИЕ 2 
function mergeSortedArrays(arr1, arr2, k) {
	const mergedArray = [];
	let i = 0;
	let j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			mergedArray.push(arr1[i]); 
			i++;
		} else {
			mergedArray.push(arr2[j]);
			j++;
		}
	}

	// Добавляем оставшиеся элементы, если есть
	while (i < arr1.length) {
		mergedArray.push(arr1[i]);
		i++;
	}

	while (j < arr2.length) {
		mergedArray.push(arr2[j]);
		j++;
	}

	mergedArray[k] ? console.log(mergedArray[k]) : console.log("index not found");
}



// Вызов функции
for (let n = 0; n < 19; n++) {
	console.log(`n = ${n}`);
	mergeSortedArrays(arr1, arr2, n);
	
}



