import React from 'react';

const Search = ({searchfield,searchchange}) =>{
	return (
		<div className='pa3 ma3  tc'>
		<input type="text" placeholder ="name" onChange = { searchchange } />
		</div>

		);
}
export default Search;
