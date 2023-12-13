import s from "./Rent.module.css";
import velo from "./media/velo.png"
export default function Rent(){
	return (
		<div>
					<div className={s.wrapper}>
				<div className={s.text}>
					<h3>Прокат велосипедов</h3>
					<p>У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!</p>
				</div>
				<img src={velo} alt="velo" />
			</div>
		</div>
	)
}