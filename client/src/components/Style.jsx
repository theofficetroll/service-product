import React from 'react';
import styled from 'styled-components';

const Style = styled.img`
  width: 120px;
  height: 120px;
  margin: 5px;
  border: 1px;
  background-color: gainsboro;
  &:hover {
    border: 1px solid black;
  }
`;

export default ({ style, handleStyleClick }) => {
  const { imageThumbnail } = style;
  const imageUrl = `${imageThumbnail}?auto=format`;
  return (
    <Style src={imageUrl} onClick={() => handleStyleClick(style.styleId)}/>
  );
};