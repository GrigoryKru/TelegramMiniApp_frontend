import React from 'react';
import './button.css';

const button = (props) => {
  return <button {...props} сlassName={'button' + props.className} />;
};

export default button;
