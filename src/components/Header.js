import React from 'react';

const Header = (props) =>　(
  <div>
    <h1>{props.title}</h1>
    {props.subtitle && <h2>{props.subtitle}</h2>}
  </div>
)

Header.defaultProps = {
  //If you don't specify "title" prop, default to this...
  title: "Indecision!",
}

export default Header;