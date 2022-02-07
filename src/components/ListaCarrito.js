import React, { useContext } from "react";
import ItemCarrito from "./ItemCarrito";
import "../assets/css/ListaCarrito.css";
import Contexto from "../context/Contexto";
export default function ListaCarrito(props) {
  const { carrito, eliminarCarrito } = useContext(Contexto);
  return (
    <>
      <div className="carrito-listadito">
        {carrito.map((item, i) => (
          <ItemCarrito {...item} key={i} eliminarCarrito={eliminarCarrito}></ItemCarrito>
        ))}
      </div>
    </>
  );
}
