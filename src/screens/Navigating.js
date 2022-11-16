import React, { Component } from "react";
import styled, { css } from "styled-components";
import GoogleMapReact from "google-map-react";
import { Link } from "react-router-dom";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";
import CupertinoSwitch from "../components/CupertinoSwitch";
import CupertinoButtonDelete from "../components/CupertinoButtonDelete";
import CupertinoSearchBarWithCancelButton from "../components/CupertinoSearchBarWithCancelButton";

function Navigating(props) {
  return (
    <>
        <Image
            src={require("../assets/images/blankIphone.jpeg")}
            resizeMode="contain"
        >
        </Image>
      <MapView1>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDZcyFOaGz5nm6S5I_LEsLK--QH_2nHu6g" }}
          defaultZoom={18}
          provider="MapView.PROVIDER_GOOGLE"
          defaultCenter={{
              latitude: 0,
              lat: 47.00129507792367,
              lng: -120.5401834024661
          }}
          customMapStyle="Standard"
        />
      </MapView1>
      <Rect1Stack>
        <Rect1>
          <Link to="/SwipeUp">
            <Button1>
              <ButtonOverlay></ButtonOverlay>
            </Button1>
          </Link>
          <DestinationStackRow>
            <DestinationStack>
              <Destination>Destination</Destination>
              <IoniconsIcon
                name="ios-pin"
                style={{
                  top: 13,
                  left: 0,
                  position: "absolute",
                  color: "rgba(128,128,128,1)",
                  fontSize: 28,
                  height: 31,
                  width: 16
                }}
              ></IoniconsIcon>
            </DestinationStack>
            <Rect2 gradientImage="Gradient_PReQnMG.png">
              <EtaRow>
                <Eta>ETA</Eta>
                <TimeField>timeField</TimeField>
              </EtaRow>
            </Rect2>
            <LoremIpsumColumn>
              <LoremIpsum></LoremIpsum>
              <CupertinoSwitch
                style={{
                  width: 45,
                  height: 23,
                  transform: "rotate(undefined)",
                  marginTop: 21
                }}
              ></CupertinoSwitch>
            </LoremIpsumColumn>
          </DestinationStackRow>
        </Rect1>
        <CupertinoButtonDelete
          iconName="ios-trash"
          style={{
            height: 34,
            width: 45,
            position: "absolute",
            left: 280,
            top: 23
          }}
          icon="md-navigate"
          style={{
              position: "absolute",
              left: 300,
              top: 33
          }}
        ></CupertinoButtonDelete>
        <CupertinoSearchBarWithCancelButton
          style={{
            height: 27,
            width: 287,
            position: "absolute",
            left: 0,
            top: 27
          }}
          rightIconButton="Home"
        ></CupertinoSearchBarWithCancelButton>
      </Rect1Stack>
    </>
  );
}

const MapView1 = styled.div`
  height: 468px;
  width: 321px;
  margin-top: 79px;
  margin-left: 522px;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Rect1 = styled.div`
  border-radius: 10px;
  top: 0px;
  left: 1px;
  width: 320px;
  height: 164px;
  position: absolute;
  background-color: #E6E6E6;
  flex-direction: column;
  display: flex;
`;

const Button1 = styled.div`
  width: 92px;
  height: 13px;
  background-color: rgba(152,152,152,1);
  margin-left: 115px;
  border: none;
`;

const Destination = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 12px;
`;

const DestinationStack = styled.div`
  width: 61px;
  height: 44px;
  position: relative;
`;

const Rect2 = styled.div`
  width: 115px;
  height: 30px;
  border-width: 0px;
  border-color: rgba(255,255,255,1);
  background-color: rgba(255,255,255,1);
  flex-direction: row;
  display: flex;
  margin-left: 34px;
  margin-top: 51px;
  border-style: solid;
`;

const Eta = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 12px;
  margin-top: 2px;
`;

const TimeField = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 16px;
  margin-left: 14px;
`;

const EtaRow = styled.div`
  height: 19px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 10px;
  margin-left: 4px;
  margin-top: 6px;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-left: 7px;
`;

const LoremIpsumColumn = styled.div`
  width: 45px;
  flex-direction: column;
  display: flex;
  margin-left: 45px;
  margin-top: 13px;
  margin-bottom: 24px;
`;

const DestinationStackRow = styled.div`
  height: 81px;
  flex-direction: row;
  display: flex;
  margin-top: 57px;
  margin-left: 9px;
  margin-right: 11px;
`;

const Rect1Stack = styled.div`
  width: 325px;
  height: 164px;
  margin-top: 9px;
  margin-left: 522px;
  position: relative;
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

export default Navigating;
