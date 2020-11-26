import React from 'react';
import { Navbar, Nav, FormControl, Form } from 'react-bootstrap';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../StateProvider';
import { Link } from 'react-router-dom'

const NavbarCarts = () => {
   // eslint-disable-next-line
 const [{carts}, dispatch] = useStateValue()
return (
    <Navbar collapseOnSelect expand="lg" className="bg" variant="dark" sticky='top'>
  <Link to="/" className="navbar-brand">Fake-Store</Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto ml-auto">
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <button  variant="outline-dark">Search</button>
    </Form><br/>
    
      </Nav>
    <Nav className="diff-nav mr-3">
      <Link to="/" className="navoption c mr-3">
           <span> Hello </span>
           <span>Guest</span>
        </Link>
      <Link to="/orders" className="navoption c mr-3">
            <span>Returns</span>
            <span>Orders</span>
            </Link>
      <Link to="/checkout" className="carts">
      <ShoppingCartIcon/>
<span className="option_2 carts">{carts?.length}</span>
    
       
            </Link>
     
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

}

export default NavbarCarts