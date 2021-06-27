import React, { FC } from "react";
import styled from "styled-components/native";

interface ilable {}

const lable: FC<ilable> = ({}) => {
  return (
    <Wrapper>
      <Text>Subscrubered</Text>
    </Wrapper>
  );
};

export default lable;

const Wrapper = styled.View`
  flex: 1;
  text-align: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 25px;
`;
