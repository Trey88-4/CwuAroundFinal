import React, { Component } from "react";
import styled, { css } from "styled-components";
import GoogleMapReact from "google-map-react";
import { Link } from "react-router-dom";
import CupertinoSearchBarWithCancelButton from "../components/CupertinoSearchBarWithCancelButton";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import CupertinoButtonDelete from "../components/CupertinoButtonDelete";

function Home(props) {
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
        <Rect2Stack>
        <Rect2>
          <Link to="/SwipeUp">
            <Button1>
              <ButtonOverlay></ButtonOverlay>
            </Button1>
          </Link>
          <CupertinoSearchBarWithCancelButton
            style={{
              height: 27,
              width: 287,
              marginTop: 14
            }}
            rightIconButton="Home"
          ></CupertinoSearchBarWithCancelButton>
          <Icon4Row>
            <IoniconsIcon
              name="ios-star-half"
              style={{
                color: "rgba(128,128,128,1)",
                fontSize: 40,
                height: 44,
                width: 35
              }}
            ></IoniconsIcon>
            <EntypoIcon
              name="back-in-time"
              style={{
                color: "rgba(128,128,128,1)",
                fontSize: 40,
                height: 45,
                width: 40,
                marginLeft: 73
              }}
            ></EntypoIcon>
            <MaterialCommunityIconsIcon
              name="account-card-details"
              style={{
                color: "rgba(128,128,128,1)",
                fontSize: 40,
                height: 44,
                width: 40,
                marginLeft: 70,
                marginTop: 1
              }}
            ></MaterialCommunityIconsIcon>
          </Icon4Row>
          <FavoritesRow>
            <Favorites>Favorites</Favorites>
            <History>History</History>
            <Account>Account</Account>
          </FavoritesRow>
        </Rect2>
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
      </Rect2Stack>

    </>

  );
}

const MapView1 = styled.div`
  height: 468px;
  width: 321px;
  margin-top: 79px;
  margin-left: 521px;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Rect2 = styled.div`
  border-radius: 10px;
  top: 0px;
  left: 0px;
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
  margin-left: 116px;
  border: none;
`;

const Icon4Row = styled.div`
  height: 45px;
  flex-direction: row;
  display: flex;
  margin-top: 28px;
  margin-left: 29px;
  margin-right: 33px;
`;

const Favorites = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const History = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-left: 52px;
`;

const Account = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-left: 52px;
`;

const FavoritesRow = styled.div`
  height: 17px;
  flex-direction: row;
  display: flex;
  margin-left: 18px;
  margin-right: 27px;
`;

const Rect2Stack = styled.div`
  width: 325px;
  height: 164px;
  margin-top: 9px;
  margin-left: 521px;
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

export default Home;
