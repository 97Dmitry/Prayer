import React, { useState } from "react";
import styled from "styled-components/native";
import { Button } from "react-native";

import { useAppDispatch } from "../../../store/hooks";
import { registration } from "../../../store/user/userSlice";

import { Input } from "../../components/UI/Input";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();

  const registrationHandler = () => {
    dispatch(registration({ email, name, password }));
  };

  return (
    <>
      <Wrapper>
        <Text>Email</Text>
        <Input
          placeholderText={"Input your email"}
          text={email}
          setText={setEmail}
        />
        <Text>Name</Text>
        <Input
          placeholderText={"Input your email"}
          text={name}
          setText={setName}
        />
        <Text>Password</Text>
        <Input
          placeholderText={"Input your password"}
          text={password}
          setText={setPassword}
          secure={true}
        />
        <ButtonUp>
          <Button title={"Sing Up"} onPress={registrationHandler} />
        </ButtonUp>
      </Wrapper>
    </>
  );
};

export default Registration;

const Wrapper = styled.View`
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
