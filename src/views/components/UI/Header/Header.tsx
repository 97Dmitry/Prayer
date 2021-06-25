import React, { FC } from "react";
import styled from "styled-components/native";

interface iHeader {
  onPressFunc?: any;
  title: string;
  icon?: JSX.Element;
  children?: JSX.Element;
}

const Header: FC<iHeader> = ({ onPressFunc, title, icon, children }) => {
  return (
    <>
      <Title>
        <Wrapper>
          <TitleText>{title}</TitleText>
          <Button onPress={onPressFunc}>{icon}</Button>
        </Wrapper>
        {children}
      </Title>
    </>
  );
};

export default Header;

const Title = styled.View`
  min-height: 64px;
  border-bottom-color: #e5e5e5;
  border-bottom-width: 1px;
`;
const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 64px;
`;
const TitleText = styled.Text`
  font-size: 25px;
  color: black;
`;

const Button = styled.Text`
  position: absolute;
  right: 10px;
`;
