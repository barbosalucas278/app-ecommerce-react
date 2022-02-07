import React from "react";
import "../assets/css/ItemCarrito.css";
import imgTacho from "../assets/statics/borrar.png";
export default function ItemCarrito(props) {
  const { id, img, nombre, precio } = props;
  const handleEliminar = () => {
    props.eliminarCarrito(id);
  };
  return (
    <>
      <div className="carrito-item">
        <img src={img} alt="" className="carrito-item-img" />
        <div className="carrito-txt">
          <h1 className="carrito-item-titulo">{nombre}</h1>
          <h3 className="carrito-item-precio">AR$ {precio}</h3>
        </div>
        <img src={imgTacho} alt="" className="carrito-item-borrar" onClick={handleEliminar} />
      </div>
    </>
  );
}
