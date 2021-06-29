import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useAppSelector } from "./src/store/hooks";
import { selectorUserToken } from "./src/store/user/userSelector";

import httpClient from "./src/api/server";

import { Auth } from "./src/views/screens/Auth";
import { Registration } from "./src/views/screens/Registration";
import { Desk } from "./src/views/screens/Desk";
import { Column } from "./src/views/screens/Column";
import { Nav } from "./src/views/components/Nav";

const Stack = createStackNavigator();

const Navigation = () => {
  const token = useAppSelector(selectorUserToken);

  httpClient.interceptors.request.use(function (config) {
    token ? (config.headers.Authorization = `Bearer ${token}`) : null;
    return config;
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: props => <Nav {...props} />,
          headerStyle: {
            backgroundColor: "#FFFFFF",
            borderBottomColor: "#e5e5e5",
            borderBottomWidth: 1,
          },
          headerTintColor: "#000",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: "200",
          },
        }}>
        {token ? (
          <>
            <Stack.Screen name="Home" component={Desk} />
            <Stack.Screen
              name="Column"
              component={Column}
              // @ts-ignore
              options={({ route }) => ({ title: route.params?.title })}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Auth"
              component={Auth}
              options={{ headerTitle: "Authorization" }}
            />
            <Stack.Screen
              name="Registration"
              component={Registration}
              options={{ headerTitle: "Registration" }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
