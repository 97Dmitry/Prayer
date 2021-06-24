import React, { FC } from "react";
import styled from "styled-components/native";

import { Column } from "../../components/Column";
import { View } from "react-native";

const Desk: FC = () => {
  const columns = ["To Do", "In Progress", "Completed"];

  return (
    <View>
      <Title>
        <TitleText>My Desk</TitleText>
        <AddButton
          onPress={() => {
            console.log("e");
          }}>
          +
        </AddButton>
      </Title>
      <Columns>
        {columns.map((value, index) => (
          <Column key={index} title={value} />
        ))}
      </Columns>
    </View>
  );
};

export default Desk;

const Title = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 64px;

  border-bottom-color: #e5e5e5;
  border-bottom-width: 1px;
`;
const TitleText = styled.Text`
  font-size: 25px;
  color: black;
`;

const AddButton = styled.Text`
  font-size: 40px;
  position: absolute;
  right: 15px;
  color: #72a8bc;
`;

const Columns = styled.View`
  padding: 15px;
`;
