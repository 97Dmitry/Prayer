import React, { FC } from "react";
import { Provider } from "react-redux";
import styled from "styled-components/native";

import store from "./src/store";

import { Desk } from "./src/views/containers/Desk";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <Desk />
      </Wrapper>
    </Provider>
  );
};

export default App;

const Wrapper = styled.View`
  flex: 1;
`;
