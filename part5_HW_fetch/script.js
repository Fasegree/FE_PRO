// смотри part 3 )CRUD fetch APP

// Напишите функцию getTodos(username), которая в качестве аргумента принимает никнейм пользователя (/users) и выводит список его задач (/todos).
// В качестве ответа в консоль выведите массив с задачами указанного пользователя
const root_url = 'https://jsonplaceholder.typicode.com'

async function getTodos(username){
	let urlUsers = `${root_url}/users`;
	let resUsers = await fetch(urlUsers);
	let dataUser = await resUsers.json();
	let user = dataUser.find(elem => elem.username === username)
	console.log(user);

	let urlToDos = `${root_url}/todos`;
	let resTodos = await fetch(urlToDos);
	let dataTodo = await resTodos.json();
	let userTodo = dataTodo.filter(elem => elem.userId === user.id)
	console.log(userTodo);
}
		///// или так  РЕШЕНИЕ 2 поиск на стороне бекенда
async function getTodos(username){
	let urlUsers = `${root_url}/users?username=${username}`;
	let resUsers = await fetch(urlUsers);
	let dataUser = await resUsers.json();

	console.log(dataUser);

	let urlToDos = `${root_url}/todos?userId=${dataUser[0].id}`;
	let resTodos = await fetch(urlToDos);
	let dataTodos = await resTodos.json();

	console.log(dataTodos);
}
// getTodos('Elwyn.Skiles')

// Напишите функцию getСomments(title), которая в качестве аргумента принимает заголовок поста (/posts) и выводит список всех его комментариев (/comments).
// В качестве ответа в консоль выведите массив с комментариями. Если у заданного поста комментариев нет, выведите в консоль соответствующее сообщение.

async function getСomments(title){
	let resTitle = await fetch(`${root_url}/posts?title=${title}`)//?title=title
	let dataTitle = await resTitle.json();
	// const titleRes = dataTitle.find(elem => elem.title === title)
	// console.log(dataTitle);   // .id

	let resComments = await fetch(`${root_url}/comments?postId=${dataTitle[0].id}`);
	let dataComments = await resComments.json();
	dataComments.length>0 ? console.log(dataComments): "No comments";     //.postId
}

// getСomments('qui qui voluptates illo iste minima') //id 94



// Напишите функцию getPhotoByNickName(username), которая в качестве аргумента принимает никнейм пользователя (/users) и выводит все его фотографии (/photos). В качестве ответа выведите в консоль массив со всеми фотографиями указанного пользователя.

async function getPhotoByNickName(username){
	let resUser = await fetch(`${root_url}/users?username=${username}`);
	let dataUser = await resUser.json();
	// console.log(dataUser[0].id);

	let resPhotos = await fetch(`${root_url}/photos/?albumId=${dataUser[0].id}`); /// по чем фильтровать      /albums
	let dataPhotos = await resPhotos.json()
	dataPhotos.forEach(element => {
		console.log(element.url);
	});
	
}
getPhotoByNickName('Bret')