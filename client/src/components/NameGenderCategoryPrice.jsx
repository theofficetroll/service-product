import React from 'react';
import styled from 'styled-components';
import NameGenderCategory from './NameGenderCategory.jsx';
import Price from './Price.jsx';

const NameGenderCategoryPrice = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  background-Color: azure;
`;

export default ({ name, gender, category, price }) => {

  return (
    <NameGenderCategoryPrice>
      <NameGenderCategory name={name} gender={gender} category={category} />
      <Price price={price} />
    </NameGenderCategoryPrice>
  );
};