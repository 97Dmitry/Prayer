import React, { FC } from "react";
import styled from "styled-components/native";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackParamList } from "../../../../Navigation";

type ScreenNavigationProp = StackNavigationProp<MainStackParamList, "Column">;

interface IColumn {
  title: string;
  columnId: number;
}

const ColumnLine: FC<IColumn> = ({ title, columnId }) => {
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <Wrapper
      onPress={() => {
        navigation.navigate("Column", { title, columnId });
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
