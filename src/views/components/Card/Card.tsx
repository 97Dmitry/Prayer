import React, { FC, useState } from "react";
import { StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styled from "styled-components/native";

interface ICard {
  cardName: string;
}

const Card: FC<ICard> = ({}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <Wrapper>
      <Indicator />
      <BouncyCheckbox
        iconStyle={styles.checkBoxForm}
        fillColor={"#1fa055"}
        size={35}
        onPress={() => setToggleCheckBox(!toggleCheckBox)}
      />
      <Text>Item</Text>
      <Imgs />
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.View`
  height: 64px;
  margin-top: 10px;
  width: 90%;

  align-items: center;
  flex-direction: row;

  background-color: #ffffff;
  border-bottom-color: #e5e5e5;
  border-bottom-width: 1px;
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
`;

const Imgs = styled.Text`
  flex-direction: row;
`;

const styles = StyleSheet.create({
  checkBoxForm: {
    borderRadius: 0,
    borderColor: "#514D47",
  },
});
