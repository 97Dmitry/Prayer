import React, { FC, useState } from "react";
import styled from "styled-components/native";
import { Input } from "../UI/Input";

import { useAppDispatch } from "../../../store/hooks";
import { deleteColumn, updateColumn } from "../../../store/column/columnSlice";
import { Icon } from "react-native-elements";

interface IColumnSettingsModal {
  route: any;
  navigation: any;
}

const ColumnSettingsModal: FC<IColumnSettingsModal> = ({
  route,
  navigation,
}) => {
  const [title, setTitle] = useState(route.params.column.title);
  const [description, setDescription] = useState(
    route.params.column.description,
  );

  const dispatch = useAppDispatch();

  const updateColumnHandler = () => {
    dispatch(updateColumn({ title, description, id: route.params.column.id }));
  };

  const deleteColumnHandler = () => {
    dispatch(deleteColumn({ id: route.params.column.id }));
    navigation.navigate("Home");
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
        <Title>Update column</Title>
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
        <Button title={"Submit"} onPress={updateColumnHandler} />

        <Title>Delete column</Title>
        <Button color={"red"} title={"Delete"} onPress={deleteColumnHandler} />
      </Wrapper>
    </>
  );
};

export default ColumnSettingsModal;

const Wrapper = styled.View`
  flex: 1;
  padding: 30px;
  justify-content: center;

  background-color: #31797d;
`;

const Title = styled.Text`
  font-size: 25px;
  text-align: center;
`;

const Text = styled.Text``;

const Button = styled.Button``;

const BackButton = styled.Pressable`
  position: absolute;
  right: 30px;
  top: 30px;
  z-index: 10;
`;
