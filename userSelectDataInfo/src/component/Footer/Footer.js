import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Footer() {
  return (
    <div>
        {/* <!-- partial:partials/_footer.html --> */}


    <Container>
      <Row>
        <Col Col xs={13} md={12}>
        <div className='div-footer'>
           <div className='div-footer-div'>
           <footer className="blockquote-footer">
            E-Cart Shoping
           </footer>
           </div>
        </div>
        </Col>
      </Row>
     </Container> 
        {/* <!-- partial --> */}
    </div>
  )
}
