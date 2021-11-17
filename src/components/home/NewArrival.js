import React, {Component,Fragment} from 'react';
import Slider from "react-slick";
import {Card, Col, Container} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class NewArrival extends Component {

    constructor(props) {
        super(props);
        this.prev =  this.prev.bind(this);
        this.next =  this.next.bind(this);
    }

    prev(e){
        e.preventDefault();
        this.slider.slickPrev();
    }

    next(e){
        e.preventDefault();
        this.slider.slickNext()
    }

    render() {
        const settings = {
            dots: false,
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
                <Container fluid={true}  className="spad overflow-hidden">
                    <h5 className="section-title">NEW ARRIVAL
                        <a onClick={this.prev} className="btn btn-sm  site-btn btn-danger" href=""><i className="fa fa-angle-left"></i></a>
                        <a onClick={this.next} className="btn btn-sm site-btn btn-danger" href=""><i className="fa fa-angle-right"></i></a>
                    </h5>
                    <p className="section-subtitle">Some subtitle about this section</p>

                        <Slider ref={c => this.slider = c} {...settings}>

                                <Card className="image-box card text-center">
                                    <img className="w-100" src="https://static-01.daraz.com.bd/p/mdc/7cc21f23c27a28db31601d064b98c51b.jpg_340x340q80.jpg_.webp" alt=""/>
                                    <Card.Body>
                                        <p className="product-card-title">ASUS Gamibook PRO Intell </p>
                                        <p className="product-card-price">Price: 3000</p>
                                    </Card.Body>
                                </Card>

                                <Card className="image-box card text-center">
                                    <img className="w-100" src="https://static-01.daraz.com.bd/p/mdc/7cc21f23c27a28db31601d064b98c51b.jpg_340x340q80.jpg_.webp" alt=""/>
                                    <Card.Body>
                                        <p className="product-card-title">ASUS Gamibook PRO Intell </p>
                                        <p className="product-card-price">Price: 3000</p>
                                    </Card.Body>
                                </Card>

                            <Card className="image-box card text-center">
                                <img className="w-100" src="https://static-01.daraz.com.bd/p/mdc/7cc21f23c27a28db31601d064b98c51b.jpg_340x340q80.jpg_.webp" alt=""/>
                                <Card.Body>
                                    <p className="product-card-title">ASUS Gamibook PRO Intell </p>
                                    <p className="product-card-price">Price: 3000</p>
                                </Card.Body>
                            </Card>

                            <Card className="image-box card text-center">
                                <img className="w-100" src="https://static-01.daraz.com.bd/p/mdc/7cc21f23c27a28db31601d064b98c51b.jpg_340x340q80.jpg_.webp" alt=""/>
                                <Card.Body>
                                    <p className="product-card-title">ASUS Gamibook PRO Intell </p>
                                    <p className="product-card-price">Price: 3000</p>
                                </Card.Body>
                            </Card>

                            <Card className="image-box card text-center">
                                <img className="w-100" src="https://static-01.daraz.com.bd/p/mdc/7cc21f23c27a28db31601d064b98c51b.jpg_340x340q80.jpg_.webp" alt=""/>
                                <Card.Body>
                                    <p className="product-card-title">ASUS Gamibook PRO Intell </p>
                                    <p className="product-card-price">Price: 3000</p>
                                </Card.Body>
                            </Card>

                            <Card className="image-box card text-center">
                                <img className="w-100" src="https://static-01.daraz.com.bd/p/mdc/7cc21f23c27a28db31601d064b98c51b.jpg_340x340q80.jpg_.webp" alt=""/>
                                <Card.Body>
                                    <p className="product-card-title">ASUS Gamibook PRO Intell </p>
                                    <p className="product-card-price">Price: 3000</p>
                                </Card.Body>
                            </Card>

                            <Card className="image-box card text-center">
                                <img className="w-100" src="https://static-01.daraz.com.bd/p/mdc/7cc21f23c27a28db31601d064b98c51b.jpg_340x340q80.jpg_.webp" alt=""/>
                                <Card.Body>
                                    <p className="product-card-title">ASUS Gamibook PRO Intell </p>
                                    <p className="product-card-price">Price: 3000</p>
                                </Card.Body>
                            </Card>

                        </Slider>

                </Container>
            </Fragment>
        );
    }
}

export default NewArrival;