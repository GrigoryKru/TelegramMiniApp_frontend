import React from 'react';
import './Button.css';

const Button = (props) => {
  return <button {...props} сlassName={'button' + props.className} />;
};

export default Button;
