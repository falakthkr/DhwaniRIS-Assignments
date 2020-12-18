import React, { useState, useEffect } from 'react';

export default function CreditCard(props) {
	const [ input, setInput ] = useState(new Array(4).fill(''));
	const [ array, setArray ] = useState([]);
	const [ data, setData ] = useState([]);

	useEffect(() => {
		array[0].focus();
	}, []);

	const handleInput = (e, index) => {
		let val = [ ...input ];
		val[index] = e.target.value;
		setInput(val);

		if (e.target.value.length === 4) {
			if (index + 1 < array.length) {
				console.log('Array:' + array, 'Index:' + index);
				array[index + 1].focus();
				console.log(array[index]);
			}
		} else if (e.target.value.length === 0) {
			if (index !== 0) {
				console.log('Array:' + array, 'Index:' + index);
				array[index - 1].focus();
				console.log(array[index]);
			}
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let val = input.reduce((a, b) => a + b);
		if (val.length == 16) {
			val = val.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/, '');
			let item = [ ...data, val ];
			setData(item);
		}
	};

	const handleDelete = (a, i) => {
		let val = [ ...data ];
		val = val.filter((a, index) => i !== index);
		setData(val);
	};

	const handlePastedNumber = (e, index) => {};

	return (
		<div>
			<div>
				<h3>
					Card Number<sup>*</sup>:
				</h3>
				{input.map((item, index) => (
					<input
						style={{ margin: '10px', width: '100px', height: '30px' }}
						onPaste={(e) => handlePastedNumber(e, index)}
						maxLength="4"
						onChange={(e) => handleInput(e, index)}
						key={index}
						ref={(a) => (array[index] = a)}
					/>
				))}
				<br />
				<button onClick={(e) => handleSubmit(e)}>Submit</button>
			</div>
			<div>
				<h3>Data:</h3>
				<div align="center">
					<table border="1">
						<tr>
							<td>S.No</td>
							<td colSpan="2">Card Number</td>
						</tr>
						{data.map((item, index) => (
							<tr>
								<td>{index + 1}</td>
								<td>{item}</td>
								<td>
									<button onClick={(e) => handleDelete(e, index)}>Delete</button>
								</td>
							</tr>
						))}
					</table>
				</div>
			</div>
		</div>
	);
}
