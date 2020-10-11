import React from 'react';
import styled from 'styled-components';

const Name = styled.div`
  font-family: Helvetica;
  font-size: 2.5em;
  text-transform: capitalize;
  Color: rgb(27, 17, 17);
  /* background-color: deepskyblue; */
`;

export default ({ name }) => {
  console.log(name);
  return (
    <Name>{name}</Name>
  );
};