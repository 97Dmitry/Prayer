import React, { FC, useEffect, useLayoutEffect } from "react";
import styled from "styled-components/native";
import { Icon } from "react-native-elements";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getAllColumns } from "../../../store/column/columnSlice";
import { selectorColumns } from "../../../store/column/columnSelector";

import { ColumnLine } from "../../components/ColumnLine";
import NavButton from "../../components/UI/NavButton/NavButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackParamList, RootStackParamList } from "../../../../Navigation";
import { CompositeNavigationProp } from "@react-navigation/native";

type ScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, "ColumnSettingsModal">,
  StackNavigationProp<MainStackParamList, "Home">
>;

interface IDesk {
  navigation: ScreenNavigationProp;
}

const Desk: FC<IDesk> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const columns = useAppSelector(selectorColumns);

  useEffect(() => {
    dispatch(getAllColumns());
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "My Desk",
      headerRight: () => (
        <NavButton
          onPressFunc={() => navigation.navigate("NewColumnModal")}
          icon={
            <Icon color={"#72a8bc"} name={"add"} type={"material"} size={40} />
          }
        />
      ),
    });
  }, [navigation]);

  return (
    <Wrapper>
      <Columns>
        {Object.keys(columns).map(id => (
          <ColumnLine
            key={columns[id].id}
            columnId={columns[id].id}
            title={columns[id].title}
          />
        ))}
      </Columns>
    </Wrapper>
  );
};

export default Desk;

const Wrapper = styled.ScrollView`
  flex: 1;
  background-color: #ffffff;
`;

const Columns = styled.View`
  padding: 15px;
`;
