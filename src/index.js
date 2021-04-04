import React from 'react';
import ReactDOM from 'react-dom';

//const user = { counter : 1};

class Tejas extends React.Component{

	constructor(props){
		super(props);
		this.state = {date: new Date() , Toggle: true};

		this.handleClick = this.handleClick.bind(this);

	}

	handleClick(){
		this.setState(
				state => ( {

			Toggle: !state.Toggle
					
				})

			);
	}

	componentDidMount(){
		this.timer = setInterval(()=> this.trick(), 1000);
	}

	componentWillMount()
		{
			clearInterval(this.timer)	
		}


	trick(){
		this.setState({
			date: new Date()

		});
	}
		render()
		{
			return( 
			//<h1>{this.state.date.toLocaleTimeString()}</h1>
			<button onClick={this.handleClick}>
				{this.state.Toggle ? 'ON':'OFF'}
			</button>
		)
		}

	}






ReactDOM.render(

<Tejas />,
document.getElementById('root')	

);