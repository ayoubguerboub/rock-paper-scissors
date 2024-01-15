import React from 'react';

import Hand from '../Hand/Hand';
import Picker from '../Picker/Picker';
import { GameplayAreaContainer, PlayerArea, OpponentArea } from './styles';

const GameplayArea = ({ onPick, gestures, isAnimated, isPickerVisible }) => {
  return (
    <GameplayAreaContainer>
      <Picker onPick={onPick} isVisible={isPickerVisible} />
      <PlayerArea>
        <Hand type='player' gesture={gestures.player} isAnimated={isAnimated} />
      </PlayerArea>
      <OpponentArea>
        <Hand
          type='opponent'
          gesture={gestures.opponent}
          isAnimated={isAnimated}
        />
      </OpponentArea>
    </GameplayAreaContainer>
  );
};

export default GameplayArea;
