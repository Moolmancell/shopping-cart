import {Button} from '../Button/Button'

export function ProductCard({name, price, img="", img_alt="", addToCart}) {
    return <div data-testid="product-card-component">
        <img src={img} alt={img_alt} />
        <div>
            <h2>{name}</h2>
            <p>${price}</p>
            <div>
                <Button onClick={addToCart}>Add to cart</Button>
            </div>
        </div>
        
    </div>
}