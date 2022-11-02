import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialUISwitch from "@material-ui/core/Switch";

function CupertinoSwitch(props) {
  return (
    <Container {...props}>
      <Switch1>
        <MaterialUISwitch
          color="primary"
          checked={props.value ? true : false}
          style={{ color: "#FFF" }}
        ></MaterialUISwitch>
      </Switch1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Switch1 = styled.div`
  width: 45px;
  height: 22px;
`;

export default CupertinoSwitch;
