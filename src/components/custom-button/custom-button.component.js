import React from 'react';
import './custom-button.component.scss';

const CustomButton = props => (
  <button
    className={`${props.isRounded ? 'rounded' : ''} CustomButton`}
    disabled={!!props.disable}
    onClick={() => props.handleButtonClick()}
  >
    {props.children}
  </button>
);

export default CustomButton;