import React from "react";
import Carousel from "react-bootstrap/Carousel";
import './Buy.css'
// import { Link } from "react-router-dom";

export default function Buy() {
    return (
        <div classNameName="hero">
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    {" "}
                    <div className="slides"></div>{" "}
                    <img
                        className="d-block w-100"
                        src="https://cdn.shopify.com/s/files/1/0245/6825/files/thin-banner-004_2048x2048.jpg?v=1540338229"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5 className="quotes">DRESS TO YOUR STYLE</h5>
                        <p>
                            <div class="center">
                                <div class="btn-1">
                                    <p>

                                        {/* <span><Link to="/display">Check this out!</Link></span> */}
                                    </p>
                                </div>
                            </div>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="secondslide">
                        <img
                            className="d-block secondslide "
                            src="assets/SHOPPINGBAG.png "
                            alt="Second slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h5></h5>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="thirdslide" style={{ backgroundColor: "black" }}>
                        <img
                            className="d-block  align-items-right"
                            src="./assets/men-bg.jpg"
                            alt="Third slide"
                            style={{ width: "115rem", height: "45rem" }}
                        />
                    </div>
                    <Carousel.Caption>
                        <h5>Timeless Wardrobe Essential</h5>
                        <p>Trending Arrivals from desk to Dinner</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br />
            <div>
                <h1 className="topic"><br /><br /></h1>
                <a href="#Category" className="categories"/>
            </div>
        </div>
    );
}
