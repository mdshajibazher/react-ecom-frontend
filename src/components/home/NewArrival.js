import React, {Component,Fragment} from 'react';
import Slider from "react-slick";
import {Card, Col, Container} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class NewArrival extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
                <Container fluid={true} className="spad">
                    <h5 className="section-title">NEW ARRIVAL</h5>
                    <p className="section-subtitle">Some subtitle about this section</p>

                        <Slider {...settings}>
                            <div>
                                <Card className="image-box card text-center">
                                    <img className="w-100" src="https://static-01.daraz.com.bd/p/mdc/7cc21f23c27a28db31601d064b98c51b.jpg_340x340q80.jpg_.webp" alt=""/>
                                    <Card.Body>
                                        <p className="product-card-title">ASUS Gamibook PRO Intell </p>
                                        <p className="product-card-price">Price: 3000</p>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div>
                                <Card className="image-box card text-center">
                                    <img className="w-100" src="https://static-01.daraz.com.bd/p/mdc/7cc21f23c27a28db31601d064b98c51b.jpg_340x340q80.jpg_.webp" alt=""/>
                                    <Card.Body>
                                        <p className="product-card-title">ASUS Gamibook PRO Intell </p>
                                        <p className="product-card-price">Price: 3000</p>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div>
                                <Card className="image-box card text-center">
                                    <img className="w-100" src="https://static-01.daraz.com.bd/p/mdc/7cc21f23c27a28db31601d064b98c51b.jpg_340x340q80.jpg_.webp" alt=""/>
                                    <Card.Body>
                                        <p className="product-card-title">ASUS Gamibook PRO Intell </p>
                                        <p className="product-card-price">Price: 3000</p>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div>
                                <Card className="image-box card text-center">
                                    <img className="w-100" src="https://static-01.daraz.com.bd/p/mdc/7cc21f23c27a28db31601d064b98c51b.jpg_340x340q80.jpg_.webp" alt=""/>
                                    <Card.Body>
                                        <p className="product-card-title">ASUS Gamibook PRO Intell </p>
                                        <p className="product-card-price">Price: 3000</p>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div>
                                <Card className="image-box card text-center">
                                    <img className="w-100" src="https://static-01.daraz.com.bd/p/mdc/7cc21f23c27a28db31601d064b98c51b.jpg_340x340q80.jpg_.webp" alt=""/>
                                    <Card.Body>
                                        <p className="product-card-title">ASUS Gamibook PRO Intell </p>
                                        <p className="product-card-price">Price: 3000</p>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div>
                                <Card className="image-box card text-center">
                                    <img className="w-100" src="https://static-01.daraz.com.bd/p/mdc/7cc21f23c27a28db31601d064b98c51b.jpg_340x340q80.jpg_.webp" alt=""/>
                                    <Card.Body>
                                        <p className="product-card-title">ASUS Gamibook PRO Intell </p>
                                        <p className="product-card-price">Price: 3000</p>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div>
                                <Card className="image-box card text-center">
                                    <img className="w-100" src="https://static-01.daraz.com.bd/p/mdc/7cc21f23c27a28db31601d064b98c51b.jpg_340x340q80.jpg_.webp" alt=""/>
                                    <Card.Body>
                                        <p className="product-card-title">ASUS Gamibook PRO Intell </p>
                                        <p className="product-card-price">Price: 3000</p>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Slider>

                </Container>
            </Fragment>
        );
    }
}

export default NewArrival;