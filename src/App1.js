import React,{ Component } from 'react';
import Cardlist from './Cardlist';
import { robos } from './robos';
import Search from './Search';
import Scroll from'./Scroll';

class App1 extends Component {
	constructor()
	{
		super()
		this.state = {
			robos :robos,
			searchfeild: ''
		}
	}
   onchanges=(event)=>
	{
		this.setState({ searchfeild: event.target.value})
		
	}
	render(){
	{ const filterrobos = this.state.robos.filter(robos=>{
		return robos.name.toLowerCase().includes(this.state.searchfeild.toLowerCase())
	})

	
		return (
					<div className = 'tc'>
					<h1 className='tc dib ma2 pa2 grow shadow-5'>ROBO FRIENDS</h1>
					<Search searchchange ={this.onchanges}/>
					<Scroll>
					<Cardlist robos = {filterrobos} />
					</Scroll>
					</div>

					);

   }
}
	
}
	
export default App1;