import s from './DayTask.module.css'
export default function DayTask({dataWeekList, day,  setDataWeekList}){

	// Удаление 1й задачи по id
	function delTask(id){
		dataWeekList[day] = dataWeekList[day].filter(task => task.id !==id)
		setDataWeekList(dataWeekList[day])
		localStorage.setItem('weekList', JSON.stringify(dataWeekList))
	}

	// Рендер задач на день с учетом класса важности
	const renderTasks = () =>{
		
		return dataWeekList[day].map((task,i) => {
			
			return (
				<div  className={(task.isImportant) ? [s.task, s.isImportant].join(' ') : s.task}>
					<div className={s.closeBtn} id={task.id} onClick={() => delTask(task.id)}>X</div>
					{task.title}
				</div>
			)
		})
	}
	return (
		<div className={s.dayArea}>
			{renderTasks()}
		</div>
	)
}