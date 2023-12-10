import { useState } from 'react';
import s from './Filter.module.css'
export default function Filter({ dataWeekList, setDataWeekList, getLSFiltered, setLSFiltered, removeLSFiltered }) {

	const [selected, setSelected] = useState({ day: undefined, isImportant: undefined, title: '' })
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


	// Фильтрация задач по дню недели
	function filterByDay(selectedDay, weekTasks) {
	
		if (selectedDay !== undefined) {
			for (const el in weekTasks) {
				weekTasks[el] = el === selectedDay ? weekTasks[el] : []

			}
			return weekTasks;
		} else {

			return weekTasks;
		}

	}
	// Фильтрация задач по важности
	function filterByImportant(selectedImportant, weekTasks) {
	
		if (selectedImportant !== undefined) {
			Object.keys(dataWeekList).map(day => {
				return weekTasks[day] = weekTasks[day].filter(el => el.isImportant === selectedImportant);
			})
	
			return weekTasks;
		} else {

			return weekTasks;
		}

	}

	// Фильтрация "Живой поиск" по строке
	function filterByTitle(e, filteredTasks) {
	

		if(e){

			const inputText = e.toLowerCase();
	
			selected.title = inputText;
	
			const updatedFilteredTasks = {};
	
			Object.keys(filteredTasks).forEach(day => {
				updatedFilteredTasks[day] = filteredTasks[day].filter(task =>
					task.title.toLowerCase().includes(inputText)
				);
			});
			return updatedFilteredTasks
		} else 
	
		
		return filteredTasks

	}
	// Фильтрация всего состояние


	function filterAll(e) {
		// сбор данных с формы

		// поиск значения select
		let filterTitle;
		let filteredTasks;
		const selectElement = e.target;

		if (e.target.name === 'title') {
			filterTitle = e.target.value
			
			selected.title = filterTitle
			setSelected(selected)
		} else if (e.target.name === 'day' || e.target.name === 'isImportant') {

			//-----------------
			// индекс селекта
			const selectedIndex = selectElement.selectedIndex;
			// выбранный день
			const selectedOption = selectElement.options[selectedIndex];
			// имя селекта
			const selectName = e.target.name
	
			// 
			// поиск и передача в функцию выбранного дня
			if (selectName === 'day') {
				// возвращаем выбранный день либо undefined 
				selected['day'] = Object.keys(dataWeekList).find(el => el === selectedOption.value)


				setSelected(selected)


			} else if (selectName === 'isImportant') {

				//   "Выбор важности" присвоение значения undefined, если не выбрана важность, либо [true, false]

				// устанавливаем состояние = если значение имени "нет" ? вернуть undefined : иначе из масива[false, true] .найди( эл, который равен === (если selectedOption.value === 'false' тогда false иначе true ))
				selected['isImportant'] = selectedOption.value === 'none' ? undefined : [false, true].find(el => el === (selectedOption.value = selectedOption.value === 'false' ? false : true))

				setSelected(selected)

			}
			//----------------------------
		} else {
		}



		//  вызываем функцию фильтрации по дням
		filteredTasks = filterByDay(selected.day, dataWeekList)


		// передача в функцию фильтрации по важности
		filteredTasks = filterByImportant(selected.isImportant, filteredTasks)


		// 
		filteredTasks = filterByTitle(filterTitle, filteredTasks)


		// рендер списка задач
		setLSFiltered(filteredTasks)
		setDataWeekList(filteredTasks)

		// Если нет фильтра, то его удаляем с LS
		if (selected.day===undefined && selected.isImportant===undefined && selected.title === '') {
			console.log('нет фильтра');
			removeLSFiltered()
		}


	}

	return (
		<div>
			<form className={s.addForm} onChange={(e) => filterAll(e)} onSubmit={removeLSFiltered}>
				<div>

					<div className={s.selects}>
						<select name='day' >
							<option value='day'>Выберите день...</option>
							{renderDay()}
						</select>

						<select name='isImportant' >
							<option value='none'>Выберите важность...</option>
							<option value={true}>Высокая</option>
							<option value={false}>Низкая</option>
						</select>
					</div>

				</div>

				<div className={s.btn}>
					<input name='title' placeholder='Поиск по описанию задачи' />
					<button type='submit'>Сброс фильтра</button>
				</div>
			</form>
		</div>
	)
}