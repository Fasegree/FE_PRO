
// Завершить реализацию Динамического массива (если не завершили в классе).
//  добавьте метод поиска позиции элемента и удаления элемента по индексу
// исходник https://github.com/iksergey/algorithms-start/blob/main/part.206/ex01/Main.js



class MyArray {
  constructor() {
    this.storage = Array(2);
    this.index = 0;
  }

  oldAppend = (item) => {
    const count = this.storage.length;
    const temp = Array(count + 1);

    for (let i = 0; i < count; i++) {
      temp[i] = this.storage[i];
    }

    this.storage = temp;
    this.storage[count] = item;
  }

  append = (item) => {
    if (this.index === this.storage.length) {
      const count = this.storage.length;
      const temp = Array(2 * count);
      for (let i = 0; i < count; i++) {
        temp[i] = this.storage[i];
      }
      this.storage = temp;
    }
    this.storage[this.index++] = item;
  }


  print = () => {
    let result = '';
    for (let i = 0; i < this.index; i++) {
      result += `${this.storage[i]} `;
    }
    return result;
  }
}

const main = () => {
  let myArray = new MyArray();
  for (let i = 0; i < 8; i++) {
    myArray.append(i);
    console.log(myArray.print());
  }
};

main();

function delByIndex(arr,index){
	let res=[]
	for(let i=0;i<index; i++){
		res.push(arr[i])
	}
	for(let i=index; i<arr.length; i++){
		res.push(arr[i])
	}
	return res
	
}
// №2
// Постройте частотный словарь букв русского (или английского) алфавита. Текст может взять любой или этот https://github.com/iksergey/algorithms-start/blob/main/part.206/readme.md


// для решения можно использовать Array или Map ( на ваше усмотрение)..


// https://learn.javascript.ru/map-set


// const dict = Array(5).fill(({ key: '', value: '' }));

// for (const item of dict) {
//   console.log(item);
// }