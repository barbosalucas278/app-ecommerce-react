//TYPES tipos de ordenes

const LISTAR_PRODUCTOS = "LISTAR_PRODUCTOS";
const AGREGAR_CARRITO = "AGREGAR_CARRITO";
const ELIMINAR_CARRITO = "ELIMINAR_CARRITO";

//es un componente que exporto, com un switch con operaciones que se hacen en el medio
export default function Reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case LISTAR_PRODUCTOS:
      return { ...state, productos: payload };
    case AGREGAR_CARRITO:
      return { ...state, carrito: [...state.carrito, ...state.productos.filter((p) => p.id === parseInt(payload))] };
    case ELIMINAR_CARRITO:
      return { ...state, carrito: state.carrito.filter((p) => p.id !== parseInt(payload)) };
  }
}
