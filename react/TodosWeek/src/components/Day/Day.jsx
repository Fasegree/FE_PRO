import DayTask from "../DayTask/DayTask";
import s from './Day.module.css'

export default function Day({ dataWeekList, setDataWeekList }) {



	// Удаление ВСЕХ задач на день
	function delTasks(day) {
		dataWeekList[day] = dataWeekList[day].filter(el => el.id === 'none')
		setDataWeekList(dataWeekList[day])
		localStorage.setItem('weekList', JSON.stringify(dataWeekList))
	}

	return (
		<div >
			{Object.keys(dataWeekList).map((day, i) => (
				<div className={s.days}>
					<div className={s.day}>
						{day}
					</div>
					<div className={s.closeBtn} onClick={() => delTasks(day)}>
						X
					</div>

					<DayTask key={i} dataWeekList={dataWeekList} 
									day={day} 
									setDataWeekList={setDataWeekList}
									className={s.dayArea}
									/>
		
				</div>
			))}
		</div>
	)
}

