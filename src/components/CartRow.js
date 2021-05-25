import React, { useContext, useState , useEffect} from "react";
import CartContext from "./context/cart/CartContext";

const CartRow = (props) => {
  const { item } = props;

  const cartContext = useContext(CartContext);
  const { removeFromCart, increaseCartItemQty, decreaseCartItemQty } = cartContext;

  const [qty, setQty] = useState(1);

  const increment = () =>{
    increaseCartItemQty(item.id)
  }
  const decrement = () =>{
    decreaseCartItemQty(item.id)
  }
  const calculatePrice = (e) => {
    setQty(e.target.value);
  };

  useEffect(() => {
    setQty(item.qty);
    // eslint-disable-next-line
  },[increaseCartItemQty , decreaseCartItemQty])

  return (
      props.item === null ? ('Loading') : (
      <tr>
      <td className="hidden pb-4 md:table-cell">
        <div>
          <img src={item.image} className="w-20 rounded" alt="Thumbnail" />
        </div>
      </td>
      <td>
        <div>
          <p className="mb-2 md:ml-4">{item.title}</p>
          <form action="" method="POST">
            <button type="submit" className="text-gray-700 md:ml-4">
              <small
                onClick={() => {
                  removeFromCart(item.id);
                }}
              >
                (Remove item)
              </small>
            </button>
          </form>
        </div>
      </td>
      <td className="justify-center md:justify-end md:flex mt-6">
        <div className="w-20 h-10">
          <div className="relative flex flex-row w-full h-8">
            <span className={"substract px-1 cursor-pointer text-pink-900 text-2xl -pt-2 mr-1 text-center "
             + (qty < 2 && 'hidden')}
            onClick={decrement}>-</span>
            <input
              type="text"
              value={qty}
              disabled
              onChange={calculatePrice}
              className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
            />
            <span className="add px-1 text-purple-900 text-2xl ml-1 text-center cursor-pointer" 
            onClick={increment}>+</span>
          </div>
        </div>
      </td>
      <td className="hidden text-right md:table-cell">
        <span className="text-sm lg:text-base font-medium">
          {item.price.toLocaleString()}
        </span>
      </td>
      <td className="text-right">
        <span className="text-sm lg:text-base font-medium">
          {(item.price * qty).toLocaleString()}
        </span>
      </td>
    </tr>
      )
  );
};

export default CartRow;
