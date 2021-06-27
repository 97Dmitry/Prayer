import React, { FC, useLayoutEffect } from "react";
import styled from "styled-components/native";

import { ColumnLine } from "../../components/ColumnLine";
import { View } from "react-native";
import { Icon } from "react-native-elements";

import NavButton from "../../components/UI/NavButton/NavButton";

interface iDesk {
  navigation: any;
}

const Desk: FC<iDesk> = ({ navigation }) => {
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
    <View>
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
