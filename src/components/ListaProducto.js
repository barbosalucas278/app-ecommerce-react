import React, { useContext, useEffect, useState } from "react";
import ItemListaProducto from "./ItemListaProducto";
import "../assets/css/ListaProducto.css";
import Contexto from "../context/Contexto";

export default function ListaProducto() {
  const { listarProductos, productos } = useContext(Contexto);
  useEffect(() => {
    listarProductos();
  }, []);

  return (
    <>
      <div className="home">
        {productos.map((item) => (
          <ItemListaProducto {...item} key={item.id}></ItemListaProducto>
        ))}
      </div>
    </>
  );
}
