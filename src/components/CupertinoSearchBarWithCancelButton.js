import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function CupertinoSearchBarWithCancelButton(props) {
  return (
    <Container {...props}>
      <InputBox>
        <MaterialCommunityIconsIcon
          name="magnify"
          style={{
            color: "#000",
            fontSize: 20,
            alignSelf: "center",
            paddingLeft: 5,
            paddingRight: 5
          }}
        ></MaterialCommunityIconsIcon>
        <InputStyle placeholder="Search"></InputStyle>
        <MaterialCommunityIconsIcon
          name="close-circle"
          style={{
            color: "#000",
            fontSize: 20,
            alignSelf: "center",
            paddingLeft: 5,
            paddingRight: 5
          }}
        ></MaterialCommunityIconsIcon>
      </InputBox>
      <RightIconButton>
        <ButtonOverlay /* Conditional navigation not supported at the moment */>
          <RightButtonText>Cancel</RightButtonText>
        </ButtonOverlay>
      </RightIconButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #EFEFF4;
  padding: 8px;
  padding-right: 0px;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const InputBox = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  background-color: #CECED2;
  border-radius: 5px;
  display: flex;
`;

const InputStyle = styled.input`
  font-family: Roboto;
  height: 32px;
  align-self: flex-start;
  font-size: 15px;
  line-height: 15px;
  color: #000;
  flex: 1 1 0%;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

const RightIconButton = styled.div`
  align-items: center;
  padding: 8px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const RightButtonText = styled.span`
  font-family: Roboto;
  color: #007AFF;
  font-size: 15px;
`;

export default CupertinoSearchBarWithCancelButton;
