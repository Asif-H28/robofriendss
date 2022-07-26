import React from 'react';

const Card = ({ id,name,email }) =>
{
	return (

			<div className='bg-light-green tc grow dib ma3 pa2 br3 shadow-5'>
			    <img alt='photo' src={`https://robohash.org/${ id }?200x200`}/>
			<div>
			<h2>{id}</h2>
			<h1>{name}</h1>
			<h2>{email}</h2>
			</div>
			</div>
		);
}
export default Card;