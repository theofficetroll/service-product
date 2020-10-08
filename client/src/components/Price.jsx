import React from 'react';
import styled from 'styled-components';

const Price = styled.h2`
  /* display: flex;
  justify-content: flex-end; */
  background-color: mediumslateblue;
`;
export default ({ style }) => {
  console.log(style);
  return (
    <Price>$ {style.price}</Price>
  );
};