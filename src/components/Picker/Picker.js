import React from 'react';

import rockIcon from '../../assets/rock_icon.png';
import paperIcon from '../../assets/paper_icon.png';
import scissorsIcon from '../../assets/scissors_icon.png';

import {
  PickerContainer,
  PickerTitle,
  ButtonsContainer,
  PickerButton,
} from './styles';

const Picker = ({ onPick, isVisible }) => {
  return (
    <PickerContainer $isVisible={isVisible}>
      <PickerTitle>CHOOSE YOUR NEXT MOVE</PickerTitle>
      <ButtonsContainer>
        <PickerButton $img={rockIcon} onClick={() => onPick('rock')} />
        <PickerButton $img={paperIcon} onClick={() => onPick('paper')} />
        <PickerButton $img={scissorsIcon} onClick={() => onPick('scissors')} />
      </ButtonsContainer>
    </PickerContainer>
  );
};

export default Picker;
