import React from 'react';
import styled from 'styled-components';
import Name from './Name.jsx';
import Price from './Price.jsx';

const Product = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  /* background-Color: azure; */
`;

export default ({ details }) => {
  const { name, gender, category, price } = details;
  return (
    <Product>
      <Name name={name} gender={gender} category={category} />
      <Price price={price} />
    </Product>
  );
};