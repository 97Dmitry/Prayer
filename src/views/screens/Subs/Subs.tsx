import React, { FC } from "react";
import styled from "styled-components/native";
import { Card } from "../../components/Card";

interface ISubs {}

const Subs: FC<ISubs> = ({}) => {
  return (
    <Wrapper>
      <Text>Subscrubered</Text>
      <Card cardName={"Card"} />
      <Card cardName={"Card"} />
    </Wrapper>
  );
};

export default Subs;

const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
  text-align: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 25px;
`;
