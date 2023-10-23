import CardProduct from "../components/Fragments/CardProduct";
import { products } from "../config/products";
import Button from "../components/Elements/Button";
import { useState } from "react";

const email = localStorage.getItem("email");
const ProductPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart((cart) =>
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart((cart) => [...cart, { id, qty: 1 }]);
    }
  };
  return (
    <>
      <div className="w-full bg-blue-600 py-4 px-6 flex justify-end gap-6">
        <h2 className="text-xl my-auto font-semibold text-white">{email}</h2>
        <Button variant="bg-slate-700" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <h1 className="text-3xl font-bold px-4 py-4">Products</h1>
      <div className="text-end p-4">
        <h1 className="text-3xl font-bold">Cart</h1>
        {/* <ul>
          {cart.map((item) => (
            <li key={item}>{item.id}</li>
          ))}
        </ul> */}
        <table className="table text-left table-auto border-separate border-spacing-x-5">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              const product = products.find(
                (product) => product.id === item.id
              );
              return (
                <tr key={item.id}>
                  <td>{product.title}</td>
                  <td>
                    {product.price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </td>
                  <td>{item.qty}</td>
                  <td>
                    {(product.price * item.qty).toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header picture={product.picture} />
            <CardProduct.Body
              title={product.title}
              description={product.description}
            />
            <CardProduct.Footer
              price={product.price}
              id={product.id}
              addToCart={handleAddToCart}
            />
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
