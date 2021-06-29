import React, { FC, useEffect, useLayoutEffect } from "react";
import styled from "styled-components/native";

import { ColumnLine } from "../../components/ColumnLine";
import { Icon } from "react-native-elements";

import NavButton from "../../components/UI/NavButton/NavButton";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getAllColumns } from "../../../store/column/columnSlice";
import { selectorColumns } from "../../../store/column/columnSelector";

interface IDesk {
  navigation: any;
}

const Desk: FC<IDesk> = ({ navigation }) => {
  // const columns = ["To Do", "In Progress", "Completed"];
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
            navigation={navigation}
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
