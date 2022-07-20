import React from 'react';
import * as style from './style.css';
import photo from '../../../../assets/img/IMG_20190210_200831.jpg';


export function Contacts() {
	return (
		<section className={style.wrapper}>
			<img className={style.photo} src={photo} alt="my photo" />
			<div className={style.data}>
				<h1 className={style.name}>Stanislau Melnik</h1>
				<p>Born September 15, 1991</p>
				<p>Nationality: <span className={style.belarus}>BELARUS</span></p>
				<div className={style.section_block}>
					<div className={style.title}>
						<h3>contacts:</h3>
					</div>
					<div className={style.description}>
						<a className={style.href} href="tel: +375-44-733-66-60">
							<p>mobile: +375-44-733-66-60</p>
						</a>
						<p>discord: StanislavMelnik#6792</p>
						<a className={style.href} href="mailto: StanislavMelnik@gmail.com">
							<p>email: StanislavMelnik@gmail.com</p>
						</a>
					</div>
				</div>
				<div className={style.section_block}>
					<div className={style.title}>
						<h3>languages:</h3>
					</div>
					<div className={style.description}>
						<p>English: B1</p>
						<p>Russian: native</p>
						<p>Belarus: native</p>
						<p>Ukrainian: C1</p>
					</div>

				</div>
			</div>
		</section>
	);
}