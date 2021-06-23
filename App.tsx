import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";

const App: React.FC = () => {
  return (
    <View>
      <TitleText>Hello World</TitleText>
    </View>
  );
};

export default App;

const TitleText = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;
