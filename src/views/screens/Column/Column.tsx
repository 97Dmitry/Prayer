import React, { FC, useLayoutEffect } from "react";
import { Icon } from "react-native-elements";
import { SceneMap, TabView } from "react-native-tab-view";

import NavButton from "../../components/UI/NavButton/NavButton";
import { Subs } from "../Subs";
import { Prayers } from "../Prayers";
import { renderTabBar } from "../../components/UI/RendeTabBar";
import Logo from "../../../assets/icons/user.svg";

interface IColumn {
  route?: any;
  navigation?: any;
}

const Column: FC<IColumn> = ({ route, navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
      headerStyle: {
        shadowColor: "#fff",
      },

      headerRight: () => (
        <NavButton
          onPressFunc={() => console.log("Tab")}
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
  }, [navigation, route]);

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "myPrayers", title: "My prayers" },
    { key: "subscribed", title: "Subscribed" },
  ]);
  const renderScene = SceneMap({ myPrayers: Prayers, subscribed: Subs });

  return (
    <>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    </>
  );
};

export default Column;
