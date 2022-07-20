import React from 'react';

import * as style from './style.css';
import { About } from './about/About';
import {Contacts} from './contacts/contacts';


export function Main() {
	return (
		<section className={style.wrapper}>
			<Contacts />
			<About />


		</section>
	);
}