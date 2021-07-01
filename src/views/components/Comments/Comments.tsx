import React, { FC } from "react";
import styled from "styled-components/native";

import User from "../../../assets/icons/user-img.svg";

interface IComments {}

const Comments: FC<IComments> = ({}) => {
  const userName = "User1";
  const comment = "Comment Comment";
  return (
    <Wrapper>
      <UserIcon>
        <User />
      </UserIcon>
      <RightWrapper>
        <UserName>{userName}</UserName>
        <Comment>{comment}</Comment>
      </RightWrapper>
    </Wrapper>
  );
};

export default Comments;

const Wrapper = styled.View`
  flex-direction: row;

  border-color: #e5e5e5;
  border-top-width: 1px;

  padding: 15px 0;
`;

const UserIcon = styled.View`
  margin-right: 10px;
  align-items: center;
  justify-content: center;
`;

const RightWrapper = styled.View``;

const UserName = styled.Text`
  font-weight: 700;
  font-size: 18px;
`;

const Comment = styled.Text`
  font-size: 18px;
`;
