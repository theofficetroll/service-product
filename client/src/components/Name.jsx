import React from 'react';
import styled from 'styled-components';

const Name = styled.div`
  font-family: Helvetica;
  font-size: 2.5em;
  text-transform: capitalize;
  Color: #000000;
  background-color: deepskyblue;
`;

export default ({ name }) => {
  console.log(name);
  return (
    <Name>{name}</Name>
  );
};