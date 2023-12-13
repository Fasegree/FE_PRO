
import s from "./Service.module.css";
import velo from "./media/image_1.png"
export default function Service(){
	return (
		<section className={s.service}>
		<div className={s.wrapper}>
				<img src={velo} alt="velo" />
				<div className={s.text}>
					<h2>Что мы предлагаем</h2>
					<p>В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой.</p>
				</div>
			</div>
		</section>
	)
}