import React, {Component,Fragment} from 'react';
import {Container} from "react-bootstrap";

class MegaMenu extends Component {
    render() {
        return (
            <Fragment>
                <div className="accordionMenuDiv">
                    <div className="accordionMenuDivInside">
                        <button className="accordion">Mens Clothings</button>
                        <div className="panel">
                            <ul>
                                <li><a className="accordionItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionItem" href="">Mens Shirt</a></li>
                            </ul>
                        </div>

                        <button className="accordion">Mens Clothings</button>
                        <div className="panel">
                            <ul>
                                <li><a className="accordionItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionItem" href="">Mens Shirt</a></li>
                            </ul>
                        </div>

                        <button className="accordion">Mens Clothings</button>
                        <div className="panel">
                            <ul>
                                <li><a className="accordionItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionItem" href="">Mens Shirt</a></li>
                            </ul>
                        </div>

                        <button className="accordion">Mens Clothings</button>
                        <div className="panel">
                            <ul>
                                <li><a className="accordionItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionItem" href="">Mens Shirt</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default MegaMenu;
