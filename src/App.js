import React from 'react';
import './App.scss';
import ViewPort from "./layout/viewport";
import {store} from "./store";
import { Provider } from "react-redux";

function App() {
	return (
		<Provider store={store}>
			<ViewPort/>
		</Provider>
	);
}

export default App;
