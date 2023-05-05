import Image from "next/image";
const BlockchainsData = [
  {
    id: 1,
    icon: "Ethereum.webp",
    text: "Ethereum",
    count: 133,
  },
  {
    id: 2,
    icon: "Polygon.webp",
    text: "Polygon",
    count: 30,
  },
  {
    id: 3,
    icon: "Solana.webp",
    text: "Solana",
    count: 17,
  },
  {
    id: 4,
    icon: "Cardano.webp",
    text: "Cardano",
    count: 11,
  },
  {
    id: 5,
    icon: "BitcoinOrdinals.webp",
    text: "Bitcoin Ordinals",
    count: 2,
  },
  {
    id: 6,
    icon: "wax.webp",
    text: "Wax",
    count: 5,
  },
  {
    id: 7,
    icon: "tezos.webp",
    text: "Tezos",
    count: 4,
  },
  {
    id: 8,
    icon: "bsc.webp",
    text: "Bitcoin Smart Chain",
    count: 2,
  },
  {
    id: 9,
    icon: "arbitrum.webp",
    text: "Arbitrum",
    count: 2,
  },
  {
    id: 10,
    icon: "kadena.webp",
    text: "Kadena",
    count: 2,
  },
  {
    id: 11,
    icon: "moonriver.webp",
    text: "Moonriver",
    count: 1,
  },
  {
    id: 12,
    icon: "cronos.webp",
    text: "Cronos",
    count: 1,
  },
];
function Blockchain() {
  return (
    <>
      <div className="px-1 ">
        <>
          <h3 className="py-2 text-xl font-semibold text-black dark:text-yellow-100">
            Blockchains
          </h3>
          {BlockchainsData?.map((item: any) => (
            <a
              className="flex flex-wrap items-center py-2 text-black align-middle group dark:text-yellow-50 hover:bg-gray-200 dark:hover:bg-zinc-800"
              href="/b/ethereum/"
            >
              <Image
                alt=""
                width={50}
                height={50}
                className="inline-block w-6 h-6"
                src={`/assets/icons/${item.icon}`}
              />

              <span className="inline-block ml-2 group-hover:bg-gray-200 group-hover:dark:bg-zinc-800 group-hover:text-indigo-600 group-hover:dark:text-lime-200">
                {item.text}
              </span>
              <span className="inline-block px-2 ml-2 text-xs font-medium text-indigo-800 bg-indigo-200 rounded-full group-hover:bg-indigo-300 group-hover: group-hover:dark:bg-lime-200 dark:bg-yellow-50 dark:text-black">
                {item.count}
              </span>
            </a>
          ))}
        </>
      </div>
    </>
  );
}

export default Blockchain;
