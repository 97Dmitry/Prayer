import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useAppSelector } from "./src/store/hooks";
import { selectorUserToken } from "./src/store/user/userSelector";

import httpClient from "./src/api/server";

import { Auth } from "./src/views/screens/Auth";
import { Registration } from "./src/views/screens/Registration";
import { Desk } from "./src/views/screens/Desk";
import { Column } from "./src/views/screens/Column";
import { Nav } from "./src/views/components/Nav";
import { NewColumnModal } from "./src/views/components/NewColumnModal";
import { ColumnSettingsModal } from "./src/views/components/ColumnSettingsModal";
import { InsideCard } from "./src/views/screens/InsideCard";

const Navigation = () => {
  const token = useAppSelector(selectorUserToken);
  const storageToken = async () => {
    try {
      const value = await AsyncStorage.getItem("persist:root");
      if (value) {
        const parsValue = JSON.parse(value);
        const userState = JSON.parse(parsValue.userState);
        return userState.token;
      }
    } catch (e) {
      console.log(e);
    }
  };
  storageToken().then();

  httpClient.interceptors.request.use(function (config) {
    token ? (config.headers.Authorization = `Bearer ${token}`) : null;
    return config;
  });

  const RootStack = createStackNavigator();
  const MainStack = createStackNavigator();
  function MainStackScreen() {
    return (
      <MainStack.Navigator
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
            <MainStack.Screen name="Home" component={Desk} />
            <MainStack.Screen
              name="Column"
              component={Column}
              // @ts-ignore
              options={({ route }) => ({ title: route.params?.title })}
            />
            <MainStack.Screen
              name="InsideCard"
              component={InsideCard}
              options={{ headerTitle: "" }}
            />
          </>
        ) : (
          <>
            <MainStack.Screen
              name="Auth"
              component={Auth}
              options={{ headerTitle: "Authorization" }}
            />
            <MainStack.Screen
              name="Registration"
              component={Registration}
              options={{ headerTitle: "Registration" }}
            />
          </>
        )}
      </MainStack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen name="Main" component={MainStackScreen} />
        <RootStack.Screen name="NewColumnModal" component={NewColumnModal} />
        <RootStack.Screen
          name="ColumnSettingsModal"
          component={ColumnSettingsModal}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
