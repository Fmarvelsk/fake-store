import React from 'react';
import { useStateValue } from '../StateProvider';

function CheckoutProduct () {
    // eslint-disable-next-line
    const [{ carts, product }, dispatch] = useStateValue();


        return(
            <div>
                    {carts.map( (items, index) => 
                           <div className="checkout_product" key={index}>

                               <img className="checkout_image" src={items.image} alt=""/>
                               <div className="checkout_productInfo">
                               <p className="checkout_title">{items.title}</p>
                                <p className="checkout_price"><small>$</small><strong>{items.price}</strong></p>
                    <p> <strong>Description : </strong>{ items.description}</p>
                                <button className="product_button" onClick = { ( () =>{

                                        dispatch({
                                            type: 'Remove from carts',
                                            id: items.id
                                        })
                                } )}>Remove from basket</button>
                               
                               </div>
                               
                                </div> 
                                
                    ) }
            </div>
        )
}

export default CheckoutProduct;