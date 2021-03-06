import React, { FC } from "react";
import styled from "styled-components/native";

interface ISubs {}

const Subs: FC<ISubs> = ({}) => {
  return (
    <Wrapper>
      <Text>Subscrubered</Text>
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
