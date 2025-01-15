import { useContext } from "react"
import { CartContext } from "../../App/App";
import { CartItem } from "../Cart Item/CartItem";

export function Cart() {
    const { cart, addQuantity, minusQuantity, removeFromCart } = useContext(CartContext)

    return <div>
        <h1 data-testid="cart-shows">Cart</h1>
        {cart.map((product) => (
            <CartItem
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            quantity={product.quantity}
            addQuantity={() => addQuantity(product.id)}
            minusQuantity={() => minusQuantity(product.id)}
            removeFromCart={() => removeFromCart(product.id)}
            />
        ))}
    </div>
}