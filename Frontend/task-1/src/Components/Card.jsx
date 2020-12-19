import React, { useState, useEffect } from 'react';
import styles from "./Card.module.css"

export default function CreditCard(props) {
	const [boxes,setBoxes] = useState("")
	const [ input, setInput ] = useState(new Array(4).fill(''));
	const [ array, setArray ] = useState([]);
	const [ data, setData ] = useState([]);

	useEffect(() => {
		array[0].focus();
	}, []);

	// function to handle input 
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
	
	// function to handle the submit button
	const handleSubmit = (e) => {
		e.preventDefault();
		let val = input.reduce((a, b) => a + b);
		if (val.length == 16) {
			val = val.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/, '');
			let item = [ ...data, val ];
			setData(item);
		}
	};

	// function to handle the delete button
	const handleDelete = (a, i) => {
		let val = [ ...data ];
		val = val.filter((a, index) => i !== index);
		setData(val);
	};

	// function to handle enter key
	const handleKey = (e, i) => {

        if (e.key === "Enter") {
            let val = input.reduce((a, b) => a + b)

            if (val.length < 16) {
                alert("please enter 16 digits")
            }

            else {
                if (isNaN(val)) {
                    alert("please enter digits only")
                }
                else {
                    let dataSet = [...data, val]
                    setData(dataSet)
                }
            }
        }
	}
	
	// function to handle pasted digits
	const handleClipboard = (e, index) => {
        e.preventDefault()
        let val = e.clipboardData.getData('text')
        if (isNaN(val)) {
            console.log("Not Digits")
        }
        if (index === 0) {
            if (val.length > 16) {
                console.log("More than 16 digits")
            }
            else {
                let a = 0
                for (let i = 0; i < 4; i++) {
                    let sub = val.substring(a, 4)

                    array[i].value = sub

                    let subValue = [...input]
                    subValue[i] = sub
                    setInput(subValue)

                    if (sub.length < 4) {
                        array[i].focus()
                    }
                    array[i].focus()
                    a = a + 4
                }
            }
        }
    }
	console.log(boxes)
	return (
		<div>
			{/* <input type="number" onChange={(e)=>setBoxes(e.target.value)} /> */}
			{/* Credit Card Input Component */}
			<div>
				<h3>
					Card Number<sup>*</sup>:
				</h3>
				{input.map((item, index) => (
					<input
						style={{ margin: '10px', width: '100px', height: '30px' }}
						onChange={(e) => handleInput(e, index)}
						onKeyDown={(e) => handleKey(e, index)}
						onPaste={(e) => handleClipboard(e, index)}
						maxLength="4"
						key={index}
						ref={(a) => (array[index] = a)}
					/>
				))}
				<br />
				<button onClick={(e) => handleSubmit(e)}>Submit</button>
			</div>
			{/* Display of submitted data */}
			<div>
				<h3>Data:</h3>
				<div align="center">
					<table>
						<tr className={styles.data}>
							<td className={styles.data}>S.No</td>
							<td className={styles.data} colSpan="2">Card Number</td>
						</tr>
						{data.map((item, index) => (
							<tr>
								<td className={styles.data}>{index + 1}</td>
								<td className={styles.data}>{item}</td>
								<td className={styles.data}>
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
