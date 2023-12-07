
import s from './AddForm.module.css'
export default function AddForm({ dataWeekList, setDataWeekList }) {

	// console.log(dataOfWeek['Monday']);
	// console.log(Object.keys(dataWeekList))

 // рендер в select дни недели
 	function renderDay() {
		return (
			<>
				{Object.keys(dataWeekList).map((day, i) => (
					<option key={i} name={day}>{day}</option>
				))}
			</>
		)
	}
// ----------------------------------------------------------
	// Добавление новой задачи прри клике на кнопку в форме
	function addNewTask(e){
		e.preventDefault()
		
		// сбор данных с формы
		const formData = new FormData(e.target);
    const newTask = {};
		formData.forEach((value, key) => {
			newTask[key] = value;
	});

	if(newTask.day && newTask.isImportant && newTask.title){

		// добавление id, превращение из строковой в булевую false
		newTask.id=Date.now()
		newTask.isImportant = newTask.isImportant==='false' ? false : true
	
		// Деструктуризация и добавление задачи в определенній день
		const {day, ...nTask} = newTask
		dataWeekList[day].push(nTask) 
		console.log(e);

		
		// обновление стейта
		setDataWeekList({...dataWeekList})
		localStorage.setItem('weekList', JSON.stringify(dataWeekList))

	} else {
		alert("Введите все поля")
	}
	}
	//-------------------------------------------------------
	return (
		<div>
			<form className={s.addForm} onSubmit={(e) => addNewTask(e)}>
				<div>

					<div className={s.selects}>
						<select name='day'>
							<option disabled selected hidden>Выберите день</option>
							{renderDay()}
						</select>

						<select name='isImportant' >
							<option disabled selected hidden>Выберите важность</option>
							<option  value={true}>Высокая</option>
							<option value={false}>Низкая</option>
						</select>
					</div>

				</div>

				<div className={s.btn}>
					<input  name='title' placeholder='Описание задачи' />
					<button type='submit'>Добавить</button>
				</div>
			</form>

		</div>
	)
}