import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app';
import './styles/main.scss';
import 'bootstrap/dist/js/bootstrap.bundle';

import './assets/fonts/NetflixSans-Regular.woff2';
import './assets/fonts/NetflixSans-Light.woff2';
import './assets/fonts/NetflixSans-Medium.woff2';
import './assets/fonts/NetflixSans-Bold.woff2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
