import React from "react"

const TopHeader = () => (
    <div className="header-top">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="topbar-left">
								<ul className="list-none">
									<li>MYHD VOUS PROPOSE DES RÉDUCTIONS DE <span>10% !!</span></li>
									<li>Centre d'Apel: <span>001-1234-88888</span></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="topbar-right">
								<div className="social-icons pull-right">
									<a href="/"><i className="fa fa-facebook"></i></a>
									<a href="/"><i className="fa fa-twitter"></i></a>
									<a href="/"><i className="fa fa-instagram"></i></a>
									<a href="/"><i className="fa fa-youtube"></i></a>
								</div>
								
								<div className="currency-bar pull-right">
									<ul>
										<li><a href="/">Mon Compte <i className="fa fa-angle-down"></i></a>
											<ul>
												<li><a href="/">Mon Profil</a></li>
												<li><a href="/">Déconnecter</a></li>
											</ul>
										</li>
										<li><span>|</span></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
)
export default TopHeader