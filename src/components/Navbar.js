import React from "react"
//import { Link } from "gatsby"
const Navbar = () => {
    return (
          <nav>
									<ul>
										<li>
                                            <a href="/">Acceuil <b className="caret"></b></a>
										</li>
										<li>
											<a href="/"><span className="text-label label-hot">spécial</span>Print<b className="caret"></b></a>
										</li>
										<li>
											<a href="/"><span className="text-label label-featured">spécial</span>Digital<b className="caret"></b></a>
											<ul className="mega-menu">
												<li className="megamenu-single">
													<span className="mega-menu-title">GESTION SITE WEB</span>
													<ul>
														<li><a href="/">Gestion Site Web</a></li>
														
													</ul>
												</li>
												<li className="megamenu-single">
													<span className="mega-menu-title">GESTION RÉSEAUX SOCIAUX</span>
													<ul>
														<li><a href="/">Gestion Réseaux Sociaux</a></li>
														
													</ul>
												</li>
												<li className="megamenu-single">
													<span className="mega-menu-title">GESTION DE L’E-RÉPUTATION</span>
													<ul>
														<li><a href="/">Gestion de l'E-Réputation </a></li>
														
													</ul>
												</li>
												<li className="megamenu-single">
													<span className="mega-menu-title">CRÉATION GRAPHIQUE</span>
													<ul>
														<li><a href="/">Création Graphique</a></li>
														
													</ul>
												</li>
											</ul>
										</li>
									
										<li><a href="/">Commandes / Devis <b className="caret"></b></a>
											<ul className="submenu">
												<li><a href="/">Mes Commandes</a></li>
												<li><a href="/">Mes Devis</a></li>
											</ul>
										</li>
										
										<li><a href="/">Mon Catalogue</a></li>
										<li><a href="/">Contact</a></li>
									</ul>
								</nav>
    )
}
export default Navbar