import Image from "next/image";

function Blockchain() {
  return (
    <>
      {/* <div className="px-1 py-2">
<h3 className="py-2 text-xl font-semibold text-black dark:text-yellow-100">
Blockchains
</h3>
<a className="flex flex-wrap items-center py-2 text-black align-middle group dark:text-yellow-50 hover:bg-gray-200 dark:hover:bg-zinc-800" href="/b/ethereum/">
<Image alt="" width={50} height={50} className="inline-block w-6 h-6" src="/storage/uploads/blockchains/icons/qgwQs44Hym0ILiSR6Sxs54spiHFttRAdyop8UQkJ.webp">
<span className="inline-block ml-2 group-hover:bg-gray-200 group-hover:dark:bg-zinc-800 group-hover:text-indigo-600 group-hover:dark:text-lime-200">Ethereum
</span>
<span className="inline-block px-2 ml-2 text-xs font-medium text-indigo-800 bg-indigo-200 rounded-full group-hover:bg-indigo-300 group-hover: group-hover:dark:bg-lime-200 dark:bg-yellow-50 dark:text-black">
133
</span>
</a>
<a className="flex flex-wrap items-center py-2 text-black align-middle group dark:text-yellow-50 hover:bg-gray-200 dark:hover:bg-zinc-800" href="/b/polygon/">
<Image alt="" width={50} height={50} className="inline-block w-6 h-6" src="/storage/uploads/blockchains/icons/QQ6bMcuhTk9aF7nvncALz7JkRbZJdulw7lfNSSaW.webp">
<span className="inline-block ml-2 group-hover:bg-gray-200 group-hover:dark:bg-zinc-800 group-hover:text-indigo-600 group-hover:dark:text-lime-200">Polygon
</span>
<span className="inline-block px-2 ml-2 text-xs font-medium text-indigo-800 bg-indigo-200 rounded-full group-hover:bg-indigo-300 group-hover: group-hover:dark:bg-lime-200 dark:bg-yellow-50 dark:text-black">
30
</span>
</a>
<a className="flex flex-wrap items-center py-2 text-black align-middle group dark:text-yellow-50 hover:bg-gray-200 dark:hover:bg-zinc-800" href="/b/solana/">
<Image alt="" width={50} height={50} className="inline-block w-6 h-6" src="/storage/uploads/blockchains/icons/5pwLOdvD20vEa20UMDyISyJtaUjAOwnPr5r1cqzc.webp">
<span className="inline-block ml-2 group-hover:bg-gray-200 group-hover:dark:bg-zinc-800 group-hover:text-indigo-600 group-hover:dark:text-lime-200">Solana
</span>
<span className="inline-block px-2 ml-2 text-xs font-medium text-indigo-800 bg-indigo-200 rounded-full group-hover:bg-indigo-300 group-hover: group-hover:dark:bg-lime-200 dark:bg-yellow-50 dark:text-black">
17
</span>
</a>
<a className="flex flex-wrap items-center py-2 text-black align-middle group dark:text-yellow-50 hover:bg-gray-200 dark:hover:bg-zinc-800" href="/b/cardano/">
<Image alt="" width={50} height={50} className="inline-block w-6 h-6" src="/storage/uploads/blockchains/icons/5d55durHg7xEy9fFfma18G4djQKJ3SusHKmK7KLT.webp">
<span className="inline-block ml-2 group-hover:bg-gray-200 group-hover:dark:bg-zinc-800 group-hover:text-indigo-600 group-hover:dark:text-lime-200">Cardano
</span>
<span className="inline-block px-2 ml-2 text-xs font-medium text-indigo-800 bg-indigo-200 rounded-full group-hover:bg-indigo-300 group-hover: group-hover:dark:bg-lime-200 dark:bg-yellow-50 dark:text-black">
11
</span>
</a>
<a className="flex flex-wrap items-center py-2 text-black align-middle group dark:text-yellow-50 hover:bg-gray-200 dark:hover:bg-zinc-800" href="/b/bitcoin/">
<Image alt="" width={50} height={50} className="inline-block w-6 h-6" src="/storage/uploads/blockchains/icons/K5MboQOOoGhFrOzFQE6zQy2vxuuT8N2Gj6jdDcil.png">
<span className="inline-block ml-2 group-hover:bg-gray-200 group-hover:dark:bg-zinc-800 group-hover:text-indigo-600 group-hover:dark:text-lime-200">Bitcoin Ordinals
</span>
<span className="inline-block px-2 ml-2 text-xs font-medium text-indigo-800 bg-indigo-200 rounded-full group-hover:bg-indigo-300 group-hover: group-hover:dark:bg-lime-200 dark:bg-yellow-50 dark:text-black">
7
</span>
</a>
<a className="flex flex-wrap items-center py-2 text-black align-middle group dark:text-yellow-50 hover:bg-gray-200 dark:hover:bg-zinc-800" href="/b/wax/">
<Image alt="" width={50} height={50} className="inline-block w-6 h-6" src="/storage/uploads/blockchains/icons/Efedz6bZX2chZqFfMAUtpw5bUg84QV6wODb3g82W.webp">
<span className="inline-block ml-2 group-hover:bg-gray-200 group-hover:dark:bg-zinc-800 group-hover:text-indigo-600 group-hover:dark:text-lime-200">WAX
</span>
<span className="inline-block px-2 ml-2 text-xs font-medium text-indigo-800 bg-indigo-200 rounded-full group-hover:bg-indigo-300 group-hover: group-hover:dark:bg-lime-200 dark:bg-yellow-50 dark:text-black">
5
</span>
</a>
<a className="flex flex-wrap items-center py-2 text-black align-middle group dark:text-yellow-50 hover:bg-gray-200 dark:hover:bg-zinc-800" href="/b/tezos/">
<Image alt="" width={50} height={50} className="inline-block w-6 h-6" src="/storage/uploads/blockchains/icons/LJO7pcrmU0vC3lvQfhAcQgSfw7NTmHLojS7Oby17.png">
<span className="inline-block ml-2 group-hover:bg-gray-200 group-hover:dark:bg-zinc-800 group-hover:text-indigo-600 group-hover:dark:text-lime-200">Tezos
</span>
<span className="inline-block px-2 ml-2 text-xs font-medium text-indigo-800 bg-indigo-200 rounded-full group-hover:bg-indigo-300 group-hover: group-hover:dark:bg-lime-200 dark:bg-yellow-50 dark:text-black">
4
</span>
</a>
<a className="flex flex-wrap items-center py-2 text-black align-middle group dark:text-yellow-50 hover:bg-gray-200 dark:hover:bg-zinc-800" href="/b/bsc/">
<Image alt="" width={50} height={50} className="inline-block w-6 h-6" src="/storage/uploads/blockchains/icons/XZK9VMrQWIVQ0xpzvJbnjEI3ujoXXQhNVY8Z1TqC.webp">
<span className="inline-block ml-2 group-hover:bg-gray-200 group-hover:dark:bg-zinc-800 group-hover:text-indigo-600 group-hover:dark:text-lime-200">Binance Smart Chain
</span>
<span className="inline-block px-2 ml-2 text-xs font-medium text-indigo-800 bg-indigo-200 rounded-full group-hover:bg-indigo-300 group-hover: group-hover:dark:bg-lime-200 dark:bg-yellow-50 dark:text-black">
2
</span>
</a>
<a className="flex flex-wrap items-center py-2 text-black align-middle group dark:text-yellow-50 hover:bg-gray-200 dark:hover:bg-zinc-800" href="/b/arbitrum/">
<Image alt="" width={50} height={50} className="inline-block w-6 h-6" src="/storage/uploads/blockchains/icons/KK806wI2jundc9NcG2APrlGpMGZGyjrqJpx9BQjy.png">
<span className="inline-block ml-2 group-hover:bg-gray-200 group-hover:dark:bg-zinc-800 group-hover:text-indigo-600 group-hover:dark:text-lime-200">Arbitrum
</span>
<span className="inline-block px-2 ml-2 text-xs font-medium text-indigo-800 bg-indigo-200 rounded-full group-hover:bg-indigo-300 group-hover: group-hover:dark:bg-lime-200 dark:bg-yellow-50 dark:text-black">
2
</span>
</a>
<a className="flex flex-wrap items-center py-2 text-black align-middle group dark:text-yellow-50 hover:bg-gray-200 dark:hover:bg-zinc-800" href="/b/kadena/">
<Image alt="" width={50} height={50} className="inline-block w-6 h-6" src="/storage/uploads/blockchains/icons/JEWpCAT3UkzXPbax2YmseRKJxdbBDyCtABVpq886.jpg">
<span className="inline-block ml-2 group-hover:bg-gray-200 group-hover:dark:bg-zinc-800 group-hover:text-indigo-600 group-hover:dark:text-lime-200">Kadena
</span>
<span className="inline-block px-2 ml-2 text-xs font-medium text-indigo-800 bg-indigo-200 rounded-full group-hover:bg-indigo-300 group-hover: group-hover:dark:bg-lime-200 dark:bg-yellow-50 dark:text-black">
2
</span>
</a>
<a className="flex flex-wrap items-center py-2 text-black align-middle group dark:text-yellow-50 hover:bg-gray-200 dark:hover:bg-zinc-800" href="/b/moonriver/">
<Image alt="" width={50} height={50} className="inline-block w-6 h-6" src="/storage/uploads/blockchains/icons/YMdMrpg5YeFlNlystrRd4p8UPV5QMGV2zdA1SV2w.jpg">
<span className="inline-block ml-2 group-hover:bg-gray-200 group-hover:dark:bg-zinc-800 group-hover:text-indigo-600 group-hover:dark:text-lime-200">Moonriver
</span>
<span className="inline-block px-2 ml-2 text-xs font-medium text-indigo-800 bg-indigo-200 rounded-full group-hover:bg-indigo-300 group-hover: group-hover:dark:bg-lime-200 dark:bg-yellow-50 dark:text-black">
1
</span>
</a>
<a className="flex flex-wrap items-center py-2 text-black align-middle group dark:text-yellow-50 hover:bg-gray-200 dark:hover:bg-zinc-800" href="/b/cronos/">
<Image alt="" width={50} height={50} className="inline-block w-6 h-6" src="/storage/uploads/blockchains/icons/WkushDlBkdl9hD1heZiTtLBvrVbLJyYpCRuRDwWu.png">
<span className="inline-block ml-2 group-hover:bg-gray-200 group-hover:dark:bg-zinc-800 group-hover:text-indigo-600 group-hover:dark:text-lime-200">Cronos
</span>
<span className="inline-block px-2 ml-2 text-xs font-medium text-indigo-800 bg-indigo-200 rounded-full group-hover:bg-indigo-300 group-hover: group-hover:dark:bg-lime-200 dark:bg-yellow-50 dark:text-black">
1
</span>
</a>

</div> */}
    </>
  );
}

export default Blockchain;
