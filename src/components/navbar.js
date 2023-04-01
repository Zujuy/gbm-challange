import React from "react";
import ImgGbm from "../assets/gbm.png";
import { Navstyles, Imagestyles, Image } from '../styles/NavbarStyles';

function Navbar() {

  return (
    <Navstyles>
        <Imagestyles>
            <Image src={ImgGbm} alt="logo"/>
        </Imagestyles>
    </Navstyles>
  );
}

export default Navbar;
