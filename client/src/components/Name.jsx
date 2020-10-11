import React from 'react';
import styled from 'styled-components';

const NameWrapper = styled.div`
  display: flex;
  flex-flow: column;
  /* background-Color: beige; */
`;

const Name = styled.div`
  font-family: Helvetica;
  font-size: 2.5em;
  text-transform: capitalize;
  Color: rgb(27, 17, 17);
  /* background-color: deepskyblue; */
`;

const GenderCategory = styled.div`
  display: flex;
  flex-flow: row;
  font-family: Helvetica;
  font-size: 1.5em;
  text-transform: capitalize;
  Color: rgb(27, 17, 17);
  /* background-Color: pink; */
`;

export default ({ name, gender, category }) => {
  return (
    <NameWrapper>
      <GenderCategory>{gender} {category}</GenderCategory>
      <Name>{name}</Name>
    </NameWrapper>
  );
};