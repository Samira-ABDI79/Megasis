function NextNFT() {
  return (
    <>
      <div className="mt-12">
        <h2 className=" mb-2 text-2xl font-semibold  dark:text-yellow-100 ">
          Don't miss the next NFT drops
        </h2>
        <div className="bg-white border border-gray-200 rounded p-6 mt-4 mb-6">
          <div x-data="contactForm()" className="flex justify-center mt-8 mb-4">
            <form method="POST" className="">
              <input
                type="hidden"
                name="_token"
                value="q4OrFMBhLPnsweyIJCFLl5RQxZt5BtVwYWIolWcL"
              />{" "}
              <div className="flex items-center border-b-2 border-indigo-600 dark:border-lime-600 py-2">
                <input
                  name="email"
                  className="bg-transparent border border-gray-400 focus:border-indigo-600 pl-2 dark:border-gray-500 dark:focus:border-lime-600  rounded w-full text-gray-900 dark:text-gray-300 mr-3 py-2 leading-tight focus:outline-none"
                  type="email"
                  placeholder="enter@your.email"
                  aria-label="Your email"
                  x-model="formData.email"
                />
                <button
                  className="disabled:opacity-50 flex-shrink-0 items-center justify-center px-4 py-2 border border-transparent leading-5 font-medium rounded text-gray-50 dark:text-black dark:bg-lime-500 dark:hover:bg-lime-400 bg-purple-500 hover:bg-purple-400 focus:outline-none focus:border-purple-700 focus:ring-purple active:bg-purple-700 transition ease-in-out duration-150"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
              {/* <p
              className=" 'mt-2 p-4 rounded bg-purple-400 text-gray-50' : 'hidden'"
              x-text="message"
            ></p> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default NextNFT;
