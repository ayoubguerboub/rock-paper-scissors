import React, { useState } from 'react';

import Fonts from './fonts/fonts';
import Header from './components/Header/Header';
import GameplayArea from './components/GameplayArea/GameplayArea';

const INITIAL_VALUES = {
  score: {
    player: 0,
    opponent: 0,
  },
  gestures: {
    player: 'rock',
    opponent: 'rock',
  },
  isAnimated: false,
  isPickerVisible: true,
};

const CHOICES = ['rock', 'paper', 'scissors']; // next value always beats previous value

const getNextCirclingValue = (array, currentIndex) => {
  const nextIndex = (currentIndex + 1) % array.length;
  return array[nextIndex];
};

const getWinner = (playerPick, opponentPick) => {
  if (playerPick === opponentPick) {
    return 'tie';
  }

  if (
    getNextCirclingValue(CHOICES, CHOICES.indexOf(opponentPick)) === playerPick // the player's pick beats the opponent's pick
  ) {
    return 'player';
  } else {
    return 'opponent';
  }
};

const App = () => {
  const [score, setScore] = useState(INITIAL_VALUES.score);
  const [gestures, setGestures] = useState(INITIAL_VALUES.gestures);
  const [isAnimated, setIsAnimated] = useState(INITIAL_VALUES.isAnimated);
  const [isPickerVisible, setIsPickerVisible] = useState(
    INITIAL_VALUES.isPickerVisible
  );

  const onRestart = () => {
    setScore(INITIAL_VALUES.score);
    setGestures(INITIAL_VALUES.gestures);
    setIsAnimated(INITIAL_VALUES.isAnimated);
    setIsPickerVisible(INITIAL_VALUES.isPickerVisible);
  };

  const onPick = async (playerPick) => {
    const opponentPick = CHOICES[Math.floor(Math.random() * 3)];
    const winner = getWinner(playerPick, opponentPick);

    setIsAnimated(true);
    setIsPickerVisible(false);
    setGestures(INITIAL_VALUES.gestures);

    setTimeout(() => {
      setIsPickerVisible(true);
      setIsAnimated(false);
      setGestures({
        player: playerPick,
        opponent: opponentPick,
      });

      const newScore = { ...score };
      newScore[winner] += 1;
      setScore(newScore);
    }, 900);
  };

  return (
    <div>
      <Fonts />
      <Header score={score} onRestart={onRestart} />
      <GameplayArea
        onPick={onPick}
        gestures={gestures}
        isAnimated={isAnimated}
        isPickerVisible={isPickerVisible}
      />
    </div>
  );
};

export default App;
