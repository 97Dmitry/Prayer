import React, { useState } from "react";
import styled from "styled-components/native";
import { Button } from "react-native";

import { Header } from "../../components/Header";
import { Input } from "../../components/UI/Input";

const Auth = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Wrapper>
        <Header title={"Authorization"} />
      </Wrapper>
      <Content>
        <Text>Login</Text>
        <Input
          placeholderText={"Input your login"}
          text={login}
          setText={setLogin}
        />
        <Text>Password</Text>
        <Input
          placeholderText={"Input your password"}
          text={password}
          setText={setPassword}
        />
        <ButtonUp>
          <Button
            title={"Sing In"}
            onPress={() => {
              console.log("Login: ", login, "Password: ", password);
            }}
          />
        </ButtonUp>
      </Content>
    </>
  );
};

export default Auth;

const Wrapper = styled.View``;
const Content = styled.ScrollView`
  padding: 25px;
  flex: 1;
`;

const Text = styled.Text`
  font-size: 18px;
  margin-bottom: 5px;
`;

const ButtonUp = styled.View`
  margin-top: 30px;
`;
