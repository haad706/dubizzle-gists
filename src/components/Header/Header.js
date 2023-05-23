import React from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import { Search } from "components";

export const Header = () => {
  return (
    <Wrapper>
      <Octicon name="mark-github" mega />
      <Search />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #24292e;
  color: #ffffff;
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
`;

export default Header;
