import { TabBar } from "react-native-tab-view";
import { Text } from "react-native";
import React from "react";

const renderTabBar = props => (
  <TabBar
    {...props}
    getAccessibilityLabel={({ route }) => route.accessibilityLabel}
    renderLabel={({ route }) => (
      <Text style={{ color: "black", margin: 8 }}>{route.title}</Text>
    )}
    getLabelText={({ route }) => route.title}
    indicatorStyle={{ backgroundColor: "#72a8bc" }}
    style={{ backgroundColor: "white" }}
  />
);
export default renderTabBar;
