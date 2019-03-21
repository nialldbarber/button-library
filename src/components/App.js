import React, { Component, Fragment } from "react";
import Button from "./Button/Button";
import "../styles/App.scss";

const buttonTypes = {
	apple: "green",
	youtube: "darkBlue",
	reddit: "blue"
};

class App extends Component {
	state = {
		client: ["Vodafone", "Mitchells & Butlers", "Charles Stanley", "Accenture", "Condé Nast", "Odgers Berndtson"],
		currentClient: "Vodafone",
		buttonOutput: ""
	};

	handleChange = e => {
		this.setState({
			currentClient: e.target.value
		});
	};

	render() {
		const { client, currentClient } = this.state;
		return (
			<Fragment>
				<header>
					<div className="nav">
						<h1>Choose a button</h1>
						<select value={currentClient} onChange={this.handleChange}>
							{client.map((client, i) => {
								return (
									<option key={i} value={client}>
										{client}
									</option>
								);
							})}
						</select>
					</div>
				</header>
				<section className="App">
					<Button client={currentClient} />
					<Button type={buttonTypes.apple} client={currentClient} />
					<Button client={currentClient} />
					<Button client={currentClient} />
					<Button type={buttonTypes.youtube} client={currentClient} />
					<Button client={currentClient} />
					<Button client={currentClient} />
					<Button type={buttonTypes.reddit} client={currentClient} />
					<Button client={currentClient} />
					<Button client={currentClient} />
					<Button client={currentClient} />
					<Button client={currentClient} />
				</section>
			</Fragment>
		);
	}
}

export default App;
