const root = document.querySelector('#root');
function getLocalStorage (){
	return JSON.parse(localStorage.getItem('names'));
}
function setNamesLocalstorage(array) {
 localStorage.setItem('names', JSON.stringify(array))
}
let namesLocalstorage;

let names = [
	{id: 1, name: 'Steven', image: 'https://i.ibb.co/tXqmKKR/1.png', salary: '5000'},
	{id: 2, name: 'Neena', image: 'https://i.ibb.co/yYxK3cq/2.png', salary: '10000'},
	{id: 3, name: 'John', image: 'https://i.ibb.co/SNqFDbB/3.png', salary: '4500'},
	{id: 4, name: 'Rogers', image: 'https://i.ibb.co/WnG0fVZ/4.png', salary: '3400'},
	{id: 5, name: 'Cevin', image: 'https://i.ibb.co/vdQK54J/6.png', salary: '500'},
	{id: 6, name: 'Alshey', image: 'https://i.ibb.co/wSJN6db/5.png', salary: '1210'},
	{id: 7, name: 'Milki', image: 'https://i.ibb.co/JpnDnH5/7.png', salary: '1210'},
	{id: 8, name: 'Polar', image: 'https://i.ibb.co/SnNLhgg/9.png', salary: '1210'},
	{id: 9, name: 'Grindell', image: 'https://i.ibb.co/fGH3RPW/8.png', salary: '1210'},
];

const images = [
	'https://i.ibb.co/tXqmKKR/1.png',
	'https://i.ibb.co/yYxK3cq/2.png',
	'https://i.ibb.co/SNqFDbB/3.png', 
	'https://i.ibb.co/WnG0fVZ/4.png',
	'https://i.ibb.co/wSJN6db/5.png',
	'https://i.ibb.co/vdQK54J/6.png',
	'https://i.ibb.co/JpnDnH5/7.png',
	'https://i.ibb.co/fGH3RPW/8.png',
	'https://i.ibb.co/SnNLhgg/9.png',
]


function renderCards(arr){
	// add to LS when LS is not null
	if (!getLocalStorage()) {
		namesLocalstorage = arr;
		setNamesLocalstorage(arr);
	} else {
		namesLocalstorage = getLocalStorage();
	}
	root.innerText ='';
	namesLocalstorage.forEach(elem => render(elem));

	const header = document.createElement('header')
	const callFormBtn = document.createElement('button')
	callFormBtn.innerText = 'Add new user'
	root.prepend(header);
	header.append(callFormBtn);

	callFormBtn.addEventListener('click', () => {
		console.log(createForm().classList.value == "modalWindow hiden");
		(createForm().classList.value == "modalWindow hiden") ? 	createForm().classList.remove('hiden') : createForm().classList.add('hiden')
		;
		// createForm().classList.remove('hiden')
	})
}

function render(elem){

	// ------create elements -----



	const userCard = document.createElement('div')

	// Create IMG
	const userImg = document.createElement('img');
	userImg.src = elem.image;
	
	const data = document.createElement('div');
	
	const span1 = document.createElement('span');
	const labelName = document.createElement('h3');
	const name = document.createElement('p')
	const span2 = document.createElement('span');
	const labelSalary = document.createElement('h3')
	const salary = document.createElement('p')
	
	// add classList
	userCard.classList.add('userCard');
	data.classList.add('data');

		// full value
	labelName.innerText = 'Name:'
	name.innerText = elem.name
	labelSalary.innerText = 'Salary:'
	salary.innerText = `$ ${elem.salary}`;

	data.append(span1,span2)
	span1.append(labelName, name)
	span2.append(labelSalary, salary)


	root.append(userCard)
	userCard.append( userImg, data)
	let elem1 = elem.id

	// delete card by 2 Click
	userCard.addEventListener('dblclick', (elem1) =>{
		let userId = elem.id
		namesLocalstorage = getLocalStorage();
		namesLocalstorage = namesLocalstorage.filter(el => el.id !=userId)
		setNamesLocalstorage(namesLocalstorage);
		(namesLocalstorage.length) ? false : setNamesLocalstorage(names)
		renderCards(names);
	} )


}

function createForm(){
			const formName = document.createElement('h2')
			const modalwindow = document.createElement('div')
			const form = document.createElement('form');
			const nameInput = document.createElement('input')
			const salaryInput = document.createElement('input')
			const addUserBtn = document.createElement('button')
			
			formName.innerText ='Add new user'
			nameInput.placeholder = 'name';
			salaryInput.placeholder =  'salary'
			addUserBtn.innerText = 'Send'
			modalwindow.classList.add('modalWindow')
			modalwindow.classList.add('hiden')

			document.body.prepend(modalwindow);
			modalwindow.append(form);
			form.append(formName, nameInput, salaryInput, addUserBtn);
				// close modal window
			modalwindow.addEventListener('click', (e) =>{
						(e.target.classList.value === 'modalWindow') ? modalwindow.classList.add('hiden') : false
			});

			// add user in modal window
			addUserBtn.addEventListener('click', (event) => {
				event.preventDefault()
			
				if(nameInput.value !='' && salaryInput !='') {

					console.log("send");
				 const namesLocalstorage = [] = getLocalStorage();
				console.log(namesLocalstorage);
				const sortLS = namesLocalstorage.sort((a,b) => a.id - b.id)
				const newId = namesLocalstorage[namesLocalstorage.length-1].id + 1
				
				// floor ([0..1)  *8) => [0..7] => +1 generated random avatar
					const randomNumber = Math.floor(Math.random() * 8) + 1;				
					const newUser = {
						id: newId, 
						name: nameInput.value, 
						image: `${images[randomNumber]}`, 
						salary: salaryInput.value
					}
					namesLocalstorage.push(newUser);
					setNamesLocalstorage(namesLocalstorage);
					renderCards(namesLocalstorage)
					nameInput.value = ''
					salaryInput.value = ''
				} else alert('Add all fields')
				
			
			})
			return modalwindow;
}


// /function render
//---------------------------------



//------------- MAIN FUNKTION  ---------------------------
	renderCards(names);

//------------- MAIN FUNKTION  ---------------------------



// createForm();


	// Реализуйте форму дан контейнером для добавления новой карточки. Форма должна включать следующие данные: Имя и зарплата. Картинку и ID необходимо заполнить автоматически (автоинкремент или date.now())




