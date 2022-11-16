import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import CupertinoButtonDelete from "../components/CupertinoButtonDelete";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";
import MaterialIconsIcon from "react-native-vector-icons/dist/MaterialIcons";
import EvilIconsIcon from "react-native-vector-icons/dist/EvilIcons";
import CupertinoSearchBarWithCancelButton from "../components/CupertinoSearchBarWithCancelButton";
import GoogleMapReact from "google-map-react";

function SwipeUp(props) {
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
                            marginLeft: 273
                        }}
                        icon="md-navigate"
                    ></CupertinoButtonDelete>
                    <Icon8Row>
                        <IoniconsIcon
                            name="ios-star-half"
                            style={{
                                color: "rgba(128,128,128,1)",
                                fontSize: 40,
                                height: 44,
                                width: 35,
                                marginTop: 1
                            }}
                        ></IoniconsIcon>
                        <EntypoIcon
                            name="back-in-time"
                            style={{
                                color: "rgba(128,128,128,1)",
                                fontSize: 40,
                                height: 45,
                                width: 40,
                                marginLeft: 68
                            }}
                        ></EntypoIcon>
                        <MaterialCommunityIconsIcon
                            name="account-card-details"
                            style={{
                                color: "rgba(128,128,128,1)",
                                fontSize: 40,
                                height: 44,
                                width: 40,
                                marginLeft: 76,
                                marginTop: 1
                            }}
                        ></MaterialCommunityIconsIcon>
                    </Icon8Row>
                    <Favorites1Row>
                        <Favorites1>Favorites</Favorites1>
                        <Link to="/Favorites">
                            <Button3>
                                <ButtonOverlay></ButtonOverlay>
                            </Button3>
                        </Link>
                        <History2>History</History2>
                        <Account1>Account</Account1>
                    </Favorites1Row>
                    <Icon5Row>
                        <MaterialCommunityIconsIcon
                            name="sign-caution"
                            style={{
                                color: "rgba(128,128,128,1)",
                                fontSize: 40,
                                height: 44,
                                width: 40,
                                marginTop: 3
                            }}
                        ></MaterialCommunityIconsIcon>
                        <FontAwesomeIcon
                            name="calendar"
                            style={{
                                color: "rgba(128,128,128,1)",
                                fontSize: 40,
                                height: 40,
                                width: 37,
                                marginLeft: 72,
                                marginTop: 2
                            }}
                        ></FontAwesomeIcon>
                        <IoniconsIcon
                            name="ios-people"
                            style={{
                                color: "rgba(128,128,128,1)",
                                fontSize: 40,
                                height: 44,
                                width: 35,
                                marginLeft: 77
                            }}
                        ></IoniconsIcon>
                    </Icon5Row>
                    <HazardsRow>
                        <Hazards>Hazards</Hazards>
                        <Events>Events</Events>
                        <Friends>Friends</Friends>
                    </HazardsRow>
                    <Icon6Row>
                        <MaterialIconsIcon
                            name="live-help"
                            style={{
                                color: "rgba(128,128,128,1)",
                                fontSize: 40,
                                height: 40,
                                width: 40,
                                marginTop: 2
                            }}
                        ></MaterialIconsIcon>
                        <MaterialCommunityIconsIcon
                            name="room-service"
                            style={{
                                color: "rgba(128,128,128,1)",
                                fontSize: 40,
                                height: 44,
                                width: 40,
                                marginLeft: 65
                            }}
                        ></MaterialCommunityIconsIcon>
                        <EvilIconsIcon
                            name="gear"
                            style={{
                                color: "rgba(128,128,128,1)",
                                fontSize: 40,
                                height: 35,
                                width: 40,
                                marginLeft: 73,
                                marginTop: 2
                            }}
                        ></EvilIconsIcon>
                    </Icon6Row>
                    <HelpRow>
                        <Help>Help</Help>
                        <Services>Services</Services>
                        <Settings>Settings</Settings>
                    </HelpRow>
                    <Link to="/Navigating">
                        <Button2>
                            <ButtonOverlay>
                                <Go>Go!</Go>
                            </ButtonOverlay>
                        </Button2>
                    </Link>
                </Rect>
                <CupertinoSearchBarWithCancelButton
                    style={{
                        height: 27,
                        width: 275,
                        position: "absolute",
                        left: 0,
                        top: 25
                    }}
                ></CupertinoSearchBarWithCancelButton>
            </RectStack>
            <MapView1>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDZcyFOaGz5nm6S5I_LEsLK--QH_2nHu6g" }}
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
  left: 3px;
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
  margin-left: 115px;
  border: none;
`;

const Icon8Row = styled.div`
  height: 45px;
  flex-direction: row;
  display: flex;
  margin-top: 38px;
  margin-left: 36px;
  margin-right: 26px;
`;

const Favorites1 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  text-align: center;
`;

const History2 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  text-align: center;
  margin-left: 51px;
`;

const Account1 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  text-align: center;
  margin-left: 60px;
`;

const Favorites1Row = styled.div`
  height: 17px;
  flex-direction: row;
  display: flex;
  margin-left: 23px;
  margin-right: 17px;
`;

const Icon5Row = styled.div`
  height: 47px;
  flex-direction: row;
  display: flex;
  margin-top: 32px;
  margin-left: 30px;
  margin-right: 30px;
`;

const Hazards = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  text-align: center;
`;

const Events = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-left: 51px;
`;

const Friends = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-left: 63px;
`;

const HazardsRow = styled.div`
  height: 17px;
  flex-direction: row;
  display: flex;
  margin-top: 4px;
  margin-left: 23px;
  margin-right: 28px;
`;

const Icon6Row = styled.div`
  height: 44px;
  flex-direction: row;
  display: flex;
  margin-top: 37px;
  margin-left: 34px;
  margin-right: 29px;
`;

const Help = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-left: 65px;
`;

const Services = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  text-align: center;
  margin-left: 60px;
`;

const Settings = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  text-align: center;
  margin-left: 50px;
`;

const HelpRow = styled.div`
  height: 17px;
  flex-direction: row;
  display: flex;
  margin-top: 2px;
  margin-left: -25px;
`;

const Button2 = styled.div`
  width: 281px;
  height: 61px;
  background-color: rgba(17,243,45,1);
  flex-direction: column;
  display: flex;
  margin-top: 32px;
  margin-left: 23px;
  border: none;
`;

const Go = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(251,250,250,1);
  font-size: 52px;
  margin-left: 5px;
`;

const RectStack = styled.div`
  width: 324px;
  height: 468px;
  margin-top: 246px;
  margin-left: 519px;
  position: relative;
`;

const MapView1 = styled.div`
  height: 160px;
  width: 321px;
  margin-top: -635px;
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

const Button3 = styled.div`
  top: 0px;
  left: 0px;
  width: 66px;
  height: 140px;
  position: absolute;
  background-color: rgba(155,155,155,1);
  opacity: 0;
  border: none;
`;

export default SwipeUp;
