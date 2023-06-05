import CustomInput from "@/components/CustomInput";

function Add() {
  return (
    <>
      <section className="container my-12">
        <div className="bg-white lg:px-24 px-4 py-8">
          <div>
            <h1 className="text-3xl font-medium leading-6 text-gray-900 dark:text-yellow-100">
              Submit Your Collection or Event
            </h1>
            <p className="py-2 mt-4 text-sm text-gray-900 dark:text-yellow-100">
              Every month, more than <strong>150,000</strong> unique NFT
              enthusiasts and collectors visit our site looking for upcoming
              collections, hot launches and great art on the blockchain.
            </p>
          </div>
          <div className="bg-[#e5e5e5] h-[1px] w-full my-4"></div>
          <form>
            <div className="lg:w-[50%] w-full ">
              <CustomInput
                description=""
                id="Event Title"
                name="Event Title"
                placeholder=""
                required={true}
              />
            </div>
            <div className="bg-[#e5e5e5] h-[1px] w-full my-4"></div>

            <section>
              <h3 className="mt-6 text-lg font-medium leading-6 text-gray-900 dark:text-yellow-100">
                Event Links
              </h3>
              <CustomInput
                id="email"
                required={true}
                name="Contact Email address"
                placeholder="your@email.com"
                description="We will use this email address to notify you about your event submission status."
              />
              <div className="bg-[#e5e5e5] h-[1px] w-full mt-8 mb-4 lg:block hidden "></div>
              <div className="grid lg:grid-cols-2 grid-rows-4 lg:gap-4 gap-2 ">
                <div>
                  {" "}
                  <CustomInput
                    id="website"
                    required={true}
                    name="Event Website"
                    placeholder="https://yournftwebsite.com"
                    description=""
                  />
                </div>
                <div>
                  {" "}
                  <CustomInput
                    id="source"
                    required={true}
                    name="Source (Announcement)"
                    placeholder="https://medium.com/yournftproject/announcement"
                    description="(Optional) Link to the official announcement of the event"
                  />
                </div>
                <div>
                  {" "}
                  <CustomInput
                    id="marketplace-url"
                    required={true}
                    name="Marketplace URL"
                    placeholder="https://opensea.io/collection/yournftproject"
                    description="(Optional) URL of your collection on the marketplace"
                  />
                </div>
                <div>
                  {" "}
                  <CustomInput
                    id="smart-contract"
                    required={true}
                    name="
Smart Contract Address"
                    placeholder="0xdafea492d9c6733a999991adb60692c98bc5"
                    description="(Optional) Address of your NFT minting smart contract"
                  />
                </div>
              </div>
            </section>
            <div className="bg-[#e5e5e5] h-[1px] w-full mt-8 mb-4 lg:block hidden "></div>
            <section className="lg:w-[60%] w-full ">
              <div>
                {" "}
                <CustomInput
                  id="project-twitter"
                  required={true}
                  name="Project Twitter"
                  placeholder="https://twitter.com/yournftproject"
                  description=""
                />
              </div>
              <div>
                {" "}
                <CustomInput
                  id="discord"
                  required={true}
                  name="Official Discord Server"
                  placeholder="https://discord.gg/yournftserver"
                  description="Place your Discord invite link here. Don't forget to edit it's expiration time in Discord client."
                />
              </div>
            </section>
            <div className="bg-[#e5e5e5] h-[1px] w-full mt-8 mb-4 lg:block hidden "></div>
            <section className="flex lg:justify-between lg:items-center lg:flex-row flex-col ">
              <div className="relative flex items-start py-8 md:py-0 md:mb-0">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="w-6 h-6 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 dark:text-lime-500 dark:border-gray-600 dark:focus:ring-lime-500 dark:focus:border-lime-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-medium text-gray-700 dark:text-gray-300"
                  >
                    I have read and agreed to the{" "}
                    <a
                      target="_blank"
                      className="font-semibold underline hover:no-underline"
                      href="/terms/"
                    >
                      terms of use
                    </a>
                  </label>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-6 py-3 mt-2 text-base font-medium text-white bg-indigo-600 border-2 border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:ring-indigo-500 dark:text-lime-500 dark:hover:text-black dark:bg-stone-800 dark:border-gray-700 dark:hover:bg-lime-500 dark:focus:ring-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto"
                >
                  Submit Event
                </button>
              </div>
            </section>
          </form>
        </div>
      </section>
    </>
  );
}
export default Add;
