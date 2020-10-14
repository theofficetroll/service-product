import React from 'react';
import styled from 'styled-components';
import Style from './Style.jsx';

const Styles = styled.div`
  display: flex;
  justify-content: flex-start;
  font-color: red;
  /* background-color: lavender;4 */
`;

export default ({ styles }) => {
  // console.log(styles);
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