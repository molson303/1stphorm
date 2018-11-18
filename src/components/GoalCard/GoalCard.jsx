import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const StyledCardMedia = styled(CardMedia)`
  height: 30vh;
`;

const StyledCardContainer = styled.div`
  && :hover {
    background: #00d2ff;
    background: -webkit-linear-gradient(to right, #3a7bd5, #00d2ff);
    background: linear-gradient(to right, #3a7bd5, #00d2ff);
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }
`;

class GoalCard extends Component {
  render() {
    return (
      <a href={this.props.link}>
        <StyledCardContainer>
          <Card>
            <StyledCardMedia image={this.props.image} />
            <CardContent>
              <Typography variant="headline" component="h2">
                {this.props.content}
              </Typography>
            </CardContent>
          </Card>
        </StyledCardContainer>
      </a>
    );
  }
}

GoalCard.propTypes = {
  content: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string
};

export default GoalCard;
