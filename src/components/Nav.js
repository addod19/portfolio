import React from 'react';

import styled from 'styled-components';

const NavStyle = styled.nav`
  position: absolute;
  width: 1440px;
  height: 72px;
  left: 0px;
  top: 0px;

  background: #3E3C3C;
  @media(max-width: 768px) {
    width: 100%;
  }
`;

const ListStyle = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  border: 1px  solid red;

  position: absolute;
  width: 255px;
  height: 40px;
  right: 194px;
  top: calc(50% - 40px/2);
`;

const ListItem = styled.li`
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  font-weight: 600;
`;

const Name = styled.span`
  width: 92px;  
font-size: 20px;

`;
const Nav = () => {
  return (
    <NavStyle>
      <span className="name">Daniel</span>
      <ListStyle>
        <ListItem>one</ListItem>
        <ListItem>two</ListItem>
        <ListItem>three</ListItem>
      </ListStyle>
    </NavStyle>
  );
}
 
export default Nav;