import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import GoalCard from "../../../components/GoalCard/GoalCard.jsx";
import productStyle from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";
import styled from "styled-components";

const StyledGridContainer = styled(GridContainer)`
  && {
    padding-top: 50px;
  }
`;

const StyledGridItem = styled(GridItem)`
  && {
    padding-top: 40px;
  }
`;
class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>EXPLORE BY GOALS</h2>
            <h5 className={classes.description}>
              1st Phorm was founded on quality, built on service, and measured
              on results. Try us once and you will never go back.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <StyledGridContainer>
            <StyledGridItem xs={12} sm={12} md={4}>
              <GoalCard
                link="https://1stphorm.com/products/fat-burners/womens-fat-burners?a_aid=molson303"
                content="Women's Weight Loss"
                image="https://images.unsplash.com/photo-1517637382994-f02da38c6728?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c0a0a9d6f6e70a1e699b6f10abac0d5b&auto=format&fit=crop&w=800&q=60"
              />
            </StyledGridItem>
            <StyledGridItem xs={12} sm={12} md={4}>
              <GoalCard
                link="https://1stphorm.com/products/fat-burners/mens-fat-burners?a_aid=molson303"
                content="Men's Weight Loss"
                image="https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6a437732f90bc9951d6316ee9c1a2565&auto=format&fit=crop&w=800&q=60"
              />
            </StyledGridItem>
            <StyledGridItem xs={12} sm={12} md={4}>
              <GoalCard
                link="https://1stphorm.com/products/stacks/muscle-building?a_aid=molson303"
                content="Men's Muscle Building"
                image="https://images.unsplash.com/photo-1534368270820-9de3d8053204?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5bcfc593ade564b0a3581da3fdc69129&auto=format&fit=crop&w=800&q=60"
              />
            </StyledGridItem>
            <StyledGridItem xs={12} sm={12} md={6}>
              <GoalCard
                link="https://1stphorm.com/products/stacks/muscle-building?a_aid=molson303"
                content="Women's Muscle Building"
                image="https://images.unsplash.com/photo-1534367990512-edbdca781b00?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d306ec3415414b6287f690eaed79c39c&auto=format&fit=crop&w=800&q=60"
              />
            </StyledGridItem>
            <StyledGridItem xs={12} sm={12} md={6}>
              <GoalCard
                link="https://1stphorm.com/products/health-wellness?a_aid=molson303"
                content="Health and Wellness"
                image="https://images.unsplash.com/photo-1514512364185-4c2b0985be01?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8b8cd4e8830fb940abedfb7b9b386a79&auto=format&fit=crop&w=800&q=60"
              />
            </StyledGridItem>
          </StyledGridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
