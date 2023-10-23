import Button from "../Elements/Button";
const CardProduct = (props) => {
  const { children } = props;
  return (
    <>
      <div className="flex justify-center pb-4">
        <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow flex flex-col justify-between bg-slate-700 mx-2">
          {children}
        </div>
      </div>
    </>
  );
};

const Header = (props) => {
  const { picture } = props;
  return (
    <a href="">
      <img src={picture} alt="product" className="p-8 rounded-lg" />
    </a>
  );
};

const Body = (props) => {
  const { title, description } = props;
  return (
    <div className="px-8 pb-4 h-full">
      <a href="">
        <h5 className="text-xl md:text-lg sm:text-sm font-semibold tracking-tight text-white">
          {title}
        </h5>
        <p className="text-m sm:text-sm text-white">{description}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, addToCart, id } = props;
  return (
    <div className="flex items-center flex-wrap justify-between px-5 py-4">
      <span className="text-white text-xl sm:text-lg font-semibold">
        {price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
      </span>
      <Button variant="bg-blue-700" onClick={() => addToCart(id)}>
        Add to Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
