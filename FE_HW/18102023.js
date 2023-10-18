// Напишите функцию checkDate() которая в консоль отобразит количество дней до конца текущего месяца. 
// Примечание: инициализация дат должна быть внутри функции
function checkDate() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const lastDayOfCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Последний день текущего месяца
console.log(new Date(currentYear, currentMonth + 1, 2));
  const daysLeft = lastDayOfCurrentMonth - currentDate.getDate();

  console.log(`До конца месяца осталось ${daysLeft} дней.`);
}

checkDate();
// Создайте функцию isItFridayToday(), которая выводит сообщение согласно условию:
// Если текущая дата определит пятницу, функция должна в консоль отобразить ответ “Сегодня пятница”!
// Если пятница была вчера - “Пятница была вчера”
// Если пятница будет завтра - “Завтра пятница!”
// Иначе необходимо вывести “Пятница будет через n дней”, где n - это количество дней до пятницы.

function isItFridayToday() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // Получаем день недели (0 - воскресенье, 1 - понедельник, ..., 6 - суббота)

	switch (dayOfWeek) {
		case 5:
			console.log("Сегодня пятница!");
			break;
		case 4:
			console.log("Завтра пятница!");
			break;
			case 6:
				console.log("Пятница была вчера");
				break;
	
		default:
			const daysUntilFriday = dayOfWeek < 5 ? 5 - dayOfWeek : 5 + (7 - dayOfWeek);
			console.log(`Пятница будет через ${daysUntilFriday} дней`);
			break;
	}
  
}

// isItFridayToday();

// Предусмотрите вывод 4 пункта (дня, дней)

// Задан массив prices, передающий элементы строкового типа. Напишите функцию getInfo(prices), которая получает массив и возвращает количество элементов, которые начинаются на “Цена” и количество элементов, которые заканчиваются на “$” в виде массива по примеру:

// Пример:
let prices = [ 
'Цена товара - 1200$', 
'Стоимость - 500$', 
'Цена не определена', '9999',
'Ценовая категория - больше 300$',
'Цена за услугу 500 EUR',
 ]
function getInfo(prices){
	let  price =0;
	let signDollar=0;
 prices.forEach(el=> {
	 if (el.includes('Цена')) price++
	if (el.includes('$')) signDollar++
})
return [price, signDollar]
}
// getInfo(prices)
console.log(getInfo(prices))

// Результат: [3,3]

// Задан массив arrays. Сформируйте два новых массива phones и emails, которые будут содержать данные по примеру: 
let arrays = [ 
'89840959944 exampleonemain@mail.ru', 
'+79840959933 forreason@yandex.net', 
'somemail@mail.ru', 
'89840959900 example@gmil.ru', 
'+79840959911', 
'grandthere@mail.ru',
'jetpackfor@gmail.ru',
 '89840959922 some@yandex.com',
 ] 
function getPhones(arr){
	let phones = []
	let emails = []
	arr.forEach(el => {
		if(el.includes(' ')){
			let [phone, email] = el.split(' ');
				if (phone ){
				phones.push(phone)
			}
				if (el && el.includes('@')){
				emails.push(email)
			}
		 } else 
		 if (el.includes('@')){
			 emails.push(el)
			}
		 else
			phones.push(el)
		
	})
	console.log(emails);
	console.log(phones);
	
}
console.log(getPhones(arrays))
// Результат: ['89840959944','+79840959933','89840959900','+79840959911','89840959922'] ['exampleonemain@mail.ru','forreason@yandex.net','somemail@mail.ru','example@gmil.ru','grandthere@mail.ru','jetpackfor@gmail.ru','some@yandex.com']


// Задан массив cards, передающий элементы строкового типа. Необходимо зашифровать номера карт по следующему правилу: заменить всю строку на 5 символов “*”, оставив первые 4 и последние 4 цифры.

// Пример:
	let phones = [ 
'4000 0012 0056 9499', 
'4000 0013 5456 7379', 
'4000 0014 1456 9869', 
'4000 0015 3466 7859', 
'4000 0016 3556 6899', 
'4000 0017 4456 4699'
]
function shifrCadr(arrays){
	let result = []
	arrays.forEach(el => {
		let card = el.slice(0,4)+'*'.repeat(5)+el.slice(-4)
		result.push(card)
	})
	return result
}
console.log(shifrCadr(phones));

// Результат: [
// '4000*****9499',
// '4000*****7379',
// '4000*****9869',
// '4000*****7859',
// '4000*****6899',
// '4000*****4699'
// ]


