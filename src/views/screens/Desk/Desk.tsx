import React, { FC } from "react";
import styled from "styled-components/native";

import { ColumnLine } from "../../components/Column";
import { View } from "react-native";
import { Icon } from "react-native-elements";

import { Header } from "../../components/Header";

interface iDesk {
  navigation: any;
}

const Desk: FC<iDesk> = ({ navigation }) => {
  const columns = ["To Do", "In Progress", "Completed"];

  return (
    <View>
      <Header
        title={"My Desk"}
        icon={
          <Icon color={"#72a8bc"} name={"add"} type={"material"} size={40} />
        }
        onPressFunc={() => {
          console.log("Tab");
        }}
      />
      <Columns>
        {columns.map((value, index) => (
          <ColumnLine key={index} title={value} navigation={navigation} />
        ))}
      </Columns>
    </View>
  );
};

export default Desk;

const Columns = styled.View`
  padding: 15px;
`;
