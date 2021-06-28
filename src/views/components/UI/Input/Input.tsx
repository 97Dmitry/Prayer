import React, { FC, useState } from "react";
import styled from "styled-components/native";

interface IInput {
  children?: JSX.Element;
  placeholderText: string;
  text: string;
  setText: any;
}

const Input: FC<IInput> = ({ children, placeholderText, text, setText }) => {
  const [focus, setFocus] = useState(false);
  return (
    <Wrapper border={focus}>
      <Icon>{children}</Icon>
      <InputField
        onFocus={() => {
          setFocus(!focus);
        }}
        onBlur={() => {
          setFocus(!focus);
        }}
        placeholder={placeholderText}
        onChangeText={setText}
        value={text}
      />
    </Wrapper>
  );
};

export default Input;

interface IWrapper {
  border: boolean;
}
const Wrapper = styled.View<IWrapper>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  border-radius: 10px;
  border: ${props =>
    props.border ? "2px solid #8CE0F7" : "1px solid #e5e5e5"};
`;

const InputField = styled.TextInput`
  height: 45px;
  margin: 0 10px;
  width: 100%;
`;

const Icon = styled.View`
  margin-left: 5px;
`;
