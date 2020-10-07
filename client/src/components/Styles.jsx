import React from 'react';
import styled from 'styled-components';
import Style from './Style.jsx';

const Styles = styled.h2`
  display: flex;
  justify-content: flex-end;
  font-color: red;
`;

export default ({ styles }) => {
  console.log(styles);
  return (
    <Styles>
      {
        styles.map((style, i) => (
          <Style
            key={i}
            style={style}
          />
        ))
      }
    </Styles>
  );
};