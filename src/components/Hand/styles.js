import styled from 'styled-components';

export const HandContainer = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`;

export const HandImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  bottom: 0;

  @keyframes animatePlayerHand {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(55deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes animateOpponentHand {
    0% {
      transform: scaleX(-1) rotate(0deg);
    }
    50% {
      transform: scaleX(-1) rotate(55deg);
    }
    100% {
      transform: scaleX(-1) rotate(0deg);
    }
  }

  ${({ $type }) => {
    if ($type === 'opponent') {
      return `
				transform: scaleX(-1);
				right: -200px;

				&.animated {
					animation: animateOpponentHand 0.3s ease-in-out infinite;
				}
			`;
    } else {
      return `
				transform: scaleX(1);
				left: -200px;

				&.animated {
					animation: animatePlayerHand 0.3s ease-in-out infinite;
				}
			`;
    }
  }}
`;
