import React, { FC } from "react";
import styled from "styled-components/native";

const Prayers: FC = () => {
  return (
    <Wrapper>
      <Text>Prayers</Text>
    </Wrapper>
  );
};

export default Prayers;

const Wrapper = styled.View`
  flex: 1;
  text-align: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 25px;
`;
