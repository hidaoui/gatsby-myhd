import React from "react"
import imgProduct from "../assets/images/products/prints/cv.jpg"
import SliderWebsite from './slider'

const SliderArea = () => {
    return (
		<div className="slider-area">
		<div className="container-fluid">
			

			<div className="row">
				<div className="col-xl-6 offset-xl-2">
					<div className="main-slider mt-30 mt-sm-0">
						<SliderWebsite></SliderWebsite>
					</div>
				</div>

						<div className="col-xl-2">


					<div className="single-sidebar products-list mt-35">
				<div className="section-title mb-30">
								<h3>Mes Commandes</h3>
							</div>

							<div className="one-carousel dots-none">
								<div>
									<ul className="list-none">
										
										<li>
											<div className="product-single style-2">
												<div className="row align-items-center m-0">
													<div className="col-lg-4 p-0">
														<div className="product-thumb">
															<a href="/"><img src={imgProduct} alt="" /></a>
														</div>
													</div>
													<div className="col-lg-8 p-0">
														<div className="product-title">
															<h4><a href="/">Carte Visite Pelliculée</a></h4>
														</div>
														<div className="product-price-rating">
															<del>Status : </del>
															<span>En Cours</span>
															
														</div>
													</div>
												</div>
											</div>
										</li>


									</ul>
								</div>
							</div>
						</div>
				</div>
				<div className="col-xl-2">


					<div className="single-sidebar products-list mt-35">
				<div className="section-title mb-30">
								<h3>Prints Pour Vous</h3>
							</div>

							<div className="one-carousel dots-none">
								<div>
									<ul className="list-none">
										
										<li>
											<div className="product-single style-2">
												<div className="row align-items-center m-0">
													<div className="col-lg-4 p-0">
														<div className="product-thumb">
															<a href="/"><img src={imgProduct} alt="" /></a>
														</div>
													</div>
													<div className="col-lg-8 p-0">
														<div className="product-title">
															<h4><a href="/">Carte Visite Pelliculée</a></h4>
														</div>
														<div className="product-price-rating">
															<del >Categorie : </del>
															<span>Carterie</span>
															
														</div>
													</div>
												</div>
											</div>
										</li>

									</ul>
								</div>
							</div>
						</div>
				</div>
			</div>
		</div>
	</div>
	)
}
export default SliderArea