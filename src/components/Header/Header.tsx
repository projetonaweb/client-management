import React, { useState } from "react";
import * as C from "./style";
import { GoGear } from "react-icons/go";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlinePrinter } from "react-icons/ai";
import { SlGraph } from "react-icons/sl";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <C.ContainerHeader>
      <div className="user-section">
        <div className="image-user">
          <img src="" alt="" />
        </div>
        <span>UserName</span>
      </div>

      <C.HeaderContainer>
        <Link to="/" className="container-icon">
          <div className="icon">
            <SlGraph />
          </div>
          <p className="text-icons">Dashboard</p>
        </Link>

        <Link to="/clients" className="container-icon">
          <div className="icon">
            <BsFillPeopleFill />
          </div>
          <p className="text-icons">Clientes</p>
        </Link>

        <Link to="/print" className="container-icon">
          <div className="icon">
            <AiOutlinePrinter />
          </div>
          <p className="text-icons">Imprimir</p>
        </Link>

        <Link to="/configs" className="container-icon">
          <div className="icon">
            <GoGear className="icon" />
          </div>
          <p className="text-icons">Configurações</p>
        </Link>
      </C.HeaderContainer>
    </C.ContainerHeader>
  );
};

export default Header;
