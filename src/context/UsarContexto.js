import Contexto from "./Contexto";
import axios from "axios";
import { useReducer } from "react";
import Reducer from "./Reducer";

export default function UsarContexto(props) {
  const { children } = props;
  const estadoInicial = {
    productos: [],
    carrito: [],
  };
  const [state, dispatch] = useReducer(Reducer, estadoInicial);
  const listarProductos = async () => {
    const res = await axios.get("https://devrockstore-default-rtdb.firebaseio.com/productos.json");
    dispatch({ type: "LISTAR_PRODUCTOS", payload: res.data });
  };
  const agregarCarrito = (id) => {
    dispatch({ type: "AGREGAR_CARRITO", payload: id });
  };
  const eliminarCarrito = (id) => {
    dispatch({ type: "ELIMINAR_CARRITO", payload: id });
  };
  return (
    <Contexto.Provider //Se especifica lo que se va a exportar a los children, como en angular cuando configuramos los modulos
      value={{
        productos: state.productos,
        carrito: state.carrito,
        listarProductos,
        agregarCarrito,
        eliminarCarrito,
      }}
    >
      {children}
    </Contexto.Provider>
  );
}
