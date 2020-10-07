import React from 'react';
import styled from 'styled-components';

// const Styles = styled.h2`
//   display: flex;
//   justify-content: flex-start;
// `;

let Style = function({ style }) {
  return (
    <div>
      {style.styleId}
      {style.options}
    </div>
  );
};

export default Style;
