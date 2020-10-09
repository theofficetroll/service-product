import React from 'react';
import styled from 'styled-components';

const Style = styled.img`
  width: 30px;
  height: 30px;
  margin: 15px;
`;

export default ({ style }) => {
  console.log(style);
  return (
    <Style src="https://images-dynamic-arcteryx.imgix.net/F20/55x70/Norvan-SL-Shoe-W-Ultralush-Devine.png?auto=format" />
  );
};