import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;
