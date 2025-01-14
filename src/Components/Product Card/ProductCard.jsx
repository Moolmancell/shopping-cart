import {Button} from '../Button/Button'

export function ProductCard({name, price, img="", img_alt=""}) {
    return <div data-testid="product-card-component">
        <img src={img} alt={img_alt} />
        <div>
            <h2>{name}</h2>
            <p>${price}</p>
            <div>
                <Button>Add to cart</Button>
            </div>
        </div>
        
    </div>
}