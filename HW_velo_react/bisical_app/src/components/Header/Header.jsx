import s from "./Header.module.css";
import logo from "./media/logo.png"
import dino from "./media/dino.png"

export default function Header(){
	return(
		<div className={s.header}>
			<nav>
				<img src={logo} alt="logo" className={s.logo} />
				<ul>
					<li>О нас</li>
					<li>Услуги</li>
					<li>Аренда</li>
				</ul>
				<div className={s.btnContact}>Связаться</div>
			</nav>
			<div className={s.wrapper}>
				<div className={s.text}>
					<h1 className={s.title}> Веломастерская “Велозар”</h1>
					<p>Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</p>
				</div>
				<img src={dino} alt="dino" />
			
			</div>
		</div>
	)
}