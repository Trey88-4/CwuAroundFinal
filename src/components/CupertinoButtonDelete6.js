import React, { Component } from "react";
import styled, { css } from "styled-components";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";

function CupertinoButtonDelete6(props) {
  return (
    <Container {...props}>
      <IoniconsIcon
        name="ios-trash"
        style={{
          color: "#000",
          fontSize: 24
        }}
      ></IoniconsIcon>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 5px;
`;

export default CupertinoButtonDelete6;
