import React from 'react';

import styled from 'styled-components';

const ListStyle = styled.ul`
  // display: flex;
  // flex-direction: row;
  // align-items: flex-end;
  // padding: 0px;

  position: absolute;
  // width: 255px;
  // height: 40px;
  right: 194px;
  // top: calc(50% - 40px/2);
`;

const Portfolio = styled.li`

  // width: 63px;
  // height: 20px;
  margin-left: 2px;
  top: 10px;

  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  /* identical to box height, or 133% */

  display: flex;
  align-items: center;
  text-align: center;
  

  color: #FFFFFF;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: center;
  flex-grow: 0;
  margin: 10px 0px;

`;

const About = styled.li`
  // width: 45px;
  // height: 20px;
  left: 15px;
  top: 10px;

  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  /* identical to box height, or 133% */

  display: flex;
  align-items: center;
  text-align: center;

    color: #FFFFFF;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: center;
  flex-grow: 0;
  margin: 10px 0px;

`;

const Contact = styled.li`

  // width: 59px;
  // height: 20px;
  left: 12px;
  top: 10px;

  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  /* identical to box height, or 133% */

  display: flex;
  align-items: center;
  text-align: center;

  color: #FFFFFF;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: center;
  flex-grow: 0;
  margin: 10px 0px;

`;

const PLink = styled.a`
  color: #FFFFFF;

  &:hover {
    color: #F55800;
  }
`;
const ALink = styled.a`
  color: #FFFFFF;
  &:hover {
    color: #F55800;
  }
`;
const CLink = styled.a`
  color: #FFFFFF;
  &:hover {
    color: #F55800;
  }
`;

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler btn" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand name" href="/">Daniel</a>

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
      </nav>
    </>
  );
}
 
export default Nav;