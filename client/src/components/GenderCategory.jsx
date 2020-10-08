import React from 'react';
import styled from 'styled-components';

const HeadlineLarge = styled.div`
  /* display: flex;
  justify-content: flex-start; */
  background-Color: pink;
`;

const Gender = styled.h2`
  font-family: Helvetica;
  font-size: 15px;
  text-transform: capitalize;
  Color: #000000;
  background-Color: yellow;
`;

const Category = styled.h2`
  font-family: Helvetica;
  font-size: 15px;
  text-transform: capitalize;
  Color: #000000;
  background-Color: lime;
`;

export default ({gender, category}) => {
  return (
    <HeadlineLarge>
      <Gender>{gender}</Gender>
      <Category>{category}</Category>
    </HeadlineLarge>
  );
};
