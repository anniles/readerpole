import React from 'react';
import icons from './../svg/icons.svg';

const Icon = ({ icon }) => {
  return (
    <span>
      <svg  role="presentation" width="40" height="40">
        <use xlinkHref={`${icons}#icon-${icon}`}></use>
      </svg>
    </span>
  );
}

export default Icon;