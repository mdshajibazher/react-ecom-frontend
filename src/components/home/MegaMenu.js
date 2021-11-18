import React, {Component, Fragment} from 'react';
import {Container} from "react-bootstrap";

class MegaMenu extends Component {

    constructor() {
        super();
        this.megaMenu = this.megaMenu.bind(this);
    }

    componentDidMount() {
        this.megaMenu();
    }

    megaMenu() {
        var accordionBtn = document.getElementsByClassName('accordion');
        var accordionBtnCount = accordionBtn.length;
        var i;
        for (i = 0; i < accordionBtnCount; i++) {
            accordionBtn[i].addEventListener('click',function(){
                this.classList.toggle('active');
                var panel = this.nextElementSibling;
                if(panel.style.maxHeight){
                    panel.style.maxHeight = null;
                }else{
                    panel.style.maxHeight = panel.scrollHeight+"px";
                }
            });
        }
    }


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
