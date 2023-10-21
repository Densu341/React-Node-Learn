import CardProduct from "../components/Fragments/CardProduct";
import { products } from "../config/products";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/Counter";

const email = localStorage.getItem("email");
const ProductPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <>
      <div className="w-full bg-blue-600 py-4 px-6 flex justify-end gap-6">
        <h2 className="text-xl my-auto font-semibold text-white">{email}</h2>
        <Button variant="bg-slate-700" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <h1 className="text-3xl font-bold text-center">Products</h1>
      <div className="grid grid-cols-3">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header picture={product.picture} />
            <CardProduct.Body
              title={product.title}
              description={product.description}
            />
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
      <div className="">
        <Counter></Counter>
      </div>
    </>
  );
};

export default ProductPage;
