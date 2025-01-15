import { Button } from "../Button/Button"

export function CartItem(props) {
    return <div>
        <img src={props.image} alt=""/>
        <h3>{props.title}</h3>
        <p>${props.price}</p>
        <p>Quantity: {props.quantity}</p>
        <p>Total price: {props.price * props.quantity}</p>
        <div>
            <Button onClick={props.minusQuantity}>-</Button>
            <p>{props.quantity}</p>
            <Button onClick={props.addQuantity}>+</Button>
        </div>
        <Button onClick={props.removeFromCart}>Remove</Button>
    </div>
}