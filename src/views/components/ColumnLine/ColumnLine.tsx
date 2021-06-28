import React, { FC } from "react";
import styled from "styled-components/native";

interface IColumn {
  title: string;
  navigation?: any;
}

const ColumnLine: FC<IColumn> = ({ title, navigation }) => {
  return (
    <Wrapper
      onPress={() => {
        navigation.navigate("Column", { title });
      }}>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default ColumnLine;

const Wrapper = styled.Pressable`
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Title = styled.Text`
  font-size: 25px;
  padding: 20px 0 20px 15px;
`;
