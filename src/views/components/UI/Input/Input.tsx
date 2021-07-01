import React, { FC, useState } from "react";
import styled from "styled-components/native";

interface IInput {
  children?: JSX.Element;
  placeholderText: string;
  text: string;
  setText: any;
  secure?: boolean;
  botMargin?: number;
}

const Input: FC<IInput> = ({
  children,
  placeholderText,
  text,
  setText,
  secure = false,
  botMargin = 0,
}) => {
  const [focus, setFocus] = useState(false);
  return (
    <Wrapper border={focus} botMargin={botMargin}>
      <Icon>{children}</Icon>
      <InputField
        secureTextEntry={secure}
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
  botMargin?: number;
}
const Wrapper = styled.View<IWrapper>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  border-radius: 10px;
  border: ${props =>
    props.border ? "2px solid #8CE0F7" : "1px solid #e5e5e5"};
  margin-bottom: ${props => props.botMargin + "px" || 0};
`;

const InputField = styled.TextInput`
  height: 45px;
  margin: 0 5px;
  width: 80%;
`;

const Icon = styled.View`
  margin-left: 5px;
`;
