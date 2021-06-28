import React, { FC } from "react";
import styled from "styled-components/native";

interface INavButton {
  onPressFunc?: any;
  icon?: JSX.Element;
}

const NavButton: FC<INavButton> = ({ onPressFunc, icon }) => {
  return <Button onPress={onPressFunc}>{icon}</Button>;
};

export default NavButton;

const Button = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
`;
