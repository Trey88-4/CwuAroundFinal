import React, { Component } from "react";
import styled, { css } from "styled-components";

function CupertinoButtonSuccess(props) {
  return (
    <Container {...props}>
      <Go>Go!</Go>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #4CD964;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 5px;
  padding-left: 16px;
  padding-right: 16px;
`;

const Go = styled.span`
  font-family: Roboto;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  text-align: center;
`;

export default CupertinoButtonSuccess;
