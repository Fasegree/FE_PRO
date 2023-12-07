import Day from "../Day/Day";
import s from './Field.module.css'

// отрисовка поля состояния задач
export default function Field({dataWeekList, setDataWeekList}){
	return (
		<div className={s.wrapper}>
			<Day className={s.day} dataWeekList={dataWeekList}  setDataWeekList={setDataWeekList}/>
		</div>
	)
}