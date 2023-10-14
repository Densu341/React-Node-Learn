import Button from "../Elements/Button";
const CardProduct = (props) => {
  const { children } = props;
  return (
    <>
      <div className="flex justify-center bg-slate-700 py-5">
        <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow">
          {children}
        </div>
      </div>
    </>
  );
};

const Header = () => {
  return (
    <a href="">
      <img
        src="/images/shoes1.jpg"
        alt="product"
        className="p-8 rounded-t-lg"
      />
    </a>
  );
};

const Body = () => {
  return (
    <div className="px-8 pb-4">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          Product Name
        </h5>
        <p className="text-m text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          nesciunt mollitia reiciendis dolore repudiandae fugit.
        </p>
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex items-center justify-between px-5 py-4">
      <span className="text-white text-xl font-semibold">Rp1.000.000</span>
      <Button variant="bg-blue-700">Add to Cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
