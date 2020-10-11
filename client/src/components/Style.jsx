import React from 'react';
import styled from 'styled-components';

const Style = styled.img`
  width: 120px;
  height: 120px;
  margin: 5px;
  border: 1px;
  /* padding: 20px */
  background-color: gainsboro;
  &:hover {
    border: 1px solid black;
  }
`;

export default ({ style }) => {
  console.log(style);
  const imageUrl = `${style.imageThumbnail}?auto=format`;
  return (
    <Style src={imageUrl} />
  );
};