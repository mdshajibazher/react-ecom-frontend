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
                <div className="accordionMobileMenuDiv">
                    <div className="accordionMobileMenuDivInside">
                        <button className="accordionMobile">Mens Clothings</button>
                        <div className="panelMobile">
                            <ul>
                                <li><a className="accordionMobileItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionMobileItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionMobileItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionMobileItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionMobileItem" href="">Mens Shirt</a></li>
                            </ul>
                        </div>

                        <button className="accordionMobile">Mens Clothings</button>
                        <div className="panelMobile">
                            <ul>
                                <li><a className="accordionMobileItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionMobileItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionMobileItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionMobileItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionMobileItem" href="">Mens Shirt</a></li>
                            </ul>
                        </div>

                        <button className="accordionMobile">Mens Clothings</button>
                        <div className="panelMobile">
                            <ul>
                                <li><a className="accordionMobileItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionMobileItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionMobileItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionMobileItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionMobileItem" href="">Mens Shirt</a></li>
                            </ul>
                        </div>

                        <button className="accordionMobile">Mens Clothings</button>
                        <div className="panelMobile">
                            <ul>
                                <li><a className="accordionMobileItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionMobileItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionMobileItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionMobileItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionMobileItem" href="">Mens Shirt</a></li>
                            </ul>
                        </div>

                        <button className="accordionMobile">Mens Clothings</button>
                        <div className="panelMobile">
                            <ul>
                                <li><a className="accordionMobileItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionMobileItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionMobileItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionMobileItem" href="">Mens Shirt</a></li>
                                <li><a className="accordionMobileItem" href="">Mens Shirt</a></li>
                            </ul>
                        </div>



                    </div>
                </div>
            </Fragment>
        );
    }
}

export default MegaMenu;
