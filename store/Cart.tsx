import React, { createContext, Dispatch, useContext, useReducer } from 'react';

// Definición de tipos
export type CartItemType = TProduct & { quantity: number };

type CartState = {
  [key: string]: CartItemType;
};

type CartAction = {
  type: 'add' | 'remove';
  item: TProduct;
  quantity?: number;
};

// Estado inicial
const defaultState = {} as CartState;

// Contextos
const CartItemsContext = createContext(defaultState);
const CartDispatchContext = createContext<Dispatch<CartAction>>(
  () => {}
);

// Reductor
function cartReducers(
  state: CartState,
  { item, type, quantity: qtyToAdd = 1 }: CartAction
) {
  const existingCartItem = state[item.id];

  switch (type) {
    case 'add': {
      const quantity = existingCartItem
        ? existingCartItem.quantity + qtyToAdd
        : qtyToAdd;

      return {
        ...state,
        [item.id]: {
          ...item,
          quantity,
        },
      };
    }

    case 'remove': {
      if (!existingCartItem) {
        return state;
      }

      const quantity = Math.max(existingCartItem.quantity - 1, 0);

      if (quantity === 0) {
        const { [item.id]: _, ...newCartItems } = state;
        return newCartItems;
      }

      return {
        ...state,
        [item.id]: {
          ...existingCartItem,
          quantity,
        },
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}

// Componente CartProvider
const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducers, defaultState);

  return (
    <CartItemsContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartItemsContext.Provider>
  );
};

// Funciones de utilidad para calcular subtotal y contar elementos
const getCartSubTotal = (sum: number, item: CartItemType) =>
  sum + item.price * item.quantity;

const getCartCount = (sum: number, item: CartItemType) =>
  sum + item.quantity;

// Hooks personalizados
export const useCart = () => {
  const itemsById = useContext(CartItemsContext);
  const items = Object.values(itemsById);
  const count = items.reduce(getCartCount, 0);
  const subTotal = items.reduce(getCartSubTotal, 0);

  return {
    items,
    itemsById,
    count,
    subTotal,
  };
};

export const useCartMutations = () => {
  const dispatch = useContext(CartDispatchContext);

  const addToCart = (product: TProduct, quantity?: number) =>
    dispatch({
      type: 'add',
      item: product,
      quantity,
    });

  const removeFromCart = (product: TProduct) =>
    dispatch({
      type: 'remove',
      item: product,
    });

  return {
    addToCart,
    removeFromCart,
  };
};

export default CartProvider;