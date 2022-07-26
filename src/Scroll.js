import React from 'react';
const Scroll = (props) =>{
	return(
		<div style={{ overflowY:'Scroll',border:'5px solid pink', height:'550px'}}>
		
    {props.children}

		</div>



		);
};
export default Scroll;