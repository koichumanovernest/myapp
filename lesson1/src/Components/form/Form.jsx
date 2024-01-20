import React from 'react'
import { useState } from "react";


const Form = ({texst, setTexst}) => {
	const [inputValue, setInputValue] = useState("");

  return (
    <div className="form">
				<input
					type="text"
					value={inputValue}
					onChange={(event) => {
						setInputValue(event.target.value);
					}}
				/>
				<button
					onClick={() => {
						setTexst([...texst, { id: Math.random(), text: inputValue }]);
						setInputValue("")
					}}>
					Addd
				</button>
			</div>
  )
}

export default Form