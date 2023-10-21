import Button from "../Elements/Button";
const CardProduct = (props) => {
  const { children } = props;
  return (
    <>
      <div className="flex justify-center bg-slate-700 py-5">
        <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow flex flex-col justify-between">
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
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h5>
        <p className="text-m text-white">{description}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price } = props;
  return (
    <div className="flex items-center justify-between px-5 py-4">
      <span className="text-white text-xl font-semibold">{price}</span>
      <Button variant="bg-blue-700">Add to Cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
