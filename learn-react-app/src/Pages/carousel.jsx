import Carousel from "../components/Elements/Carousel";

const CarouselPage = () => {
  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-gradient-to-t from-slate-950 to-slate-900">
      <div className="container mx-auto">
        <Carousel />
      </div>
    </div>
  );
};

export default CarouselPage;
