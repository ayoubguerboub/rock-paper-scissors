import React from 'react';

import {
  HeaderContainer,
  PlayerLabel,
  HeaderCenter,
  ResetButton,
  ScoreDisplay,
} from './styles';

const Header = ({ score, onRestart }) => {
  return (
    <HeaderContainer>
      <PlayerLabel>YOU</PlayerLabel>
      <HeaderCenter>
        <ResetButton onClick={onRestart}>RESTART</ResetButton>
        <ScoreDisplay>
          {score.player} - {score.opponent}
        </ScoreDisplay>
      </HeaderCenter>
      <PlayerLabel>THE COMPUTER</PlayerLabel>
    </HeaderContainer>
  );
};

export default Header;
