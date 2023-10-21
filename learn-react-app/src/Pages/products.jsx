import CardProduct from "../components/Fragments/CardProduct";
import { products } from "../config/products";

const ProductPage = () => {
  return (
    <>
      <div className="grid grid-cols-3">
        {products.map((product) => (
          <CardProduct>
            <CardProduct.Header picture={product.picture} />
            <CardProduct.Body
              title={product.title}
              description={product.description}
            />
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
