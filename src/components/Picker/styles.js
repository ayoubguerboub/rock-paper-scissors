import styled from 'styled-components';

export const PickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  bottom: 20%;
  left: 50%;

  z-index: 1;

  width: 300px;
  margin-left: -150px;

  ${({ $isVisible }) => {
    if (!$isVisible) {
      return `display: none;`;
    }
  }}
`;

export const PickerTitle = styled.div`
  font-family: agentorange, Arial;
  font-size: 20px;
  color: #fff;
  background-color: #000;
  text-align: center;

  padding: 6px 16px;

  transform: skew(-8deg) rotate(-6deg);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 300px;
  height: 60px;
  margin-top: 40px;
`;

export const PickerButton = styled.div`
  width: 60px;
  height: 60px;

  border-radius: 50%;
  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &.selected {
    border: 4px solid #fff;
  }

  background: black url(${({ $img }) => $img});
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
`;
