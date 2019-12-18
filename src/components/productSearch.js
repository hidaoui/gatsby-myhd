import React from "react"

const ProductSearch = () => (
<div className="products-search">
				<div className="container-fluid">
					<div className="row ">
						<div className="col-xl-2 col-lg-3">
							<div className="collapse-menu mt-0">
								<ul>
									<li><a href="/" className="vm-menu"><i className="fa fa-navicon"></i><span>E-Catalogue</span></a>
										<ul className="vm-dropdown">
											<li><a href="/"><i className="fa fa-laptop"></i>Carterie <b className="caret"></b></a>
											<ul className="mega-menu">
												<li className="megamenu-single">
													<span className="mega-menu-title">Carte de Visite</span>
													<ul>
														<li><a href="/">CV Simple</a></li>
														<li><a href="/">CV Simple</a></li>
														<li><a href="/">CV Simple</a></li>
														<li><a href="/">CV Simple</a></li>
														<li><a href="/">CV Simple</a></li>
													</ul>
												</li>
												<li className="megamenu-single">
												<span className="mega-menu-title">Carte de Visite</span>
													<ul>
														<li><a href="/">CV Simple</a></li>
														<li><a href="/">CV Simple</a></li>
														<li><a href="/">CV Simple</a></li>
														<li><a href="/">CV Simple</a></li>
														<li><a href="/">CV Simple</a></li>
													</ul>
												</li>
												<li className="megamenu-single">
													<span className="mega-menu-title">Carte de Visite</span>
													<ul>
														<li><a href="/">CV Simple</a></li>
														<li><a href="/">CV Simple</a></li>
														<li><a href="/">CV Simple</a></li>
														<li><a href="/">CV Simple</a></li>
														<li><a href="/">CV Simple</a></li>
													</ul>
												</li>
												<li className="megamenu-single">
													<span className="mega-menu-title">Carte de Visite</span>
													<ul>
														<li><a href="/">CV Simple</a></li>
														<li><a href="/">CV Simple</a></li>
														<li><a href="/">CV Simple</a></li>
														<li><a href="/">CV Simple</a></li>
														<li><a href="/">CV Simple</a></li>
													</ul>
												</li>
											</ul>
											</li>
											<li><a href="/"><i className="fa fa-desktop"></i>Adhésifs & Stickers <b className="caret"></b></a>
												
											</li>
											<li><a href="/"><i className="fa fa-camera"></i>PLV / Grands Formats</a></li>
											<li><a href="/"><i className="fa fa-headphones"></i>Imprimés de Bureau</a></li>
											<li><a href="/"><i className="fa fa-music"></i>Ecologies & Création</a></li>
											<li><a href="/"><i className="fa fa-mobile"></i>Goodies</a></li>
											<li><a href="/"><i className="fa fa-flash"></i>Digital</a></li>
											<li><a href="/"><i className="fa fa-microphone"></i>Creation Graphique</a></li>
											
										</ul>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6">
							<div className="search-box">
								<select>
									<option>E-Catalogue</option>
									<option>Carterie</option>
									<option>Adhésifs & Stickers</option>
									<option>PLV / Grands Formats</option>
									<option>Imprimés de Bureau</option>
									<option>Ecologies & Création</option>
									<option>Goodies</option>
									<option>Digital</option>
									<option>Creation Graphique</option>
								</select>
								<input type="text" placeholder="Vos Besoins !!" />
								<button>Chercher</button>
							</div>
						</div>
						<div className="col-xl-4 col-lg-3">
							<div className="mini-cart pull-right">
								<ul>
									<li><a href="/" title="Suivez Vos Livraisons"><i className="ti-truck"></i></a></li>
									
									<li><a href="/" className="minicart-icon"><i className="icon_bag_alt"></i>$180.00<span>2</span></a>
										<div className="cart-dropdown">
											<ul>
												<li>
													<div className="mini-cart-thumb">
														<a href="/"><img src="assets/images/products/prints/cv1.jpg" alt="" /></a>
													</div>
													<div className="mini-cart-heading">
														<span>$460.00 x 1</span>
														<h5><a href="/">Carte Visite Péliculée</a></h5>
													</div>
													<div className="mini-cart-remove">
														<button><i className="ti-close"></i></button>
													</div>
												</li>
												<li>
													<div className="mini-cart-thumb">
														<a href="/"><img src="assets/images/products/prints/1.jpg" alt="" /></a>
													</div>
													<div className="mini-cart-heading">
														<span>$460.00 x 1</span>
														<h5><a href="/">Création Site Web</a></h5>
													</div>
													<div className="mini-cart-remove">
														<button><i className="ti-close"></i></button>
													</div>
												</li>
											</ul>
											<div className="minicart-total fix">
												<span className="pull-left">total:</span>
												<span className="pull-right">$460.00</span>
											</div>
											<div className="mini-cart-checkout">
												<a href="/" className="btn-common view-cart">Suivez Vos Commandes</a>
												<a href="/" className="btn-common checkout mt-10">Voir Vos Commandes</a>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
)
export default ProductSearch