import React from 'react';
import styled from 'styled-components';
import Name from './Name.jsx';
import GenderCategory from './GenderCategory.jsx';


const NameGenderCategory = styled.div`
  display: flex;
  flex-flow: column;
  /* background-Color: beige; */
`;

export default ({ name, gender, category }) => {
  return (
    <NameGenderCategory>
      <GenderCategory gender={gender} category={category} />
      <Name name={name}/>
    </NameGenderCategory>
  );
};