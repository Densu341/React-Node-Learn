import gambar from "../assets/glare-coding-programming-languages-1.png";
function About() {
  return (
    <div
      className="w-full bg-gradient-to-r from-violet-200 to-pink-200 py-6 px-4"
      id="about"
    >
      <div className="max-w-7xl sm:mx-auto">
        <div className="bg-gradient-to-r from-gray-800 via-gray-800 to-slate-900 rounded-md rounded-br-[100px] sm:rounded-br-[250px] w-full shadow-md flex flex-wrap flex-col-reverse md:flex-row p-6 sm:p-8">
          <div className="w-full sm:w-2/3 text-center sm:text-left">
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-100 sm:leading-relaxed mt-8">
              About Apps Solution
            </h1>
            <p className="text-gray-300 text-sm sm:text-base py-4 sm:pr-5">
              Welcome to Apps Solution, your trusted partner in facing
              technological change. We are an IT consulting company dedicated to
              helping your business grow and develop through innovative
              technology solutions. We understand that in an ever-changing
              digital era, the right technology transformation is the key to
              success. That's why we are here, to provide appropriate guidance
              and solutions so that your business can compete in an increasingly
              competitive market.
            </p>
            <p className="text-gray-300 text-sm sm:text-base py-4 sm:pr-5">
              Our team of experts has extensive experience across a variety of
              industry sectors, and we are committed to understanding your
              unique business needs. We offer comprehensive IT consulting
              services, from IT strategy to implementing the latest
              technology.We also pride ourselves on being a responsive and
              proactive partner. Together, we will design solutions that
              optimize efficiency, increase productivity and bring added value
              to your business.Don't hesitate to speakwith us to find out more
              about how we can help move your business to the next level. Apps
              Solution is ready to make technology the best tool to achieve your
              business goals.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-gray-200 mt-4 mb-8 text-base font-medium rounded-md shadow-md hover:bg-blue-700 hover:text-gray-50">
              Read More
            </button>
          </div>
          <div className="w-full md:w-1/3">
            <img
              src={gambar}
              alt="Illustration by Rosina Gavrilash from Ouch!"
              className="mx-auto mt-4 sm:mt-14 sm:w-full transition-transform hover:scale-110 duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
