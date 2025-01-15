import { Button } from "../Button/Button"

export function CartItem(props) {
    return <div>
        <h1>{props.name}</h1>
        <p>${props.price}</p>
        <div>
            <Button>-</Button>
            <p>{props.quantity}</p>
            <Button>+</Button>
        </div>
        
    </div>
}