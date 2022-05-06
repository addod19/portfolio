import React from 'react';

import styled, { css } from 'styled-components';

const commonFont = css`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
`;

const commonFlexProp = css`
  display: flex;
  align-items: center;
  text-align: center;
`;

const commonTextColor = css`
  color: white !important;
`;

const commonHoverColor = css`
  color: #F55800;
`;
const ListStyle = styled.ul``;

const Portfolio = styled.li`
  ${commonFont}  
  ${commonFlexProp}
`;

const About = styled.li`
  ${commonFont}
  ${commonFlexProp}
`;

const Contact = styled.li`
  ${commonFont}
  ${commonFlexProp}
`;

const PLink = styled.a`
  ${commonTextColor}
  &:hover {
    ${commonHoverColor}
  }
`;
const ALink = styled.a`
  ${commonTextColor}
  &:hover {
    ${commonHoverColor}
  }
`;
const CLink = styled.a`
  ${commonTextColor}
  &:hover {
    ${commonHoverColor}
  }
`;
const MyNav = styled.nav`
  background: #3C3A39 !important;
`;
const Burg = styled.button`
  background: none !important;
`;
const Span = styled.span`
 ${commonTextColor}
`;
const Name = styled.a`
  ${commonTextColor}
`;
const Nav = () => (
  <>
    <MyNav className="navbar navbar-expand-lg navbar-light bg-light">
      <Burg className="navbar-toggler btn" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <Span className="navbar-toggler-icon" />
      </Burg>
      <Name className="navbar-brand name" href="/">Daniel</Name>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ListStyle className="navbar-nav mr-auto mt-2 mt-lg-0">
          <Portfolio className="nav-item active">
            <PLink className="nav-link" href="#portfolio">
              Portfolio
              <span className="sr-only">(current)</span>
            </PLink>
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

export default Nav;
