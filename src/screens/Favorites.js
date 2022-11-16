import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import CupertinoButtonDelete from "../components/CupertinoButtonDelete";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import CupertinoButtonGrey4 from "../components/CupertinoButtonGrey4";
import CupertinoSearchBarWithCancelButton from "../components/CupertinoSearchBarWithCancelButton";
import GoogleMapReact from "google-map-react";

function Favorites(props) {
  return (
    <>
        <Image
            src={require("../assets/images/blankIphone.jpeg")}
            resizeMode="contain"
        >
        </Image>
      <RectStack>
        <Rect>
          <Link to="/Home">
            <Button1>
              <ButtonOverlay></ButtonOverlay>
            </Button1>
          </Link>
          <CupertinoButtonDelete
            iconName="ios-trash"
            style={{
              height: 34,
              width: 45,
              marginTop: 8,
              marginLeft: 270
            }}
            icon="md-navigate"
          ></CupertinoButtonDelete>
          <Link to="/Navigating">
            <Button5>
              <ButtonOverlay>
                <IconRow>
                  <EntypoIcon
                    name="star"
                    style={{
                      color: "rgba(248,231,28,1)",
                      fontSize: 28,
                      height: 30,
                      width: 28
                    }}
                  ></EntypoIcon>
                  <Samuelson>Samuelson</Samuelson>
                </IconRow>
              </ButtonOverlay>
            </Button5>
          </Link>
          <Link to="/Navigating">
            <Button4>
              <ButtonOverlay>
                <Icon2Row>
                  <EntypoIcon
                    name="star"
                    style={{
                      color: "rgba(248,231,28,1)",
                      fontSize: 28,
                      height: 31,
                      width: 28
                    }}
                  ></EntypoIcon>
                  <Surc>SURC</Surc>
                </Icon2Row>
              </ButtonOverlay>
            </Button4>
          </Link>
          <Link to="/Navigating">
            <Button3>
              <ButtonOverlay>
                <Icon5Row>
                  <EntypoIcon
                    name="star"
                    style={{
                      color: "rgba(248,231,28,1)",
                      fontSize: 28,
                      height: 31,
                      width: 28
                    }}
                  ></EntypoIcon>
                  <Black>Black</Black>
                </Icon5Row>
              </ButtonOverlay>
            </Button3>
          </Link>
          <CupertinoButtonGrey4Stack>
            <CupertinoButtonGrey4
              style={{
                height: 34,
                width: 42,
                position: "absolute",
                left: 0,
                top: 4
              }}
            ></CupertinoButtonGrey4>
            <EntypoIcon
              name="plus"
              style={{
                top: 0,
                left: 3,
                position: "absolute",
                color: "rgba(74,144,226,1)",
                fontSize: 40,
                height: 44,
                width: 40
              }}
            ></EntypoIcon>
          </CupertinoButtonGrey4Stack>
          <Button2Stack>
            <Link to="/Navigating">
              <Button2>
                <ButtonOverlay></ButtonOverlay>
              </Button2>
            </Link>
            <Go>Go!</Go>
          </Button2Stack>
        </Rect>
        <CupertinoSearchBarWithCancelButton
          style={{
            height: 27,
            width: 275,
            position: "absolute",
            left: 0,
            top: 27
          }}
        ></CupertinoSearchBarWithCancelButton>
      </RectStack>
      <MapView1>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "YOUR_API_KEY" }}
          defaultZoom={14}
          provider="MapView.PROVIDER_GOOGLE"
          defaultCenter={{
            latitude: 0,
            lat: 47.007238655013886,
            lng: -120.53683909837119
          }}
          customMapStyle="Standard"
        />
      </MapView1>
    </>
  );
}

const Rect = styled.div`
  top: 0px;
  left: 6px;
  width: 321px;
  height: 468px;
  position: absolute;
  background-color: #E6E6E6;
  flex-direction: column;
  display: flex;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Button1 = styled.div`
  width: 92px;
  height: 13px;
  background-color: rgba(152,152,152,1);
  margin-top: 2px;
  margin-left: 112px;
  border: none;
`;

const Button5 = styled.div`
  width: 299px;
  height: 34px;
  background-color: rgba(155,155,155,1);
  flex-direction: row;
  display: flex;
  margin-top: 20px;
  margin-left: 4px;
  border: none;
`;

const Samuelson = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(251,250,250,1);
  font-size: 25px;
  margin-left: 45px;
`;

const IconRow = styled.div`
  height: 30px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 80px;
  margin-left: 7px;
  margin-top: 2px;
`;

const Button4 = styled.div`
  width: 299px;
  height: 34px;
  background-color: rgba(155,155,155,1);
  flex-direction: row;
  display: flex;
  margin-top: 12px;
  margin-left: 4px;
  border: none;
`;

const Surc = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(251,250,250,1);
  font-size: 25px;
  margin-left: 83px;
`;

const Icon2Row = styled.div`
  height: 31px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 118px;
  margin-left: 7px;
  margin-top: 2px;
`;

const Button3 = styled.div`
  width: 299px;
  height: 34px;
  background-color: rgba(155,155,155,1);
  flex-direction: row;
  display: flex;
  margin-top: 12px;
  margin-left: 4px;
  border: none;
`;

const Black = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(251,250,250,1);
  font-size: 25px;
  margin-left: 83px;
  margin-top: 2px;
`;

const Icon5Row = styled.div`
  height: 32px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 118px;
  margin-left: 7px;
`;

const CupertinoButtonGrey4Stack = styled.div`
  width: 43px;
  height: 44px;
  margin-top: 10px;
  margin-left: 3px;
  position: relative;
`;

const Button2 = styled.div`
  top: 0px;
  left: 0px;
  width: 281px;
  height: 61px;
  position: absolute;
  background-color: rgba(17,243,45,1);
  border: none;
`;

const Go = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 97px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(251,250,250,1);
  font-size: 52px;
`;

const Button2Stack = styled.div`
  width: 281px;
  height: 63px;
  margin-top: 132px;
  margin-left: 20px;
  position: relative;
`;

const RectStack = styled.div`
  width: 327px;
  height: 468px;
  margin-top: 244px;
  margin-left: 519px;
  position: relative;
`;

const MapView1 = styled.div`
  height: 160px;
  width: 321px;
  margin-top: -633px;
  margin-left: 522px;
`;
const Image = styled.img`
  width: 590px;
  height: 800px;
  margin-top: -19px;
  margin-left: 291px;
  position: absolute;
  left: 95px;
  top: 10px;
`;

export default Favorites;
