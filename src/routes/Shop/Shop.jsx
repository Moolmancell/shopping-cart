import { ProductCard } from "../../Components/Product Card/ProductCard";
import { useEffect, useState } from "react";

export function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState("loading"); 
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/electronics"
        );
        const products = await response.json();

        setProducts(products); 
        setLoading("success"); 
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoading("error"); 
      }
    };

    fetchData();
  }, [reload]); 

  return (
    <main>
      {loading === "loading" && <h1>Loading...</h1>}

      {loading === "error" && (
        <>
          <h1>Loading error</h1>
          <button onClick={() => setReload((prev) => !prev)}>Try Again</button>
        </>
      )}

      {loading === "success" && (
        <>
          <h1>Shop</h1>
          <h3>Today's Best Deals for you!</h3>
          <section>
            {products.map((product) => (
              <ProductCard
                key={product.id} 
                name={product.title}
                price={product.price}
                productId={product.id}
                img={product.image}
              />
            ))}
          </section>
        </>
      )}
    </main>
  );
}
