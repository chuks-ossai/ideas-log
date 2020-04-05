import React from 'react';
import './header.component.scss';

const Header = props => (
  <div className="Header">
    <h1 className="title">{props.title}</h1>
    <h3 className="subtitle">{props.subtitle}</h3>
  </div>
);


export default Header;