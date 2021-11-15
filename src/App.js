import React, {Fragment} from 'react';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/font-awesome.min.css'
import {HashRouter} from "react-router-dom";
import AppRoute from "./route/AppRoute";

function App() {
  return (
    <div className="App">
        <Fragment>
            <HashRouter>
                <AppRoute/>
            </HashRouter>
        </Fragment>
    </div>
  );
}

export default App;
