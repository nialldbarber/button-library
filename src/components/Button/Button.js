import React, { useState } from "react";
import "./Button.scss";

const Button = props => {
	const [on, setOn] = useState(null);

	function handleChange() {
		setOn(!on);
	}

	return (
		<div className="button-container">
			<button className={on === true ? "button on" : "button off"}>{props.client}</button>
			<label className="switcher">
				<input type="checkbox" onChange={handleChange} />
				<span className={`${props.type} slider`} />
			</label>
		</div>
	);
};

export default Button;
