import React from 'react';
import styled from 'styled-components';

const Category = styled.div`
  flex: 1 1 auto;
  background-color: mediumslateblue;
`;
export default ({ category }) => {
  return (
    <Category>{category}</Category>
  );
};