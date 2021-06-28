import React, { FC } from "react";
import { Text } from "react-native";

const Nav: FC = props => {
  return <Text>{props.children}</Text>;
};

export default Nav;
