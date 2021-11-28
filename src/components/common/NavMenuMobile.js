import React, {Component, Fragment} from 'react';
import {Col, Container, Navbar, Row} from "react-bootstrap";
import MegaMenuMobile from "../home/MegaMenuMobile";

class NavMenuMobile extends Component {
    constructor() {
        super();
        this.state = {
            sideNavState: "sideNavClose",
            contentOverState: "contentOverlayClose"
        }
    }

    menuBarClickHandler = () => {
        this.sideNavOpenClose();
    };

    overlayClickHandler = () => {
        this.sideNavOpenClose();
    };

    sideNavOpenClose = () => {
        let sideNavState = this.state.sideNavState
        let contentOverlayState = this.state.contentOverState;
        if(sideNavState === 'sideNavOpen'){
            this.setState({ sideNavState: "sideNavClose",contentOverState: "contentOverlayClose"});
        }else{
            this.setState({ sideNavState: "sideNavOpen",contentOverState: "contentOverlayOpen"});
        }
    }


    render() {
        return (
            <Fragment>
                <Container fluid="true" className="fixed-top shadow-sm p-2 m-0 bg-white">
                    <Row>
                        <Col className="p-1" lg={12} md={12} sm={12} xs={12}>
                            <button onClick={() => this.menuBarClickHandler()} className="btn"><i
                                className="fa fa-bars"></i></button>
                        </Col>

                        {/*<Col  className="p-1" lg={3} md={3} sm={12} xs={12}>*/}
                        {/*    <button className="cart-btn"><i className="fa fa-shopping-cart"></i> 4 items</button>*/}
                        {/*</Col>*/}

                    </Row>
                </Container>

                <div id="sideNavID" className={this.state.sideNavState}>
                    <MegaMenuMobile/>
                </div>
                <div className={this.state.contentOverState} onClick={() => this.overlayClickHandler()}></div>
            </Fragment>
        );
    }
}

export default NavMenuMobile;