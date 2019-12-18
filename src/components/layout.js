import React from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"

//assets/css/bootstrap.min.css
import "../assets/css/bootstrap.min.css"
//assets/css/font-awesome.min.css
import "../assets/css/font-awesome.min.css"
//assets/css/themify-icons.css
import "../assets/css/themify-icons.css"
//assets/css/elegant.css
import "../assets/css/elegant.css"
//assets/css/jquery.mmenu.css
import "../assets/css/jquery.mmenu.css"
//assets/css/jquery-ui.min.css
//import "../assets/css/jquery-ui.min.css"
//assets/css/venobox.css
import "../assets/css/venobox.css"
//assets/css/slick.css
import "../assets/css/slick.css"
//assets/css/slick-theme.css
import "../assets/css/slick-theme.css"
//assets/css/cssanimation.min.css
import "../assets/css/cssanimation.min.css"
//assets/css/animate.css
import "../assets/css/animate.css"
//assets/css/helper.css
import "../assets/css/helper.css"
//assets/css/style.css
import "../assets/css/style.css"
//assets/css/responsive.css
import "../assets/css/responsive.css"

import Header from "./header"
import SliderArea from "./sliderArea"
import Footer from "./footer"


const Layout = ({ children }) => {
  /*
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)*/

  return (
    <>
      <Header />
      <SliderArea></SliderArea>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
