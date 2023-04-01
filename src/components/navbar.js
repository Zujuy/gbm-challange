import React from "react";
import ImgGbm from "../assets/gbm.png";
import { Navstyles, Imagestyles, Image, LineStyles } from '../styles/NavbarStyles';

function Navbar() {

  return (
    <Navstyles>
        <Imagestyles>
            <Image src={ImgGbm} alt="logo"/>
        </Imagestyles>
        <LineStyles />
    </Navstyles>
  );
}

export default Navbar;
