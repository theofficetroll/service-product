import React from 'react';
import styled from 'styled-components';

const Price = styled.h3`
  font-family: Helvetica;
  font-size: 1.5em;
  Color: rgb(27, 17, 17);

  /* background-color: mediumslateblue; */
`;
export default ({ price }) => {
  return (
    <Price>$ {price === '0' ? '' : price}</Price>
  );
};