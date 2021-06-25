import React, { FC } from "react";
import { Provider } from "react-redux";
import styled from "styled-components/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import store from "./src/store";

// import { Desk } from "./src/views/containers/Desk";
import { Auth } from "./src/views/containers/Auth";

const App: FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Wrapper>
          <Auth />
        </Wrapper>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;

const Wrapper = styled.View`
  flex: 1;
`;
