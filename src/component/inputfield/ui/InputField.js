import React, { useEffect, useState } from 'react';
import '../scss/InputField.scss';
const style = {
	actionMsg: {
		display: 'flex',
		fontWeight: 'bold',
		fontSize: 20,
		error: {
			color: 'red'
		},
		warning: {
			color: '#ffff00',
			fontWeight: 'bold'
		}
	},
	actionButton: {
		position: 'absolute',
		margin: 5,
		right: 0,
		top: 0,
		color: '#fff',
		height: 40,
		cursor: 'pointer',
		userSelect: 'none',
		borderLeft: '1px solid #CFD8DC',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#90A4AE',
		borderRadius: '0px 5px 5px 0px'
	}
};

const InputField = (props) => {
	const NONE = 0;
	const WARNING = 1;
	const ERROR = 2;

	const [ text, setText ] = useState('');

	const {
		type = 'text',
		cls = '',
		name = '',
		value = text,
		readOnly = false,
		size = '35',
		error = { type: NONE, message: '' },
		placeHolder = 'User name',
		onFocus = () => {},
		onBlur = () => {},
		onClick = () => {},
		onInputChange = () => {},
		actionBtn = {}
	} = props;

	useEffect(
		() => {
			onInputChange(text);
		},
		[ text, onInputChange ]
	);

	const { icon = '', show = false, handler = () => {} } = actionBtn;
	const errStyle = (type) => {
		switch (type) {
			case ERROR:
				return style.actionMsg.error;
			case WARNING:
				return style.actionMsg.warning;
			default:
				return '';
		}
	};

	return (
		<div className={`inputContainer ${cls}`}>
			{/**
				Input filed 
			*/}
			<input
				type={type}
				name={name}
				style={style.inputField}
				placeholder={placeHolder}
				size={size}
				value={value}
				onClick={onClick}
				onFocus={onFocus}
				onBlur={onBlur}
				onChange={({ target }) => setText(target.value)}
				readOnly={readOnly}
			/>

			{/**
				Error message filed 
			*/}
			{error.type !== NONE ? (
				<div style={style.actionMsg}>
					<span style={errStyle(error.type)}>{error.message}</span>
				</div>
			) : (
				''
			)}

			{/**
				Action button 
			*/}
			{show && (
				<button className="actionButton" onClick={() => handler(text)}>
					<i className="material-icons">{icon}</i>
				</button>
			)}
		</div>
	);
};
export default InputField;
