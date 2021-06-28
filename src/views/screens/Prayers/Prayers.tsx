import React, { FC } from "react";
import styled from "styled-components/native";
import { SwipeListView } from "react-native-swipe-list-view";

import { Card } from "../../components/Card";

const Prayers: FC = () => {
  const cards = [
    { key: 1, text: "Card1" },
    { key: 2, text: "Card2" },
    { key: 3, text: "Card3dddddddddddddddd" },
    { key: 4, text: "Card4" },
  ];

  const ri = data => {
    return <Card cardName={data.item.text} />;
  };

  return (
    <Wrapper>
      <Text>Prayers</Text>
      <SwipeListView
        data={cards}
        renderItem={ri}
        renderHiddenItem={() => (
          <Button
            onPress={() => {
              console.log("Delete");
            }}>
            <ButtonTitle>Delete</ButtonTitle>
          </Button>
        )}
        rightOpenValue={-75}
      />
    </Wrapper>
  );
};

export default Prayers;

const Wrapper = styled.View`
  background-color: #ffffff;
`;

const Text = styled.Text`
  text-align: center;
  font-size: 25px;
`;

const Button = styled.Pressable`
  position: absolute;
  right: 0;
  background-color: red;
  height: 64px;
  width: 75px;
  justify-content: center;
`;

const ButtonTitle = styled.Text`
  text-align: center;

  color: white;
  font-size: 20px;
`;
