import React from 'react';
import './App.scss';
import InputField from './component/inputfield';
function App() {
	return (
		<div className="App">
			<InputField actionBtn={{ show: true, icon: 'vpn_key' }} size={40} />
			<i className="material-icons">vpn_key</i>
		</div>
	);
}

export default App;
