import React from 'react';
import { wrapper } from './style_main.css';
import { Footer } from './modules/footer/Footer';
import { Main } from './modules/main/Main';
import { Header } from './modules/header/Header';


export function App() {
	return (
		<div className={wrapper}>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}
