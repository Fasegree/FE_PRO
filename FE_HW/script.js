//280823-09092023

// 	DESCRIPTION:1
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).


const array = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true];

	function countSheep(array){
		let count=0;
		for (const elem of array) {
			if (elem === true) count++
		}
		return `Task 1.\n Sheep = ${count}\n`
	}
	console.log(countSheep(array));


	//------------------
// 	DESCRIPTION:2
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function multiplied(value){

 return (typeof(value)!='string') ?  `Task 2. \n${value*50+6}\n` : `Task 2. \n error\n`
}

console.log(multiplied(1))
console.log(multiplied('string'))

	//------------------
// 	DESCRIPTION:3
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

function removeChars(string, array){
	let newString ='';
	for (let i = 0; i < string.length; i++) {
		const element = string[i];
		if(!array.includes(element)) {newString +=element}
		
	};

return `Task 3. \n${newString}\n`;
}

console.log(removeChars('codewars', ['a', 'e', 'i','o','u']))
// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"


// DESCRIPTION:4
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmiIf(weight, height) {
	const bmi =  weight / height**2;
	if(bmi>0 && bmi<=18.5){
		return `Task 4. \nUnderweight\n`
	} else if(bmi<=25) {
		return `Task 4. \n Normal \n` 
	} else if(bmi<=30) {
		return `Task 4. \n Overweight \n` 
	} else if(bmi>30) {
		return `Task 4. \n Obese \n`  
	} else return `Task 4. \n error \n`
}

// РЕШЕНИЕ 2//
function bmiSwitch(weight, height) {
	const bmi =  weight / height**2;
	switch (true) {
		case bmi >= 0 && bmi <= 18.5:
			return "Underweight"
		case bmi > 18.5 && bmi <= 25:
			return "Normal"
		case bmi > 25 && bmi <= 30:
			return "Overweight"
		case bmi >30:
			return "Obese"

	}
}
console.log(bmiIf(60, 1.7));

// DESCRIPTION:5
// This code does not execute properly. Try to figure out why.

function multiply(a, b){
 return  `Task 5. \n ${a * b} \n`// return
}

console.log(multiply(10,5))

// DESCRIPTION: 6
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord( bool ){
  return bool ? `Task 6. \n Yes \n`  : `Task 6. \n No \n`
}

console.log(boolToWord(false))

// DESCRIPTION:7
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

let summation = function (num) {
	let result = 0;
  for(let i=1; i<=num; i++){
		result +=i
	}
	return  `Task 7. \n Summation = ${result} \n`;
}
console.log(summation(8));

// DESCRIPTION: 8
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

function arrayPlusArray(arr1, arr2) {
	let newArray=[];
	let tmpArr = [];
// РЕШЕНИЕ 1//
switch (true) {
	case arr1.length === arr2.length:
		
		for (let i = 0; i < arr1.length; i++) {
			newArray[i] = arr1[i]+arr2[i];			
		}
		return  `Task 8. \n SummArr = [${newArray}] \n`;

	case arr1.length > arr2.length:
		
		for (let i = 0; i < arr2.length; i++) {
			newArray[i] = arr1[i]+arr2[i];			
		}
		tmpArr = arr1.slice(arr2.length,);
		
		newArray.splice(arr2.length,0,tmpArr);

		newArray.splice(arr2.length,0);
		return  `Task 8. \n SummArr = [${newArray}] \n`;

	case arr1.length < arr2.length:
		
		for (let i = 0; i < arr1.length; i++) {
			newArray[i] = arr1[i]+arr2[i];			
		}
		 tmpArr = arr2.slice(arr1.length,);
		
		newArray.splice(arr1.length,0,tmpArr);
		return  `Task 8. \n SummArr = [${newArray}] \n`;
		

	default:
		break;
}

	// //// РЕШЕНИЕ 2 // объединение масивов

	// arr1.forEach(element => {
	// 	newArray.push(element)
	// });
	// arr2.forEach(element => {
	// 	newArray.push(element)
	// });

	// /// РЕШЕНИЕ 3//// объединение масивов

	// newArray.push(arr1,arr2);

  // return  `Task 8. \n two arrays = ${newArray} \n`; 
}
console.log(arrayPlusArray([1,2,3], [0,8,1,9,5,7]))


// DESCRIPTION: 9
// Our football team has finished the championship.

function points(games) {
	let points = 0;
	for(let i=0; i<games.length;i++){
		const [ourScore, opponentScore] = games[i].split(":");
		if (ourScore > opponentScore) {
			points +=3
		}else if (ourScore == opponentScore){
			points +=1
		}
	}

  return `Task 9. \n Footbal: total score ${points}\n`;
}

const resultChampionship = ["3:1", "2:2", "1:1", "2:1", "0:0", "0:1", "4:2", "2:3", "0:1", "2:1"]

console.log(points(resultChampionship));



// DESCRIPTION:10
// Nathan loves cycling.
// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {

  return `Task 10. \n litres =  ${parseInt((time * .5))}\n` ;
}
console.log(litres(11.8));
