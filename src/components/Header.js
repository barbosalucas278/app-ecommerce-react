import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";
import imgCarrito from "../assets/statics/carrito.png";
import imgvolver from "../assets/statics/volver.png";
export default function Header() {
  return (
    <>
      <Link to={"/carrito"}>
        <img src={imgCarrito} alt="" className="carritou" />
      </Link>
      <Link to={"/"}>
        <img src={imgvolver} alt="" className="volver" />
      </Link>

      <h1 className="titulo">
        Dev <br />
        RockStore
      </h1>
    </>
  );
}
