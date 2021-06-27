import React, { FC } from "react";
import styled from "styled-components/native";

type iCard = {
  cardName: string;
};

const Card: FC<iCard> = ({}) => {
  return (
    <Wrapper>
      <Text>Item</Text>
      <Imgs />
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: 10px;
  border-bottom: 1px #e5e5e5 solid;
`;

const Text = styled.Text`
  font-size: 18px;
`;

const Imgs = styled.Text`
  flex: 1;
  flex-direction: row;
`;
