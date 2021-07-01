import React, { FC, useLayoutEffect, useState } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { NavButton } from "../../components/UI/NavButton";

import Prayer from "../../../assets/icons/pray-white.svg";
import User from "../../../assets/icons/user-img.svg";
import { Comments } from "../../components/Comments";
import { Icon } from "react-native-elements";

interface IInsideCard {
  route: any;
}

const InsideCard: FC<IInsideCard> = ({ route }) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#BFB393",
        shadowColor: "#BFB393",
      },
      headerTintColor: "white",
      headerRight: () => (
        <NavButton
          onPressFunc={() => {}}
          icon={<Prayer width={35} height={35} />}
        />
      ),
    });
  }, [navigation]);

  const [comment, setComment] = useState("");

  return (
    <>
      <TitleHead>
        <TitleText>{route.params.cardName}</TitleText>
      </TitleHead>
      <Wrapper>
        <TimeIndicator>
          <Indicator />
          <TimeText>Last Prayed 8 minutes ago</TimeText>
        </TimeIndicator>
        <SectionOne>
          <BlockOne>
            <TitleWrapper>
              <SectionTitle>July 25 1017</SectionTitle>
            </TitleWrapper>

            <SectionText>Times Prayed Total</SectionText>
            <SectionText color="#72A8BC">Opened for 4 days</SectionText>
          </BlockOne>
          <BlockTwo>
            <TitleWrapper>
              <SectionTitleBig>123</SectionTitleBig>
            </TitleWrapper>

            <SectionText>Times Prayed by Me</SectionText>
          </BlockTwo>
        </SectionOne>
        <SectionTwo>
          <BlockOne>
            <TitleWrapper>
              <SectionTitleBig>63</SectionTitleBig>
            </TitleWrapper>

            <SectionText>Times Prayed by Other</SectionText>
          </BlockOne>
          <BlockTwo>
            <TitleWrapper>
              <SectionTitleBig>60</SectionTitleBig>
            </TitleWrapper>

            <SectionText>Last update 8 minutes ago</SectionText>
          </BlockTwo>
        </SectionTwo>
        <Members>
          <BlueTitle>MEMBERS</BlueTitle>
          <MembersIcons>
            <User width={"40"} />
            <User width={"40"} />
            <User width={"40"} />
          </MembersIcons>
        </Members>
        <CommentsContainer>
          <BlueTitle>COMMENTS</BlueTitle>
          <Comments />
          <Comments />
        </CommentsContainer>
        <CommentWriteWrapper>
          <Icon
            color={"#72a8bc"}
            name={"message"}
            type={"material"}
            size={35}
          />
          <CommentWrite
            placeholder={"Write something..."}
            value={comment}
            onChangeText={setComment}
          />
        </CommentWriteWrapper>
      </Wrapper>
    </>
  );
};

export default InsideCard;

const Wrapper = styled.ScrollView`
  flex: 1;
  background-color: white;
`;

const TitleHead = styled.View`
  min-height: 64px;
  max-height: 86px;
  width: 100%;
  background-color: #bfb393;
  padding: 5px 15px;
`;

const TitleText = styled.Text`
  color: white;
  font-size: 16px;
`;

const TimeIndicator = styled.View`
  flex-direction: row;
  align-items: center;
  height: 40px;
  padding: 8px 15px;
`;

interface IIndicator {
  color?: string;
}
const Indicator = styled.View<IIndicator>`
  height: 100%;
  width: 5px;
  margin-right: 10px;
  border-radius: 4px;

  background-color: ${props => props.color || "#AC5253"};
`;

const TimeText = styled.Text`
  font-size: 18px;
`;

const SectionOne = styled.View`
  flex-direction: row;
  height: 115px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: #bfb393;
`;

const BlockOne = styled.View`
  height: 100%;
  width: 50%;
  padding: 25px 15px 0;
`;

const BlockTwo = styled.View`
  height: 100%;
  width: 50%;
  padding: 25px 15px 0;

  border-left-width: 1px;
  border-color: #bfb393;
`;

const SectionTwo = styled.View`
  flex-direction: row;
  height: 115px;
  border-bottom-width: 1px;
  border-color: #bfb393;
`;

const TitleWrapper = styled.View`
  justify-content: center;
  height: 42px;
`;

const SectionTitle = styled.Text`
  font-size: 22px;
  color: #bfb393;
`;
const SectionTitleBig = styled.Text`
  font-size: 32px;
  color: #bfb393;
`;
const SectionText = styled.Text<{ color?: string }>`
  font-size: 13px;
  color: ${props => props.color || "black"};
`;

const Members = styled.View`
  padding: 20px 15px;
  height: 100px;
`;

const MembersIcons = styled.View`
  flex-direction: row;
  padding: 10px 0;
`;

const BlueTitle = styled.Text`
  font-size: 13px;
  color: #72a8bc;
`;

const CommentsContainer = styled.View`
  padding: 15px 15px;
`;

const CommentWriteWrapper = styled.View`
  flex-direction: row;
  align-items: center;

  height: 64px;
  padding: 0 10px;

  border-color: #e5e5e5;
  border-top-width: 1px;
`;

const CommentWrite = styled.TextInput`
  height: 100%;
  width: 100%;
  font-size: 18px;
  margin-left: 5px;
`;
