
const fibonschi = (n) =>{
	let a=0
	let b=1
	let res = 0
		for (let i = 1; i < n; i++) {
		let c = a+b
		a=b
		b=c
			console.log(`a: ${a}     b: ${b}     c: ${c}`);
			
		}
		return b
}

// console.log(fibonschi(10))






function fibonacci(n) {
 if (n === 1) {
    return 1; // Фибоначчи(1) = 1
  } else {
		console.log(n);
    // Фибоначчи(n) = Фибоначчи(n-1) + Фибоначчи(n-2)
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
// console.log(fibonacci(10))




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

																			//РЕШЕНИЕ 1  Не выводит последний элемент, потому что не с чем сравнивать
function findK(arr1, arr2, k){
	let i = 0, j = 0
	let index = 0;
	do {
		if (arr1[i]>arr2[j]) {
			
			if(index===k)  return console.log("k- element = "+arr2[j]);
			j++
		}
		else{
			if(index===k) return console.log('k- elem ='+arr1[i]);
			i++
		}
		index++
		// console.log(i, j, index);
	}while ((i < arr1.length && j < arr2.length ) )
	if(index!==k) console.log('No index');
}

let arr1 =  [100, 112, 256, 349, 770]
let arr2 = [ 72, 86, 113, 119, 265, 445, 892]
mergeSortedArrays(arr1, arr2, 0);
mergeSortedArrays(arr1, arr2, 1);
mergeSortedArrays(arr1, arr2, 2);
mergeSortedArrays(arr1, arr2, 3);
mergeSortedArrays(arr1, arr2, 4);
mergeSortedArrays(arr1, arr2, 5);
mergeSortedArrays(arr1, arr2, 6);
mergeSortedArrays(arr1, arr2, 7);
mergeSortedArrays(arr1, arr2, 8);
mergeSortedArrays(arr1, arr2, 9);
mergeSortedArrays(arr1, arr2, 10);
mergeSortedArrays(arr1, arr2, 11);
mergeSortedArrays(arr1, arr2, 12);


//---------------------------------------------------------------- РЕШЕНИЕ 2 Рабочий вариант
function mergeSortedArrays(arr1, arr2,k) {
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
