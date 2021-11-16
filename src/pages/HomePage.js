import React, {Component, Fragment} from 'react';
import FeaturedProducts from "../components/home/FeaturedProducts";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import NewArrival from "../components/home/NewArrival";

class HomePage extends Component {
    render() {
        console.log('hee');
        return (
            <Fragment>
                <NewArrival/>
                <FeaturedProducts/>
                <Categories/>
                <Collection/>
            </Fragment>
        );
    }
}

export default HomePage;