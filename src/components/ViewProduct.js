import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { useStateValue } from '../StateProvider';

const ViewProd = () =>  {
    const [{}, dispatch] = useStateValue()
    return(
        <Container className="mt-5 mb-5">
            
                <Row>
                    <Col sm={3}>
                        <div className="column-block" >
                            <div>
                                Categories
                            </div>
                            <div className="category-block">
                            <ul class="box-category treeview-list treeview collapsable">
              <li class="expandable"><Link> Desktops
                </Link></li>
              <li class="expandable">Windows
              </li>
              <li class="expandable">Mice and Trackballs</li>
                  <li class="expandable">Windows
              </li>
             </ul>
                            </div>
                        </div>
                    </Col>
                    <Col sm={9} className="colors">
                        <Row>
                            <Col sm={6}>
                            <div >
                            <img className="view" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="photos"/>
                        </div>
 
                            </Col>
                            <Col sm={6} className="colors"> 
                            <div>
                  <p>Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                </div>
               
                <div>
                  <strong>Description:</strong>  <p>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                </div>
                <div>
                  <strong>$122.0</strong> 
                </div>
               <div>
               <button /*onClick={ (e) => {
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
                            
               } }*/> Add to carts</button>
               </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
    )
}
export default ViewProd