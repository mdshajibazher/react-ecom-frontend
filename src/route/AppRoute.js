import React, {Component,Fragment} from 'react';
import HomePage from "../pages/HomePage";
import {Route, Routes} from "react-router-dom";

class AppRoute extends Component {
    render() {
        return (
            <div>
                <Fragment>
                        <Routes>
                            <Route  path="/"  element={<HomePage/>} />
                        </Routes>
                </Fragment>
            </div>
        );
    }
}

export default AppRoute;