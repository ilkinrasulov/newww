import React from "react";
import styled from "styled-components";

function Footer() {
  return <FooterInside></FooterInside>;
}
const FooterInside = styled.div`
  height: 80px;
  width: 100%;

  position: absolute;
  bottom: 0;
`;
export default Footer;
