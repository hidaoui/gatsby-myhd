//import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"
import TopHeader from "./topHeader"
import BottomHeader from "./bottomHeader"
import ProductSearch from "./productSearch"
import StickerMobileHeader from "./stickerMobileHeader"

const Header = () => (
	<header className="header-area">
		<div className="desktop-header">
      <TopHeader></TopHeader>
      <BottomHeader></BottomHeader>
      <ProductSearch></ProductSearch>
    </div>
    <StickerMobileHeader></StickerMobileHeader>
  </header>
)

/*
const Header = () => (
	<header className="header-area">
		<div className="desktop-header">
      <TopHeader></TopHeader>
      <BottomHeader></BottomHeader>
      <ProductSearch></ProductSearch>
    </div>
    <StickerMobileHeader></StickerMobileHeader>
  </header>
)
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}*/

export default Header
