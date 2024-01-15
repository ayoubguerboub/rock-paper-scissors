import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  margin: 24px 0;
  z-index: 1;

  font-family: agentorange, Arial;
`;

export const PlayerLabel = styled.div`
  font-size: 1.5em;
  width: 20%;
  text-align: center;
`;

export const HeaderCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  max-width: 1200px;

  span {
    font-size: 24px;
    font-weight: 700;
    color: #3d3d3d;
  }
`;

export const ResetButton = styled.button`
  padding: 8px 12px;
  margin: 15px 0;

  border: 2px solid #000;
  border-radius: 4px;

  background-color: #fff;

  font-family: agentorange, Arial;
  color: #000;
  font-size: 1.1em;
  cursor: pointer;

  transform: skew(-5deg) rotate(-1deg);

  &:hover {
    background-color: #000;
    color: #fff;
  }

  transition: all 0.2s ease-in-out;
`;

export const ScoreDisplay = styled.p`
  font-size: 2.5em;
  font-weight: 700;
  color: #000;
`;
