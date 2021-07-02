import React, { FC, useState } from "react";
import { StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackParamList } from "../../../../Navigation";

import Prayer from "../../../assets/icons/pray.svg";
import User from "../../../assets/icons/user.svg";

type ScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  "InsideCard"
>;

interface ICard {
  card: {
    checked: boolean;
    columnId: number;
    commentsIds: number[];
    description: string;
    id: number;
    title: string;
  };
}

const Card: FC<ICard> = ({ card }) => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return card ? (
    <Wrapper
      onPress={() => {
        navigation.navigate("InsideCard", {
          cardName: card.title,
          prayerId: card.id,
        });
      }}>
      <WrapperLeft>
        <Indicator color={card.checked ? "green" : "red"} />
        <BouncyCheckbox
          iconStyle={styles.checkBoxForm}
          fillColor={"#1fa055"}
          size={35}
          onPress={() => setToggleCheckBox(!toggleCheckBox)}
        />
        <Text numberOfLines={1}>{card.title}</Text>
      </WrapperLeft>
      <Imgs>
        <Prayer width={50} height={40} />
        <CountText>{Math.floor(Math.random() * 100)}</CountText>
        <User width={50} height={40} />
        <CountText>{Math.floor(Math.random() * 100)}</CountText>
      </Imgs>
    </Wrapper>
  ) : null;
};

export default Card;

const Wrapper = styled.Pressable`
  height: 64px;
  padding: 0 10px;
  width: 100%;

  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  background-color: #ffffff;
  border-bottom-color: #e5e5e5;
  border-bottom-width: 1px;
`;

const WrapperLeft = styled.View`
  align-items: center;
  flex-direction: row;
`;

interface IIndicator {
  color?: string;
}
const Indicator = styled.View<IIndicator>`
  height: 35px;
  width: 5px;
  margin-right: 15px;
  border-radius: 4px;

  background-color: ${props => props.color || "#AC5253"};
`;

const Text = styled.Text`
  font-size: 18px;
  align-self: center;
  max-width: 120px;
`;

const CountText = styled.Text`
  font-size: 15px;
`;

const Imgs = styled.View`
  flex-direction: row;
  align-items: center;
`;

const styles = StyleSheet.create({
  checkBoxForm: {
    borderRadius: 5,
    borderColor: "#514D47",
  },
});
