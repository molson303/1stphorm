import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import styled from "styled-components";
// @material-ui/icons
import Logo from "../../assets/img/logo.png";
// core components
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import HeaderLinks from "../../components/Header/HeaderLinks.jsx";
import Parallax from "../../components/Parallax/Parallax.jsx";

import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";

const dashboardRoutes = [];

const LogoContainer = styled.img`
  padding-right: 10px;
`;

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <React.Fragment>
        <Parallax filter image={require("../../assets/img/workout2.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={8}>
                <LogoContainer src={Logo} alt="" />
                <h1 className={classes.title}>1st Phorm</h1>
                <h2>
                  110% Guarantee. Highest Quality Supplements. Free Shipping.
                </h2>
                <br />
                <Button
                  color="mainButton"
                  size="lg"
                  href="https://1stphorm.com/molson303"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-shopping-cart" />
                  Shop All Products
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main)}>
          <div className={classes.container}>
            <ProductSection />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
