import React, { FC, useEffect, useState } from "react";
import styled from "styled-components/native";
import { SwipeListView } from "react-native-swipe-list-view";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { createNewPreyer } from "../../../store/column/columnSlice";
import { deletePrayer, getAllPrayers } from "../../../store/prayer/prayerSlice";
import { selectorPrayers } from "../../../store/prayer/prayerSelector";

import { Card } from "../../components/Card";
import { Input } from "../../components/UI/Input";
import { Icon } from "react-native-elements";
import { Text } from "react-native";

interface IPrayers {
  columnId: number;
}
const Prayers: FC<IPrayers> = ({ columnId }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllPrayers());
  }, [dispatch]);
  //
  const allCards = useAppSelector(selectorPrayers);

  const cards = Object.keys(allCards)
    .filter(id => allCards[id].columnId === columnId)
    .map(id => {
      return {
        key: allCards[id].id,
        card: allCards[id],
      };
    });

  const rI = data => {
    if (data.item.card) {
      return <Card card={{ ...data.item.card }} />;
    } else {
      return <Text>{data.item.text}</Text>;
    }
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
      {cards ? (
        <SwipeListView
          data={cards}
          renderItem={rI}
          renderHiddenItem={data => (
            <Button
              onPress={() => {
                dispatch(deletePrayer({ id: data.item?.card.id }));
              }}>
              <ButtonTitle>Delete</ButtonTitle>
            </Button>
          )}
          rightOpenValue={-75}
        />
      ) : null}
    </Wrapper>
  );
};

export default Prayers;

const Wrapper = styled.View`
  flex: 1;
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
