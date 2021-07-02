import React, { FC, useState } from "react";
import styled from "styled-components/native";
import { Input } from "../UI/Input";
import { useAppDispatch } from "../../../store/hooks";
import { createNewColumn } from "../../../store/column/columnSlice";
import { Icon } from "react-native-elements";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../Navigation";

type ScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "NewColumnModal"
>;

interface INewColumnModal {
  navigation: ScreenNavigationProp;
}

const NewColumnModal: FC<INewColumnModal> = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useAppDispatch();

  const createNewColumnHandler = () => {
    if (title.length > 1) {
      dispatch(createNewColumn({ title, description }));
      navigation.goBack();
    }
  };

  return (
    <>
      <BackButton
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon color={"#72a8bc"} name={"close"} type={"material"} size={70} />
      </BackButton>

      <Wrapper>
        <Text>Title</Text>
        <Input
          placeholderText={"Input column title"}
          text={title}
          setText={setTitle}
          botMargin={15}
        />
        <Text>Description</Text>
        <Input
          placeholderText={"Input column description"}
          text={description}
          setText={setDescription}
          botMargin={15}
        />
        <Button title={"Submit"} onPress={createNewColumnHandler} />
      </Wrapper>
    </>
  );
};

export default NewColumnModal;

const Wrapper = styled.View`
  flex: 1;
  padding: 30px;
  align-items: center;
  justify-content: center;

  background-color: #31797d;
`;

const Text = styled.Text`
  font-size: 20px;
`;
const Button = styled.Button``;

const BackButton = styled.Pressable`
  position: absolute;
  right: 30px;
  top: 30px;
  z-index: 10;
`;
