import React from 'react';
import '../payment.css'
import { useStateValue } from "../StateProvider";
import Order from './order';


function Orders() {
    //eslint-disable-next-line
  const [{ orders }, dispatch] = useStateValue();
  
  
    return (
        <div className='orders_header'>
            <h1>Your Orders</h1>

            <div className=''>
                {orders?.map((order, i) => (
                    <Order key={i} props ={order}/>
                ))}              
            </div>
        </div>
    )
                
}

export default Orders
