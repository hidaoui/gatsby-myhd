import React, { Component } from "react";
import Slider from "react-slick";

const SliderWebsite = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
      };
    return (
<div>
        <Slider {...settings}>
                        <div className="slider-single bg-1">
                            <div className="d-table">
								<div className="slider-caption">
									<h4>TEST TITLE</h4>
									<h2 className="cssanimation leDoorCloseLeft sequence">TEST 2</h2>
									<p>OK</p>
									<div className="slider-product-price">
										<del>$120.00</del> 
										<span>$295.00</span>
									</div>
								
								</div>
							</div>
                        </div>
                        <div className="slider-single bg-2">
							<div className="d-table">
								<div className="slider-caption">
									<h4>clothing</h4>
									<h2 className="cssanimation leDoorCloseLeft sequence">Gadgets</h2>
									<p>The 10 Best Man Collection 2018</p>
									<div className="slider-product-price">
										<del>$120.00</del> 
										<span>$295.00</span>
									</div>									
								</div>
							</div>
						</div>
        </Slider>
      </div>
    )
}
export default SliderWebsite