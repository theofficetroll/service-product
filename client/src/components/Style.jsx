import React from 'react';
import styled from 'styled-components';

const Style = styled.img`
  width: 30px;
  height: 30px;
  margin: 15px;
`;

export default ({ style }) => {
  console.log(style);
  const imageUrl = `${style.imageThumbnail}?auto=format`;
  return (
    <Style src={imageUrl} />
  );
};