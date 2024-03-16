import React from 'react'
import { Link } from "react-router-dom";
import CarouselHomeScreen from "./homeScreenCarousel/CarouselHomeScreen"


const HomeScreen = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10 col-md-13 mt-5">
                    <CarouselHomeScreen />
                </div>
            </div>
        </div>

    )
}

export default HomeScreen