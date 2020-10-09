import React from 'react';
import styled from 'styled-components';

const Price = styled.h2`
  background-color: mediumslateblue;
`;
export default ({ price }) => {
  return (
    <Price>$ {price}</Price>
  );
};