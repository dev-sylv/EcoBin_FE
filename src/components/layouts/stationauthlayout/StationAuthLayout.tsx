import React from "react";
import { Outlet } from "react-router-dom";
import { AuthSideBar, MobileNav } from "../../blocks";
import styled from "styled-components";

const StationAuthLayout = () => {
  return (
    <Container>
      <AuthSideBar
        title="
              Start your 
              journey with us.
           "
        desc="Don't want to wait for the trash guy? 
              You don't have to. You can request one anytime!"
        backgroundColor="#03B903"
        CardColor="#01860188"
      />
      <Outlet />
    </Container>
  );
};

export default StationAuthLayout;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fefefe;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 748px) {
    display: block;
  }
`;
