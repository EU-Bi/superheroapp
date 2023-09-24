import React from "react";
import logo from "../../assets/logo.webp";
import "./Header.module.scss";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
      <Link to={"/create"}>
        <Button color="secondary" variant="contained">
          ADD HERO
        </Button>
      </Link>
    </header>
  );
};
