import React, { Component } from "react";
import styled, { css } from "styled-components";

function CupertinoButtonInfo1(props) {
  return (
    <Container {...props}>
      <TextInput placeholder=""></TextInput>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(74,74,74,1);
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 5px;
  padding-left: 16px;
  padding-right: 16px;
`;

const TextInput = styled.input`
  font-family: Roboto;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  width: 0px;
  height: 0px;
  background-color: rgba(0,0,0,1);
  border: none;
  background: transparent;
`;

export default CupertinoButtonInfo1;
