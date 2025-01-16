import { useContext } from "react"
import { CartContext } from "../../App/App";
import { CartItem } from "../Cart Item/CartItem";
import { Button } from "../Button/Button";

export function Cart({setShowCart}) {
    const { cart, addQuantity, minusQuantity, removeFromCart } = useContext(CartContext)

    return <div className="fixed top-0 right-0 h-screen w-full bg-white z-50 p-4">
        <Button onClick={() => setShowCart(false)}>x</Button>
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