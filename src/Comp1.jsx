import React from "react";
import { render } from "react-dom";


class Comp1 extends React.Component {

	constructor(){
		super();
		this.state = {
			count : 0,
		}
	}
	
	handler = () => {
		let currenCount = this.state.count;
		currenCount++
		this.setState({
			count : currenCount
		})
	}
	render() {
		return (
			<>
				<h1>State</h1>
				<div>
					<button onClick={this.handler}>This button change state</button>
				</div>
				<div>{this.state.count % 2 === 0 ? 'even' : 'odd'}</div>
				<div>
					{this.state.count}
				</div>
			</>
		);
	}
}
export default Comp1