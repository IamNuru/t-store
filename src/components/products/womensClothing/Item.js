import React , { useContext } from 'react';
import CartContext from '../../context/cart/CartContext';


const Item = (props) => {
    const cartContext = useContext(CartContext);
    const { cart , addToCart, removeFromCart } = cartContext;

    const { product } = props

    const addProductToCart = () => {
        addToCart(product);
    }

    const removeProductFromCart = () => {
        removeFromCart(product.id);
    }
    return (
        <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full min-h-48 max-h-48" src={product.image} alt={product.title} />
            <div className="px-6 py-2">
                <div className="font-bold text-md mb-2">{product.title}</div>
            </div>
            <div className="px-6 pt-2 pb-2">
                <span className="rounded-full px-1 py-1 text-sm font-semibold mr-2 mb-2">&#128155;</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Ghc{product.price.toLocaleString()}</span>
                {
                    cart?.length > 0 && cart.filter( item => item.id === product.id ).length > 0 ? 
                    (<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-pink-500 mr-2 mb-2 cursor-pointer" onClick={removeProductFromCart}>Remove From Cart</span>) 
                    : 
                    (<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-pink-500 mr-2 mb-2 cursor-pointer" onClick={addProductToCart}>Add to Cart</span>)     
                }
                 </div>
        </div>
    )
}

export default Item
