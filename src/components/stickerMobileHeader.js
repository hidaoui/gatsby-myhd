import React from "react"
import logo from "../assets/images/logo.png"

const StickerMobileHeader = () => {
	return (	
<div className="sticker mobile-header">
			<div className="container-fluid">
				<div className="row align-items-center">
					<div className="col-sm-4 col-6">
						<div className="logo">
							<a href="index.html"><img src={logo} alt="logo" /></a>
						</div>
					</div>
					<div className="col-sm-8 col-6">
						<div className="mini-cart text-right">
							<ul>
								<li><a href="/"><i className="icon_heart_alt"></i><span>1</span></a></li>
								<li className="minicart-icon"><a href="/"><i className="icon_bag_alt"></i><span>2</span></a>
									<div className="cart-dropdown">
										<ul>
											<li>
												<div className="mini-cart-thumb">
													<a href="/"><img src="assets/images/products/cart/thumb-1.jpg" alt="" /></a>
												</div>
												<div className="mini-cart-heading">
													<span>$460.00 x 1</span>
													<h5><a href="/">Kabino Bedside Table</a></h5>
												</div>
												<div className="mini-cart-remove">
													<button><i className="ti-close"></i></button>
												</div>
											</li>
											<li>
												<div className="mini-cart-thumb">
													<a href="/"><img src="assets/images/products/cart/thumb-2.jpg" alt="" /></a>
												</div>
												<div className="mini-cart-heading">
													<span>$460.00 x 1</span>
													<h5><a href="/">Kabino Bedside Table</a></h5>
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
											<a href="shopping-cart.html" className="btn-common view-cart">VIEW CARD</a>
											<a href="checkout.html" className="btn-common checkout mt-10">CHECK OUT</a>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="row align-items-center">
					<div className="col-sm-12">
						<div className="search-box mt-sm-15">
							<select>
								<option>All Categories</option>
								<option>Computer</option>
								<option>TV & Smart box</option>
								<option>Camera & Photography</option>
								<option>Headphones</option>
							</select>
							<input type="text" placeholder="Vos Besoins..." />
							<button>Chercher</button>
						</div>
					</div>
				</div>
				<div className="row mt-sm-10">
					<div className="col-lg-12">
						<a href="#my-menu" className="mmenu-icon pull-left"><i className="fa fa-bars"></i></a>

						<div className="mainmenu">
							<nav id="my-menu">
								<ul>
									<li><a href="/">Home <b className="caret"></b></a>
										<ul className="submenu">
											<li><a href="/">Home Version 1</a></li>
											<li><a href="/">Home Version 2</a></li>
											<li><a href="/">Home Version 3</a></li>
											<li><a href="/">Home Version 4</a></li>
											<li><a href="/">Home Version 5</a></li>
											<li><a href="/">Home Version 6</a></li>
										</ul>
									</li>
									<li>
										<a href="/">
											<span className="text-label label-featured">Featured</span>
											Shop
											<b className="caret"></b>
										</a>
										<ul>
											<li>
												<span className="mega-menu-title">Shop Page</span>
												<ul>
													<li><a href="/">Shop Grid</a></li>
													<li><a href="/">Shop List</a></li>
													<li><a href="/">Shop Column 3</a></li>
													<li><a href="/">Product Details</a></li>
													<li><a href="/">Product Details Sidebar</a></li>
												</ul>
											</li>
											<li>
												<span className="mega-menu-title">Features</span>
												<ul>
													<li><a href="/">Wishlist</a></li>
													<li><a href="/">Shopping Cart</a></li>
													<li><a href="/">Shop Compare</a></li>
													<li><a href="/">Checkout</a></li>
												</ul>
											</li>
											<li>
												<span className="mega-menu-title">Pages</span>
												<ul>
													<li><a href="/">About </a></li>
													<li><a href="/">FAQ</a></li>
													<li><a href="coming-soon.html">Coming Soon</a></li>
													<li><a href="404.html">404 Error</a></li>
												</ul>
											</li>
											<li>
												<span className="mega-menu-title">Blog</span>
												<ul>
													<li><a href="blog.html">Blog List</a></li>
													<li><a href="blog-grid.html">Blog Grid</a></li>
													<li><a href="blog-fullwidth.html">Blog Fullwidth</a></li>
													<li><a href="blog-details.html">Blog Details</a></li>
												</ul>
											</li>
										</ul>
									</li>
									<li>
										<a href="/">
											<span className="text-label label-hot">Hot</span>
											Pages
											<b className="caret"></b>
										</a>
										<ul className="submenu">
											<li><a href="about.html">About Us</a></li>
											<li><a href="faq.html">FAQ</a></li>
											<li><a href="coming-soon.html">Coming Soon</a></li>
											<li><a href="404.html">404 Eror</a></li>
										</ul>
									</li>
									<li><a href="/">Blog <b className="caret"></b></a>
										<ul className="submenu">
											<li><a href="blog.html">Blog</a></li>
											<li><a href="blog-grid.html">Blog Grid</a></li>
											<li><a href="blog-fullwidth.html">Blog Full Width</a></li>
											<li><a href="blog-details.html">Blog Details</a></li>
										</ul>
									</li>
									<li><a href="contact.html">Contact</a></li>
									<li><a href="/">Purchase Theme</a></li>
								</ul>
							</nav>
						</div>
						
						<div className="collapse-menu mt-0 pull-right">
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
										<li><a href="/"><i className="fa fa-desktop"></i>Adhésifs & Stickers<b className="caret"></b></a>
											<ul className="mega-menu">
												<li className="megamenu-single">
													<span className="mega-menu-title">Shop Page</span>
													<ul>
														<li><a href="/">Products Block Top</a></li>
														<li><a href="/">Products Block Bottom</a></li>
														<li><a href="/">Shop Grid 5 Column</a></li>
														<li><a href="/">Shop List</a></li>
														<li><a href="/">Shop width Normal</a></li>
														<li><a href="/">Shop List Normal</a></li>
													</ul>
												</li>
												<li className="megamenu-single">
													<span className="mega-menu-title">Featured</span>
													<ul>
														<li><a href="/">Thumbnails Left</a></li>
														<li><a href="/">Thumbnails Right</a></li>
														<li><a href="/">Thumbnails Bottom</a></li>
														<li><a href="/">Thumbnails Full</a></li>
														<li><a href="/">Single 2 Colums</a></li>
														<li><a href="/">Detail with Accessories</a></li>
														<li><a href="/">Tabs Content</a></li>
														<li><a href="/">Accordion Tabs</a></li>
													</ul>
												</li>
											</ul>
										</li>
										<li><a href="/"><i className="fa fa-camera"></i>Camera & Photography</a></li>
										<li><a href="/"><i className="fa fa-headphones"></i>Headphones</a></li>
										<li><a href="/"><i className="fa fa-music"></i>Musical Instruments</a></li>
										<li><a href="/"><i className="fa fa-mobile"></i>Smart phone & Tablets</a></li>
										<li><a href="/"><i className="fa fa-flash"></i>Accessories</a></li>
										<li><a href="/"><i className="fa fa-microphone"></i>Home Audio & Theater</a></li>
										<li><a href="/"><i className="fa fa-print"></i>Printer</a></li>
										<li><a href="/"><i className="fa fa-fax"></i>Fax machine</a></li>
										<li><a href="/"><i className="fa fa-spoon"></i>Household goods</a></li>
										<li><a href="/"><i className="fa fa-clock-o"></i>Watch</a></li>
										<li><a href="/"><i className="fa fa-random"></i>Other</a></li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
	}
export default StickerMobileHeader