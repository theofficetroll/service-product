import React from 'react';
import styled from 'styled-components';

const HeadlineLarge = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Gender = styled.h2`
  font-family: Helvetica;
  font-size: 15px;
  text-transform: capitalize;
  Color: #000000;
`;

const Category = styled.h2`
  font-family: Helvetica;
  font-size: 15px;
  text-transform: capitalize;
  Color: #000000;
`;

export default ({gender, category}) => {
  return (
    <HeadlineLarge>
      <Gender>{gender}</Gender>
      <Category>{category}</Category>
    </HeadlineLarge>
  );
};
