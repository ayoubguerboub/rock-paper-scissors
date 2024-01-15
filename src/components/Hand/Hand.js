import React from 'react';

import rockIMG from '../../assets/rock.png';
import paperIMG from '../../assets/paper.png';
import scissorsIMG from '../../assets/scissors.png';

import { HandContainer, HandImg } from './styles';

const GESTURES = {
  rock: rockIMG,
  paper: paperIMG,
  scissors: scissorsIMG,
};

const Hand = ({ type, gesture, isAnimated }) => {
  return (
    <HandContainer $type={type}>
      <HandImg
        className={isAnimated && 'animated'}
        $type={type}
        src={GESTURES[gesture]}
      />
    </HandContainer>
  );
};

export default Hand;
