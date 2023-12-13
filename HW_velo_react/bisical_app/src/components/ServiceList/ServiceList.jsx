
import s from "./ServiceList.module.css";
import {serviceList} from "./data/data_list"
export default function ServiceList(){
	return (
		<div className={s.serviceList}>
			
			{serviceList.map(el => (
				<div  style={{backgroundColor: el.color}}>
					<p>
					{el.title}
					</p>					
				</div>
			))}
		</div>
	)
}