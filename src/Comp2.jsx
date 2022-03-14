import React from "react";
import { render } from "react-dom";


class Comp2 extends React.Component {
	constructor() {
		super()
		this.state = {
			count : 0
		}
	}

	handlerPlus = () => {
		let currentPlus = this.state.count
		currentPlus ++
		this.setState({
			count : currentPlus
		})
	}

	handlerMinus = () => {
		let currentMinus = this.state.count
		currentMinus--
		this.setState({
			count : currentMinus
		})
	}


	render() {
		return (
			<>
				<div>Counter</div>
				<div>
					<button onClick={this.handlerPlus}>+</button>
					<button onClick={this.handlerMinus}>-</button>
					<div>Value: {this.state.count} </div>
				</div>
			</>
		)
	}
}
export default Comp2