import React, { useContext } from "react";
import "../assets/css/Carrito.css";
import ListaCarrito from "../components/ListaCarrito";
export default function Carrito() {
  return (
    <>
      <div className="carrito">
        <ListaCarrito></ListaCarrito>

        <div className="carrito-precio">
          Total a pagar <br />
          <strong>U$D 3400</strong>
        </div>
      </div>
    </>
  );
}
