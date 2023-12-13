
import s from "./Slogan.module.css";
export default function Slogan(){
	return (
		<div className={s.slogan}>
			<p>Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями.</p>
			<p>А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.</p>
		</div>
	)
}