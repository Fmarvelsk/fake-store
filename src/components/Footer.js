import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className="page-footer elegant-color">
<Link to="/" className="dts">
  <div className="color-primary pt-4 pb-4">
    <div className="container text-center">
            Go Back Up
    </div>
  </div>
</Link>
  <div className="container text-center text-md-left pt-4 pt-md-5">

    <div className="row mt-1 mt-md-0 mb-4 mb-md-0">

      <div className="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">

        <h5>Get to know us</h5>
        <hr className="color-primary mb-4 mt-0 d-inline-block mx-auto w-60"/>

        <p className="foot-desc mb-0">Using React and the Fake Store API, (https://fakestoreapi.com/products) build a checkout system where users can:

</p>

      </div>
      
      <hr className="clearfix w-100 d-md-none"/>

      <div className="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">

        <h5>Products</h5>
        <hr className="color-primary mb-4 mt-0 d-inline-block mx-auto w-60"/>

        <ul className="list-unstyled foot-desc">
          <li className="mb-2">
            <Link to="#!">Sell Products on FakeStore</Link>
          </li>
          <li className="mb-2">
            <Link to="#!">Advertise Your Product</Link>
          </li>
          <li className="mb-2">
            <Link to="#!">Self Publish with us</Link>
          </li>
          <li className="mb-2">
            <Link to="#!">Bootstrap Angular</Link>
          </li>
        </ul>

      </div>
      <hr className="clearfix w-100 d-md-none"/>

      <div className="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">

        <h5>Useful links</h5>
        <hr className="color-primary mb-4 mt-0 d-inline-block mx-auto w-60"/>

        <ul className="list-unstyled foot-desc">
          <li className="mb-2">
            <Link to="#!">Your Account</Link>
          </li>
          <li className="mb-2">
            <Link to="#!">Become an Affiliate</Link>
          </li>
          <li className="mb-2">
            <Link to="#!">Shipping Rates</Link>
          </li>
          <li className="mb-2">
            <Link to="#!">Help</Link>
          </li>
        </ul>

      </div>
     
      <hr className="clearfix w-100 d-md-none"/>

          </div>

  </div>
  <div className="footer-copyright text-center py-3">© 2020
    <Link to=""></Link>
  </div>
  </footer>
    )
}
export default Footer 