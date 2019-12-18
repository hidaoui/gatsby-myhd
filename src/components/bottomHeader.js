import React from "react"
import logo from "../assets/images/sliders/logo_my_hd.png"
//import { Link } from "gatsby"
import Navbar from "./Navbar"

const BottomHeader = () => (
<div className="sticker header-bottom">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-lg-2">
							<div className="logo">
								<a href="/"><img src={logo} alt="logo" /></a>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="mainmenu">  
								<Navbar></Navbar>
							</div>
						</div>
						<div className="col-lg-2">
							<div className="register-login pull-right">
								<span>/</span>
								<a href="/">Me Déconnecter</a>
								<span>/</span>
								
							</div>
						</div>
					</div>
				</div>
			</div>
)
export default BottomHeader