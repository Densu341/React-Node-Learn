const CarouselItem = ({ image }) => {
  return (
    <>
      <div className="shadow slide-item transition-all">
        <img src={image} alt="image" className="object-cover h-48 rounded" />
      </div>
    </>
  );
};

export default CarouselItem;
