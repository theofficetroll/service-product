import React from 'react';
import styled from 'styled-components';

const GenderCategory = styled.div`
  display: flex;
  flex-flow: row;
  font-family: Helvetica;
  font-size: 1.5em;
  text-transform: capitalize;
  Color: rgb(27, 17, 17);
  /* background-Color: pink; */
`;

export default ({ gender, category }) => {
  console.log(gender, category);
  return (
    <GenderCategory>
      {gender} {category}
    </GenderCategory>
  );
};
