import React from 'react'
import logo from "../assets/images/sliders/logo_my_hd.png"

const Footer = () =>{
    return (
        <footer className="footer-area mt-50">
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-3 col-sm-6"></div>
				<div className="col-lg-6 col-sm-12">
					<div className="company-info">
						<img src={logo} width="50%" alt="logo"/>
						<p>
							Arteparc, 9 Rue Des Bouleaux, <br /> 59810 LESQUIN, France
						</p>
						<p>Phone: +33 (0)3 21 63 19 19</p>
						<p>Email: service@havetdigital.fr</p>
					</div>
					<div className="copyright">
						<p>
							Copyright 2020 &copy; <a href="/">Dev Connect</a>. Tous Droits
							Réservés .
						</p>
					</div>
				</div>
			</div>
		</div>
	</footer>
    )
}
export default Footer