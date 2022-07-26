import React from 'react';
import Card from './Card';
import { robos } from './robos';
const Cardlist = ({robos}) =>
{
	return (
     <div>
     {
     	robos.map((name, i) => {
     		return (
     		     				 <Card 
     		     				 id={ robos[i].id } 
     		     				 name = { robos[i].name } 
     		     				 email = { robos[i].email } 
                                 key ={i}
     		     				 />

     			);
     	})
     }
     </div>
    );
}
export default Cardlist;