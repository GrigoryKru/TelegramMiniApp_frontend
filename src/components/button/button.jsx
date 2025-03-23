import React from 'react';
import './button.css';

const button = (props) => {
  return <button {...props} сlassName={'button' + props.ClassName} />;
};

export default button;
