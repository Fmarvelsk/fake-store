import { useStateValue } from "../StateProvider";
import React from 'react';
import Product from './Product';
import { Row, Col, Container } from 'react-bootstrap'
const ProductItem = () => {
    // eslint-disable-next-line
const [{product}, dispatch] = useStateValue()
return(
    <Container>
        <Row>
                
<Product items={product}/>
    
    </Row>
    </Container>
)
}

export default ProductItem