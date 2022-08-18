import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Snack from './Snack';
import Soda from './Soda';
import Sardine from './Sardine';
import './index.css';
import VendingMachine from './VendingMachine';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<App />
		<Routes>
			<Route exact path="/" element={<VendingMachine />} />
			<Route exact path="/snack" element={<Snack />} />
			<Route exact path="/soda" element={<Soda />} />
			<Route exact path="/sardine" element={<Sardine />} />
		</Routes>
	</BrowserRouter>
);
