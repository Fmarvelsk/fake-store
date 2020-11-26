import React from 'react';
import Currency from 'react-currency-format'
import { useStateValue } from '../StateProvider';
import { getCarts } from '../reducer'
import { useHistory } from 'react-router-dom';

function SubTotal(){
    //eslint-disable-next-line
    const [{carts}, dispatch] = useStateValue()
    const history = useHistory()
    const paymentClick = (e) => {
        e.preventDefault();
        
        history.push('/payments')}
        const RemoveAll = (e) => {
            e.preventDefault()

            dispatch({
            type : "Empty carts",
            
            })
        }
    
    return(
        <div className="subtotal">
            <Currency renderText={(value) => (
                <>
                <p>
            Subtotal ({carts.length} items) : <strong>{value}</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
                
            
                </>
            )} 
            decimalScale={2}
            value={getCarts(carts)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}/>
            <button onClick={paymentClick}>Proceed to checkout</button>

            <div className="mt-3">
            <button className="cls" onClick={RemoveAll}>Remove all items</button>

            </div>
        </div>
    )
}
export default SubTotal;