import React, { FC, useEffect, useLayoutEffect } from "react";
import { Icon } from "react-native-elements";
import { SceneMap, TabView } from "react-native-tab-view";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectorColumn } from "../../../store/column/columnSelector";
import { getColumnById } from "../../../store/column/columnSlice";

import { NavButton } from "../../components/UI/NavButton";
import { Subs } from "../Subs";
import { Prayers } from "../Prayers";
import { renderTabBar } from "../../components/UI/RenderTabBar";

interface IColumn {
  route?: any;
  navigation?: any;
}

const Column: FC<IColumn> = ({ route, navigation }) => {
  const dispatch = useAppDispatch();
  const columnId = route.params.columnId;
  const column = useAppSelector(selectorColumn);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: column.title,
      headerStyle: {
        shadowColor: "#fff",
      },

      headerRight: () => (
        <NavButton
          onPressFunc={() =>
            navigation.navigate("ColumnSettingsModal", { column })
          }
          icon={
            <Icon
              color={"#72a8bc"}
              name={"settings"}
              type={"material"}
              size={40}
            />
          }
        />
      ),
    });
  }, [column, navigation, route]);

  useEffect(() => {
    dispatch(getColumnById({ id: columnId }));
  }, [dispatch, columnId]);

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "myPrayers", title: "My prayers" },
    { key: "subscribed", title: "Subscribed" },
  ]);
  const renderScene = SceneMap({
    myPrayers: () => <Prayers columnId={columnId} />,
    subscribed: Subs,
  });

  return (
    <>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        swipeEnabled={false}
      />
    </>
  );
};

export default Column;
