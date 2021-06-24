import React, { FC } from "react";
import styled from "styled-components/native";

interface iColumn {
  title: string;
}

const Column: FC<iColumn> = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default Column;

const Wrapper = styled.View`
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Title = styled.Text`
  font-size: 25px;
  padding: 20px 0 20px 15px;
`;
