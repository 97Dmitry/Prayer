import "react-native-gesture-handler";
import React, { FC } from "react";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";

import store from "./src/store";
import Navigation from "./Navigation";

import { LogBox } from "react-native";
LogBox.ignoreLogs(["Reanimated 2"]);

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
