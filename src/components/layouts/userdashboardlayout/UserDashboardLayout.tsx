import React from "react";
import { MobileNav, Sidenav } from "../../blocks";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { HiHome } from "react-icons/hi";
import { IoIosWallet } from "react-icons/io";
import { GiCardPickup } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { RxPerson } from "react-icons/rx";

const UserDashboardLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#fff",
      }}>
      <Sidenav />
      <Container>
        <Outlet />
        <AtMobile>
          <MobileNav
            firstIcon={<HiHome />}
            firstText="Home"
            firstLink="/user/home"
            secondIcon={<IoIosWallet />}
            secondText="Payment"
            secondLink="makepayment"
            thirdIcon={<GiCardPickup />}
            thirdLink="makerequest"
            fourthIcon={<BiSupport />}
            fourthText="Support"
            fourthLink="feedback"
            fifthIcon={<RxPerson />}
            fifthText="Profile"
            fifthLink="profile"
          />
        </AtMobile>
      </Container>
    </div>
  );
};

export default UserDashboardLayout;

const Container = styled.div`
  width: calc(100vw - 270px);
  @media screen and (max-width: 1024px) {
    width: calc(100vw - 70px);
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const AtMobile = styled.div`
  width: 100vw;
  height: 70px;
  position: fixed;
  bottom: 0;
  @media screen and (min-width: 800px) {
    display: none;
  }
`;
