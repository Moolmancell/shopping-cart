import { Button } from '../Button/Button';
import ShoppingCartButton from '../../assets/ShoppingCartButton/Shopping Cart Button.svg';

export function ProductCard({ name, price, img = "", img_alt = "", addToCart }) {
    return (
        <div data-testid="product-card-component" className='flex flex-col justify-between bg-[#E6E6E6] w-[180px] h-[230px] rounded-3xl box-border p-3'>
            <img src={img} alt={img_alt} className='object-contain w-full h-[100px] my-5' />
            <div className='flex flex-row box-border'>
                <div className='overflow-hidden text-ellipsis flex-2 w-auto'>
                    <h2 className='text-xs font-bold truncate mb-1'>{name}</h2>
                    <p className='text-[10px] font-light'>${price}</p>
                </div>
                <Button onClick={addToCart} className='ml-4'>
                    <img src={ShoppingCartButton} alt="Add to Cart" className='max-w-[35px]'/>
                </Button>
            </div>
        </div>
    );
}