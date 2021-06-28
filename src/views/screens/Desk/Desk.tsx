import React, { FC, useLayoutEffect } from "react";
import styled from "styled-components/native";

import { ColumnLine } from "../../components/ColumnLine";
import { Icon } from "react-native-elements";

import NavButton from "../../components/UI/NavButton/NavButton";

interface IDesk {
  navigation: any;
}

const Desk: FC<IDesk> = ({ navigation }) => {
  const columns = ["To Do", "In Progress", "Completed"];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "My Desk",
      headerRight: () => (
        <NavButton
          onPressFunc={() => console.log("Tab")}
          icon={
            <Icon color={"#72a8bc"} name={"add"} type={"material"} size={40} />
          }
        />
      ),
    });
  }, [navigation]);

  return (
    <Wrapper>
      <Columns>
        {columns.map((value, index) => (
          <ColumnLine key={index} title={value} navigation={navigation} />
        ))}
      </Columns>
    </Wrapper>
  );
};

export default Desk;

const Wrapper = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const Columns = styled.View`
  padding: 15px;
`;
