import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useAppSelector } from "./src/store/hooks";
import { selectorUser } from "./src/store/user/userSelector";

import { Auth } from "./src/views/screens/Auth";
import { Registration } from "./src/views/screens/Registration";
import { Desk } from "./src/views/screens/Desk";
import { Column } from "./src/views/screens/Column";

const Stack = createStackNavigator();

const Navigation = () => {
  const user = useAppSelector(selectorUser);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user.isAuth ? (
          <>
            <Stack.Screen name="Home" component={Desk} />
            <Stack.Screen name="Column" component={Column} />
          </>
        ) : (
          <>
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="Registration" component={Registration} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
