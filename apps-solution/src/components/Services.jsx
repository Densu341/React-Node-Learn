function Services() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:my-24 px-4 justify-items-center"
      id="services"
    >
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          id="puzzle-piece"
          width={50}
          height={50}
        >
          <path
            fill="#6563FF"
            d="M17,22H5a3,3,0,0,1-3-3V9A3,3,0,0,1,5,6H6a4,4,0,0,1,7.3-2.18A3.86,3.86,0,0,1,14,6h3a1,1,0,0,1,1,1v3a4,4,0,0,1,2.18,7.3A3.86,3.86,0,0,1,18,18h0v3A1,1,0,0,1,17,22ZM5,8A1,1,0,0,0,4,9V19a1,1,0,0,0,1,1H16V16.82a1,1,0,0,1,.42-.82,1,1,0,0,1,.91-.13,1.77,1.77,0,0,0,1.74-.23A2,2,0,0,0,20,14.27a2,2,0,0,0-.48-1.59,1.89,1.89,0,0,0-2.17-.55,1,1,0,0,1-.91-.13,1,1,0,0,1-.42-.82V8H12.82a1,1,0,0,1-1-1.33,1.77,1.77,0,0,0-.23-1.74,1.94,1.94,0,0,0-3-.43A2,2,0,0,0,8,6a1.89,1.89,0,0,0,.13.67A1,1,0,0,1,7.18,8Z"
          ></path>
        </svg>

        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Strategic Planning
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          This plan outlines the client's IT goals, budget, and a roadmap for
          achieving those objectives.
        </p>
        <a
          href="#"
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          See our guideline
          <svg
            className="w-3 h-3 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </a>
      </div>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="clipboard-notes"
          width={50}
          height={50}
        >
          <path
            fill="#6563FF"
            d="M13,14H9a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2ZM17,4H15.82A3,3,0,0,0,13,2H11A3,3,0,0,0,8.18,4H7A3,3,0,0,0,4,7V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V7A3,3,0,0,0,17,4ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm8,14a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V7A1,1,0,0,1,7,6H8V7A1,1,0,0,0,9,8h6a1,1,0,0,0,1-1V6h1a1,1,0,0,1,1,1Zm-3-9H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"
          ></path>
        </svg>
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Project Management
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          This involves managing timelines, budgets, and resources to ensure
          successful project delivery.
        </p>
        <a
          href="#"
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          See our guideline
          <svg
            className="w-3 h-3 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </a>
      </div>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          id="bug"
          width={50}
          height={50}
        >
          <path
            fill="#6563FF"
            d="M19,14h2a1,1,0,0,0,0-2H19V11a5.15,5.15,0,0,0-.21-1.36A5,5,0,0,0,22,5a1,1,0,0,0-2,0,3,3,0,0,1-2.14,2.87A5,5,0,0,0,16,6.4,2.58,2.58,0,0,0,16,6,4,4,0,0,0,8,6a2.58,2.58,0,0,0,0,.4,5,5,0,0,0-1.9,1.47A3,3,0,0,1,4,5,1,1,0,0,0,2,5,5,5,0,0,0,5.21,9.64,5.15,5.15,0,0,0,5,11v1H3a1,1,0,0,0,0,2H5v1a7,7,0,0,0,.14,1.38A5,5,0,0,0,2,21a1,1,0,0,0,2,0,3,3,0,0,1,1.81-2.74,7,7,0,0,0,12.38,0A3,3,0,0,1,20,21a1,1,0,0,0,2,0,5,5,0,0,0-3.14-4.62A7,7,0,0,0,19,15Zm-8,5.9A5,5,0,0,1,7,15V11a3,3,0,0,1,3-3h1ZM10,6a2,2,0,0,1,4,0Zm7,9a5,5,0,0,1-4,4.9V8h1a3,3,0,0,1,3,3Z"
          ></path>
        </svg>
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Troubleshooting and Support
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Ongoing support and troubleshooting services to help clients address
          IT issues as they arise.
        </p>
        <a
          href="#"
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          See our guideline
          <svg
            className="w-3 h-3 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </a>
      </div>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="expand-arrows-alt"
          width={50}
          height={50}
        >
          <path
            fill="#6563FF"
            d="M9.29,13.29,4,18.59V17a1,1,0,0,0-2,0v4a1,1,0,0,0,.08.38,1,1,0,0,0,.54.54A1,1,0,0,0,3,22H7a1,1,0,0,0,0-2H5.41l5.3-5.29a1,1,0,0,0-1.42-1.42ZM5.41,4H7A1,1,0,0,0,7,2H3a1,1,0,0,0-.38.08,1,1,0,0,0-.54.54A1,1,0,0,0,2,3V7A1,1,0,0,0,4,7V5.41l5.29,5.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM21,16a1,1,0,0,0-1,1v1.59l-5.29-5.3a1,1,0,0,0-1.42,1.42L18.59,20H17a1,1,0,0,0,0,2h4a1,1,0,0,0,.38-.08,1,1,0,0,0,.54-.54A1,1,0,0,0,22,21V17A1,1,0,0,0,21,16Zm.92-13.38a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H17a1,1,0,0,0,0,2h1.59l-5.3,5.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V7a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z"
          ></path>
        </svg>
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Continuous Improvement
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Work to keep their clients' IT environments up-to-date and aligned
          with evolving business needs.
        </p>
        <a
          href="#"
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          See our guideline
          <svg
            className="w-3 h-3 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Services;
