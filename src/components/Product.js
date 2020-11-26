import React from 'react';
import { Col } from 'react-bootstrap'
import { useStateValue } from '../StateProvider';
function Product (props) {
    const [{carts}, dispatch] = useStateValue()
    
    return(
        
        <>
               
           
            {props.items.map( (index, key) => 
            <Col sm={6} xs={6} md={3} className="product-items mb-5" key={key}>
                    <div className="colors">
                    <div className="product_rating">
                    <p>{index.title}</p>
                    <p><small>$</small><strong>{index.price}</strong></p>
                    </div>
                    <div className="prod-img">
                    <img src={index.image} alt="phones"></img>
                    </div>
                    <div className="btn-carts">
                    <button className="cls" onClick={ (e) => {
                            e.preventDefault()
                            dispatch({
                                type : 'Add_to_carts',
                                item : {
                                    id : index.id,
                                    title:index.title,
                                    image:index.image,
                                    price: index.price

                                }

                            })
                            
                        
                    }}>Add to carts</button>
                </div>
            </div>
                </Col>
            )}
            </>
            
    )
} 
export default Product