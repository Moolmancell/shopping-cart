import { ProductCard } from "../../Components/Product Card/ProductCard"

export function Shop() {
    return <main>
        <h1>Shop</h1>
        <h3>Todays Best Deals for you!</h3>
        <section>
            <ProductCard name="Product Name" price="$1000"/>
        </section>
    </main>
}