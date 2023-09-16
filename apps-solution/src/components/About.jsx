function About() {
  return (
    <div
      className="w-full bg-gradient-to-r from-violet-200 to-pink-200 py-6 px-4"
      id="about"
    >
      <div className="max-w-5xl sm:mx-auto">
        <div className="bg-gradient-to-br from-purple-700 via-purple-500 to-violet-200 rounded-md rounded-br-[100px] sm:rounded-br-[250px] w-full shadow-md flex flex-wrap flex-col-reverse md:flex-row p-6 sm:p-8">
          <div className="w-full sm:w-2/3 text-center sm:text-left">
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-100 sm:leading-relaxed mt-8">
              About Apps Solution
            </h1>
            <p className="text-gray-300 text-sm sm:text-base py-4 sm:pr-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur similique suscipit aspernatur dignissimos cum,
              quisquam quam quod facilis molestiae. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Illum fugiat odit voluptates ratione
              quidem autem, quas aliquid asperiores iusto nam earum ex eaque
              dolore saepe accusamus aperiam voluptatem tempore! Quos?
            </p>
            <button className="px-6 py-3 bg-blue-600 text-gray-200 mt-4 mb-8 text-base font-medium rounded-md shadow-md hover:bg-blue-700 hover:text-gray-50">
              Read More
            </button>
          </div>
          <div className="w-full md:w-1/3">
            <img
              src="https://ouch-cdn2.icons8.com/d_BClx1S3fv815mLTRYo5bg7W-1lCtsneENg5ZNN6NM/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDMy/L2MyYTJkZDhiLTg2/N2UtNGJlNi1iOTZj/LWU1ZmRhZmQ4NWQw/ZS5wbmc.png"
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
