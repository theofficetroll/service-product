import React from 'react';
import styled from 'styled-components';

const Gender = styled.div`
  flex: 2 1 auto;
  background-color: mistyrose;
`;
export default ({ gender }) => {
  console.log(gender);
  return (
    <Gender>{gender}</Gender>
  );
};