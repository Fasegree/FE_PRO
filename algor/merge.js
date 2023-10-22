

//----------------------------------------------------------------------------------------------------------

function merge(arr1, arr2) {
  let result = [];
  let arr1Index = 0;
  let arr2Index = 0;

  while (arr1Index < arr1.length && arr2Index < arr2.length) {
    if (arr1[arr1Index] < arr2[arr2Index]) {
      result.push(arr1[arr1Index]);
      arr1Index++;
    } else {
      result.push(arr2[arr2Index]);
      arr2Index++;
    }
  }

  return result.concat(arr1.slice(arr1Index), arr2.slice(arr2Index));
}

function mergeSort(arr) {
  if (arr.length <= 1) {
		console.log(arr);
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const arr1 = arr.slice(0, middle);
  const arr2 = arr.slice(middle);

  return merge(mergeSort(arr1), mergeSort(arr2));
}

const arr1 = [5, 1, 7, 9, 4];
const arr2 = [8, 3, 2, 6, 0];

const mergedArray = mergeSort(arr1.concat(arr2));
console.log(mergedArray);



//-----------------------------------------------------------------------------------------------------------------

// const arr1 =[5,1,7,9,4]
// const arr2 =[8,3,2,6]

// function slice(arr1,arr2){
// 	let result = []
// let tmp_arr1, tmp_arr2 , tmp_arr3 , tmp_arr4 = []
// 	if (arr1.length > 1){
// 		console.log('-------------------------------------start A-----------------------------------------------------');
// 		tmp_arr1 = arr1.slice(0, (Math.round(arr1.length / 2)))
// 		tmp_arr2 = arr1.slice( (Math.round(arr1.length / 2)), arr1.length)
// 		console.log('a'+tmp_arr1, tmp_arr2);
// 		slice(tmp_arr1, tmp_arr2);
// 	} else {
// 		console.log('-------------------------------------end A-----------------------------------------------------');
// 		if(arr1<arr2){
// 			result.push(arr1,arr2)
// 		} else{
// 			result.push(arr2,arr1)
// 		}
// 		console.log('   res  a1 = '+arr1+'    a2 = '+arr2);
// 	}

// 	if(arr2.length>1){
// 		console.log('            Start  B');
// 		tmp_arr3 = arr2.slice(0, (Math.round(arr2.length / 2)))
// 		tmp_arr4 = arr2.slice( (Math.round(arr2.length / 2)), arr2.length)
// 		console.log('b                   '+tmp_arr3, tmp_arr4);

// 		slice(tmp_arr3,tmp_arr4);
// 	}
// 	else {
// 		if(arr1<arr2){
// 			result.push(arr1,arr2)
// 		} else{
// 			result.push(arr2,arr1)
// 		}
// 		console.log('            end                B');
// 	}
// 	console.log(result);

// }
// slice(arr1,arr2)


