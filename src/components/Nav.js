import React from 'react';

import styled from 'styled-components';

const NavStyle = styled.nav`
  position: relative;
  width: 1440px;
  height: 72px;
  left: 0px;
  top: 0px;

  background: #3E3C3C;
  @media(max-width: 768px) and (min-width:500px) {
    width: 100%;
    // display: none;
    height: 70px;
    background: red;
  }

  @media (max-width:499px){
    width: 100%;
    // background: red;
  }
`;

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

const Name = styled.span`
  position: relative;
  width: 92px;
  height: 25px;
  left: 12px;
  top: 10px;

  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  /* identical to box height, or 100% */

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

const HideN = styled.div`
  display: none;

  @media(max-width: 768px) {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: rgba(122, 33, 56, 0.7);
  }
`;
const Humburger = styled.div`
  display: none;
  position: relative;
  color: white;
  top: 0;
  left: 0;
  width:100px;
  height: 30px;
  @media(max-width: 768px) {
    display: flex;
  }
`;
const Nav = () => {
  return (
    // <NavStyle>
    //   <Name>Daniel</Name>
    //   <ListStyle>
    //     <Portfolio>
    //       <PLink href="#portfolio">Portfolio</PLink>
    //     </Portfolio>
    //     <About>
    //       <ALink href="#about">About</ALink>
    //     </About>
    //     <Contact>
    //       <CLink href="#contact">Contact</CLink>
    //     </Contact>
    //   </ListStyle>
    //   <Humburger>X</Humburger>
    //   <HideN>
    //     <ListStyle>
    //       <Portfolio>
    //         <PLink href="#portfolio">Portfolio</PLink>
    //       </Portfolio>
    //       <About>
    //         <ALink href="#about">About</ALink>
    //       </About>
    //       <Contact>
    //         <CLink href="#contact">Contact</CLink>
    //       </Contact>
    //     </ListStyle>
    //   </HideN>
    // </NavStyle>
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">Daniel</a>

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