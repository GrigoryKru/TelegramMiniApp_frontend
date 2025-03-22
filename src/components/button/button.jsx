import React from 'react';
import './button.css';

const button = (props) => {
  return <button {...props} ClassName={'button' + props.ClassName} />;
};

export default button;
