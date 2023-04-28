import React from "react";
import styled from "styled-components";
import {
  GlobalButton,
  UserDashboardCards,
  UserDashboardHeader,
  UserRequestTable,
} from "../../components";
import request from "../../assets/images/request.png";

const MakeRequest = () => {
  return (
    <Container>
      <UserDashboardHeader height="18vh" title="Make Request" display="none" />
      <Body>
        <First>
          <HoldC bg="#03b903">
            <UserDashboardCards
              bgcol1=""
              bigText="Request for trash pickup"
              bigTextCol="#fff"
              smallText="is your trash full? request for it to be picked up and dispose now!"
              smallTextCol="#fff"
              imgPic={request}
            />
            <GlobalButton
              bg=""
              col="#03b903"
              padding="18px 30px"
              text="Make Request"
              bghovercolor="transparent"
              bor="1px solid #fff"
              hovCol="#fff"
              width="210px"
            />
          </HoldC>
          <HoldC bg="#3c37ff">
            <UserDashboardCards
              bgcol1=""
              bigText="Make Custom Request"
              bigTextCol="#fff"
              smallText="is your trash full? request for it to picked up and dispose now!"
              smallTextCol="#fff"
              imgPic={request}
            />
            <GlobalButton
              bg=""
              col="#3c37ff"
              padding="18px 30px"
              text="Make Request"
              bghovercolor="transparent"
              bor="1px solid #fff"
              hovCol="#fff"
              width="210px"
            />
          </HoldC>
        </First>
        <Second>
          <TransactionHistory>
            <UserRequestTable />
          </TransactionHistory>
        </Second>
      </Body>
    </Container>
  );
};

export default MakeRequest;

const TransactionHistory = styled.div`
  width: 93%;
  margin-top: 60px;
  margin-bottom: 50px;

  @media screen and (max-width: 800px) {
    margin-bottom: 120px;
  }
`;

const HoldC = styled.div<{ bg: string }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ bg }) => bg};
  width: 385px;
  padding: 25px;
  border-radius: 10px;
  gap: 30px;
<<<<<<< HEAD
  @media screen and (max-width: 800px) {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    width: calc(100vw - 70px);
=======

  @media screen and (max-width: 1198px) {
    width: 350px;
  }
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

const Second = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const First = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 30px;
  gap: 30px;
  padding-top: 20px;
  margin-bottom: 10px;

  @media screen and (max-width: 800px) {
    padding-left: 0px;
    justify-content: center;
>>>>>>> aca58518d4d9d930f64ba35146630e8b3ed71785
  }
`;

const Body = styled.div`
  margin-top: 18vh;
  width: 100%;
  /* height: 100%; */

  @media screen and (max-width: 800px) {
    margin-top: 14vh;
  }
`;

const Container = styled.div`
  width: calc(100% - 270px);
  background-color: #f7f7f764;

  @media screen and (max-width: 1050px) {
    width: calc(100% - 70px);
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
