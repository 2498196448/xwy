import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  .header {
    height: 70vw;
    background-color: #7f5c74;
  }
`;

function Playlist() {
  return (
    <Div>
      <div className="header" />
    </Div>
  );
}
export default Playlist;
