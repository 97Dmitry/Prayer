import "react-native-gesture-handler";
import React, { FC } from "react";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";

import store, { persistor } from "./src/store";
import { PersistGate } from "redux-persist/integration/react";
import Navigation from "./Navigation";

import { LogBox } from "react-native";
LogBox.ignoreLogs(["Reanimated 2"]);

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
