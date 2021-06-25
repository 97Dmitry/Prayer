import React, { FC } from "react";
import styled from "styled-components/native";

import { Column } from "../../components/Column";
import { View } from "react-native";
import { Icon } from "react-native-elements";

import { Header } from "../../components/UI/Header";

const Desk: FC = () => {
  const columns = ["To Do", "In Progress", "Completed"];

  return (
    <View>
      <Header
        title={"My Desk"}
        icon={
          <Icon color={"#72a8bc"} name={"add"} type={"material"} size={40} />
        }
        onPressFunc={() => {
          console.log("111111111111111111111");
        }}
      />
      <Columns>
        {columns.map((value, index) => (
          <Column key={index} title={value} />
        ))}
      </Columns>
    </View>
  );
};

export default Desk;

const Columns = styled.View`
  padding: 15px;
`;
