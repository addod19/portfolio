import React from 'react';

import styled from 'styled-components';

const ListStyle = styled.ul``;

const Portfolio = styled.li`

  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;

`;

const About = styled.li`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  /* identical to box height, or 133% */

  display: flex;
  align-items: center;
  text-align: center;
`;

const Contact = styled.li`

  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;

`;

const PLink = styled.a`
  color: white !important;

  &:hover {
    color: #F55800;
  }
`;
const ALink = styled.a`
  color: white !important;
  &:hover {
    color: #F55800;
  }
`;
const CLink = styled.a`
  color: white !important;
  &:hover {
    color: #F55800;
  }
`;
const MyNav = styled.nav`
  background: #3C3A39 !important;
`;
const Burg = styled.button`
  background: none !important;
`;
const Span = styled.span`
  color: white !important;
`;
const Name = styled.a`
  color: white !important;
`;
const Nav = () => {
  return (
    <>
      <MyNav className="navbar navbar-expand-lg navbar-light bg-light">
        <Burg className="navbar-toggler btn" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <Span className="navbar-toggler-icon"></Span>
        </Burg>
        <Name className="navbar-brand name" href="/">Daniel</Name>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ListStyle className="navbar-nav mr-auto mt-2 mt-lg-0">
            <Portfolio className="nav-item active">
              <PLink className="nav-link" href="#portfolio">Portfolio <span className="sr-only">(current)</span></PLink>
            </Portfolio>
            <About className="nav-item">
              <ALink className="nav-link" href="#about">About</ALink>
            </About>
            <Contact className="nav-item">
              <CLink className="nav-link" href="#contact">Contact</CLink>
            </Contact>
          </ListStyle>
        </div>
      </MyNav>
    </>
  );
}
 
export default Nav;