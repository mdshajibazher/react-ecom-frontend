import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";

class Collection extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="spad">
                    <h5 className="section-title">Special Collection</h5>
                    <p className="section-subtitle">Some subtitle about this section</p>
                    <Row>
                        <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card text-center">
                                <img className="w-100" src="https://static-01.daraz.com.bd/p/mdc/7cc21f23c27a28db31601d064b98c51b.jpg_340x340q80.jpg_.webp" alt=""/>
                                <Card.Body>
                                    <p className="product-card-title">ASUS Gamibook PRO Intell </p>
                                    <p className="product-card-price">Price: 3000</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card text-center">
                                <img className="w-100" src="https://static-01.daraz.com.bd/p/mdc/7cc21f23c27a28db31601d064b98c51b.jpg_340x340q80.jpg_.webp" alt=""/>
                                <Card.Body>
                                    <p className="product-card-title">ASUS Gamibook PRO Intell </p>
                                    <p className="product-card-price">Price: 3000</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card text-center">
                                <img className="w-100" src="https://static-01.daraz.com.bd/p/mdc/7cc21f23c27a28db31601d064b98c51b.jpg_340x340q80.jpg_.webp" alt=""/>
                                <Card.Body>
                                    <p className="product-card-title">ASUS Gamibook PRO Intell </p>
                                    <p className="product-card-price">Price: 3000</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card text-center">
                                <img className="w-100" src="https://static-01.daraz.com.bd/p/mdc/7cc21f23c27a28db31601d064b98c51b.jpg_340x340q80.jpg_.webp" alt=""/>
                                <Card.Body>
                                    <p className="product-card-title">ASUS Gamibook PRO Intell </p>
                                    <p className="product-card-price">Price: 3000</p>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Collection;