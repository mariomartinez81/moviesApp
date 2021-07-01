import React from 'react';

import './Button.css';

const Button = ({ title }) => {
  return (
    <>
      <button className='buttonNav'>{title}</button>
    </>
  );
};

export default Button;
