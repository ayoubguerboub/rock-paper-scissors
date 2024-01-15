import styled from 'styled-components';

export const GameplayAreaContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 0;

  font-family: agentorange, Arial;
  overflow: hidden;
`;

export const PlayerArea = styled.div`
  position: relative;

  width: 50%;
  height: 100vh;
`;

export const OpponentArea = styled.div`
  width: 50%;
  height: 100vh;
`;
