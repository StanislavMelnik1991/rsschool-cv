import { App } from './app';
import { createRoot } from 'react-dom/client';
import React from 'react';


const container = document.getElementById('app');

if (!container) {
	throw new Error('Someone remove root. We need to find him');
}

const root = createRoot(container);
root.render(

	<App />

);