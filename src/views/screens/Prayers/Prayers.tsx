import React, { FC } from "react";
import styled from "styled-components/native";

import { Card } from "../../components/Card";

const Prayers: FC = () => {
  return (
    <Wrapper>
      <Text>Prayers</Text>
      <Card cardName={"Card"} />
      <Card cardName={"Card"} />
      <Card cardName={"Card"} />
      <Card cardName={"Card"} />
    </Wrapper>
  );
};

export default Prayers;

const Wrapper = styled.View`
  flex: 1;
  text-align: center;
  align-items: center;

  background-color: #ffffff;
`;

const Text = styled.Text`
  font-size: 25px;
`;
