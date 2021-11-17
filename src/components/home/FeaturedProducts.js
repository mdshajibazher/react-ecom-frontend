import React, {Component} from 'react';
import {Container,Row,Col,Card} from "react-bootstrap";

class FeaturedProducts extends Component {
    render() {
        return (
                <Container fluid={true} className="spad">
                    <h5 className="section-title">Featured Products</h5>
                    <p className="section-subtitle">Some subtitle about this section</p>
                    <Row>
                        <Col className="p-1"  lg={2} md={2} sm={4} xs={4}>
                            <Card className="image-box card text-center">
                                <img className="w-100" src="https://static-01.daraz.com.bd/p/mdc/7cc21f23c27a28db31601d064b98c51b.jpg_340x340q80.jpg_.webp" alt=""/>
                                <Card.Body>
                                    <p className="product-card-title">ASUS Gamibook PRO Intell </p>
                                    <p className="product-card-price">Price: 3000</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-1"  lg={2} md={2} sm={4} xs={4}>
                            <Card className="image-box card text-center">
                                <img className="w-100" src="https://static-01.daraz.com.bd/p/mdc/7cc21f23c27a28db31601d064b98c51b.jpg_340x340q80.jpg_.webp" alt=""/>
                                <Card.Body>
                                    <p className="product-card-title">ASUS Gamibook PRO Intell </p>
                                    <p className="product-card-price">Price: 3000</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-1"  lg={2} md={2} sm={4} xs={4}>
                            <Card className="image-box card text-center">
                                <img className="w-100" src="https://static-01.daraz.com.bd/p/mdc/7cc21f23c27a28db31601d064b98c51b.jpg_340x340q80.jpg_.webp" alt=""/>
                                <Card.Body>
                                    <p className="product-card-title">ASUS Gamibook PRO Intell </p>
                                    <p className="product-card-price">Price: 3000</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-1" lg={2} md={2} sm={4} xs={4}>
                            <Card className="image-box card text-center">
                                <img className="w-100" src="https://static-01.daraz.com.bd/p/mdc/7cc21f23c27a28db31601d064b98c51b.jpg_340x340q80.jpg_.webp" alt=""/>
                                <Card.Body>
                                    <p className="product-card-title">ASUS Gamibook PRO Intell </p>
                                    <p className="product-card-price">Price: 3000</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-1" lg={2} md={2} sm={4} xs={4}>
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
        );
    }
}

export default FeaturedProducts;