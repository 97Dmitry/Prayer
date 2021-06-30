import React, { FC, useState } from "react";
import styled from "styled-components/native";
import { SwipeListView } from "react-native-swipe-list-view";

import { useAppDispatch } from "../../../store/hooks";
import { createNewPreyer } from "../../../store/column/columnSlice";

import { Card } from "../../components/Card";
import { Input } from "../../components/UI/Input";
import { Icon } from "react-native-elements";

interface IPrayers {
  columnId: number;
}
const Prayers: FC<IPrayers> = ({ columnId }) => {
  const dispatch = useAppDispatch();

  const cards = [
    { key: 1, text: "Card1" },
    { key: 2, text: "Card2" },
    { key: 3, text: "Card3dddddddddddddddd" },
    { key: 4, text: "Card4" },
  ];

  const rI = data => {
    return <Card cardName={data.item.text} />;
  };

  const [newPray, setNewPray] = useState("");
  const newPrayerHandler = () => {
    if (newPray.length) {
      dispatch(
        createNewPreyer({ description: "", title: newPray, id: columnId }),
      );
      setNewPray("");
    }
  };

  return (
    <Wrapper>
      <Input
        text={newPray}
        setText={setNewPray}
        placeholderText={"Add a prayer..."}
        botMargin={15}
        children={
          <Icon
            color={"#72a8bc"}
            name={"add"}
            type={"material"}
            size={40}
            onPress={newPrayerHandler}
          />
        }
      />
      <SwipeListView
        data={cards}
        renderItem={rI}
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
  padding: 15px 15px;
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
