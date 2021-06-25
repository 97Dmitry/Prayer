import React from "react";
import styled from "styled-components/native";
import { Icon } from "react-native-elements";
import { Header } from "../../components/Header";

const Column = () => {
  return (
    <Wrapper>
      <Header
        title={"*Column*"}
        icon={
          <Icon
            color={"#72a8bc"}
            name={"settings"}
            type={"material"}
            size={40}
          />
        }
        onPressFunc={() => {
          console.log("Tab");
        }}
      />
    </Wrapper>
  );
};

export default Column;

const Wrapper = styled.View``;
