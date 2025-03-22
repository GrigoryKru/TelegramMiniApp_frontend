import React from 'react';

const button = (props) => {
  return <button {...props} ClassName={'button' + props.ClassName} />;
};

export default button;
