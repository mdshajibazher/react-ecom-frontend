import React, {Component,Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";

class Categories extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="spad">
                    <h5 className="section-title">Categories</h5>
                    <p className="section-subtitle">Some subtitle about this section</p>
                    <Row>
                        <Col className="p-0"  xl={2} lg={2} md={3} sm={4} xs={4}>
                                <div className="category-box">
                                    <img className="w-100"
                                         src="https://static-01.daraz.com.bd/p/mdc/7cc21f23c27a28db31601d064b98c51b.jpg_340x340q80.jpg_.webp"
                                         alt=""/>
                                    <p className="category-name">ASUS Gamibook PRO Intell </p>
                                </div>
                        </Col>

                        <Col className="p-0"  xl={2} lg={2} md={3} sm={4} xs={4}>
                            <div className="category-box">
                                <img className="w-100"
                                     src="https://static-01.daraz.com.bd/p/mdc/7cc21f23c27a28db31601d064b98c51b.jpg_340x340q80.jpg_.webp"
                                     alt=""/>
                                <p className="category-name">ASUS Gamibook PRO Intell </p>
                            </div>
                        </Col>

                        <Col className="p-0"  xl={2} lg={2} md={3} sm={4} xs={4}>
                            <div className="category-box">
                                <img className="w-100"
                                     src="https://static-01.daraz.com.bd/p/mdc/7cc21f23c27a28db31601d064b98c51b.jpg_340x340q80.jpg_.webp"
                                     alt=""/>
                                <p className="category-name">ASUS Gamibook PRO Intell </p>
                            </div>
                        </Col>

                        <Col className="p-0"  xl={2} lg={2} md={3} sm={4} xs={4}>
                            <div className="category-box">
                                <img className="w-100"
                                     src="https://static-01.daraz.com.bd/p/mdc/7cc21f23c27a28db31601d064b98c51b.jpg_340x340q80.jpg_.webp"
                                     alt=""/>
                                <p className="category-name">ASUS Gamibook PRO Intell </p>
                            </div>
                        </Col>

                        <Col className="p-0"  xl={2} lg={2} md={3} sm={4} xs={4}>
                            <div className="category-box">
                                <img className="w-100"
                                     src="https://static-01.daraz.com.bd/p/mdc/7cc21f23c27a28db31601d064b98c51b.jpg_340x340q80.jpg_.webp"
                                     alt=""/>
                                <p className="category-name">ASUS Gamibook PRO Intell </p>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Categories;