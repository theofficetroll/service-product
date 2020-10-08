import React from 'react';
import styled from 'styled-components';

const Name = styled.h2`
  /* display: flex;
  justify-content: flex-start; */
  font-family: Helvetica;
  font-size: 20px;
  text-transform: capitalize;
  Color: #000000;
  background-color: deepskyblue;
`;

export default ({name}) => {
  return (
    <Name>{name}</Name>
  );
};