import React, {Component,Fragment} from 'react';
import {Col, Container, Navbar, Row} from "react-bootstrap";

class NavMenuDesktop extends Component {
    render() {
        return (
            <Fragment>
                    <Container fluid="true" className="fixed-top shadow-sm p-2 m-0 bg-white">
                        <Row>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <Navbar.Brand href="#home"> <a href="" className="btn" > <img className="nav-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo%21_Logo.svg/1024px-Logo%21_Logo.svg.png" alt=""/></a></Navbar.Brand>
                                <button className="cart-btn"><i className="fa fa-shopping-cart"></i> 4 items</button>
                            </Col>
                            <Col lg={4} md={4} sm={12} xs={12}>
                               <div className="input-group w-100">
                                   <input type="text" className="form-control"/>
                                   <button type="button" className="btn site-btn"><i className="fa fa-search"></i></button>
                               </div>
                            </Col>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <a className={'btn'} href=""><i className="fa fa-heart"></i> <sup><span className="badge bg-danger">4</span></sup></a>
                                <a className={'btn'} href=""><i className="fa fa-bell"></i> <sup><span className="badge bg-danger">4</span></sup></a>
                                <a className={'btn'} href=""><i className="fa fa-mobile-alt"></i></a>
                                <a className="h4" href="">Login</a>
                            </Col>
                        </Row>
                    </Container>
            </Fragment>
        );
    }
}

export default NavMenuDesktop;