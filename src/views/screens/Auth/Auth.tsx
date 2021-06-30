import React, { FC, useState } from "react";
import styled from "styled-components/native";
import { Button } from "react-native";

import { useAppDispatch } from "../../../store/hooks";
import { authorization } from "../../../store/user/userSlice";

import { Input } from "../../components/UI/Input";

interface IAuth {
  navigation: any;
}

const Auth: FC<IAuth> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const authHandler = () => {
    dispatch(authorization({ email, password }));
  };

  return (
    <Wrapper>
      <Text>Login</Text>
      <Input
        placeholderText={"Input your login"}
        text={email}
        setText={setEmail}
      />
      <Text>Password</Text>
      <Input
        placeholderText={"Input your password"}
        text={password}
        setText={setPassword}
        secure={true}
      />
      <ButtonUp>
        <Button title={"Sing In"} onPress={authHandler} />
      </ButtonUp>
      <SingUp
        onPress={() => {
          navigation.navigate("Registration");
        }}>
        <Text color={"blue"}>Don’t have an account?</Text>
      </SingUp>
    </Wrapper>
  );
};

export default Auth;

const Wrapper = styled.View`
  padding: 25px;
  flex: 1;
`;

const Text = styled.Text<{ color?: string }>`
  font-size: 18px;
  margin-bottom: 5px;
  color: ${props => props.color || "black"};
`;

const ButtonUp = styled.View`
  margin-top: 30px;
`;

const SingUp = styled.Pressable`
  margin-top: 25px;
  align-self: center;
`;
