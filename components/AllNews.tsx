function AllNews() {
  return (
    <>
      <section className="">
        <div className="px-5 my-4 text-right">
          <a
            className="p-2 text-indigo-600 border border-gray-200 rounded hover:text-indigo-500 bg-gray-50 dark:text-lime-500 dark:hover:text-black dark:bg-zinc-800 dark:hover:bg-lime-500 dark:border-gray-700"
            href="https://nftcalendar.io/news/"
          >
            All News →
          </a>
        </div>
        <div className="p-6  my-2 bg-white border border-gray-200 rounded  ">
          <p className="py-2">
            NFTCalendar is your guide around the art of the Non-Fungible Token
            industry. We throw light on crypto art, creators as well as cover
            the latest news and events happening in Decentraland.
          </p>
          <p className="py-2">
            Our goal is to make the Universe of digital collectibles
            comprehensible and approachable for each NFT collector and devotee
            of the movement.
          </p>
        </div>
      </section>
    </>
  );
}
export default AllNews;
