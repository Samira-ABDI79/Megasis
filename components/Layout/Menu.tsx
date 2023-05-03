import Link from "next/link";

function Menu (){
    return(
        <>
   
    <div className="absolute inset-x-0 transform shadow-lg"  >
<div className="absolute inset-0 flex">
<div className="w-2/3 bg-white dark:bg-stone-800"></div>
<div className="w-1/3 bg-gray-50 dark:bg-zinc-900"></div>
</div>
<div className="relative flex flex-wrap mx-auto max-w-7xl"> 
<nav className="grid grid-cols-2 p-4 bg-white lg:w-2/3 dark:bg-stone-800 sm:py-6 sm:px-6 lg:px-8 xl:pr-12 md:grid-cols-3">
<div className="space-y-5">
<h3 className="text-sm font-medium leading-5 tracking-wide text-gray-500 uppercase dark:text-yellow-100">
Drop Feed
</h3>
<ul className="px-4 space-y-4">
<li className="flow-root">
<Link href="/" className="flex items-center p-3 -m-3 space-x-4 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-50 dark:text-yellow-50 dark:hover:text-lime-200 dark:hover:bg-zinc-700">
<svg className="flex-shrink-0 w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
</svg>
<span>Today</span>
</Link>
</li>
<li className="flow-root">
<a href="/events/" className="flex items-center p-3 -m-3 space-x-4 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-50 dark:text-yellow-50 dark:hover:text-lime-200 dark:hover:bg-zinc-700">
<svg className="flex-shrink-0 w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
</svg>
<span>Upcoming</span>
</a>
</li>
<li className="flow-root">
<a href="/events/ongoing/" className="flex items-center p-3 -m-3 space-x-4 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-50 dark:text-yellow-50 dark:hover:text-lime-200 dark:hover:bg-zinc-700">
<svg className="flex-shrink-0 w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
</svg>
<span>Ongoing</span>
</a>
</li>
<li className="flow-root">
<a href="/events/newest/" className="flex items-center p-3 -m-3 space-x-4 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-50 dark:text-yellow-50 dark:hover:text-lime-200 dark:hover:bg-zinc-700">
<svg className="flex-shrink-0 w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
</svg>
<span>Newest</span>
</a>
</li>
</ul>
</div>
<div className="space-y-5">
<h3 className="text-sm font-medium leading-5 tracking-wide text-gray-500 uppercase dark:text-yellow-100">
Lists
</h3>
<ul className="px-4 space-y-4">
<li className="flow-root">
<a href="/marketplaces/" className="flex items-center p-3 -m-3 space-x-4 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-50 dark:text-yellow-50 dark:hover:text-lime-200 dark:hover:bg-zinc-700">
<svg className="flex-shrink-0 w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
</svg>
<span>NFT Marketplaces</span>
</a>
</li>
<li className="flow-root">
<a href="/events/archive" className="flex items-center p-3 -m-3 space-x-4 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-50 dark:text-yellow-50 dark:hover:text-lime-200 dark:hover:bg-zinc-700">
<svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
</svg>
<span>Events Archive</span>
</a>
</li>
<li className="flow-root">
<a href="/creators/" className="flex items-center p-3 -m-3 space-x-4 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-50 dark:text-yellow-50 dark:hover:text-lime-200 dark:hover:bg-zinc-700">
<svg className="flex-shrink-0 w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
</svg>
<span>Creators</span>
</a>
</li>
</ul>
</div>
<div className="mt-6 space-y-5 md:mt-0">
<h3 className="text-sm font-medium leading-5 tracking-wide text-gray-500 uppercase dark:text-yellow-100">
Community
</h3>
<ul className="px-4 space-y-4">
<li className="flow-root">
<a href="/nft101/" className="flex items-center p-3 -m-3 space-x-4 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-50 dark:text-yellow-50 dark:hover:text-lime-200 dark:hover:bg-zinc-700">
<svg className="flex-shrink-0 w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
</svg>
<span>the ABCs of NFT</span>
</a>
</li>
<li className="flow-root">
<a href="/news/" className="flex items-center p-3 -m-3 space-x-4 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-50 dark:text-yellow-50 dark:hover:text-lime-200 dark:hover:bg-zinc-700">
<svg className="flex-shrink-0 w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
</svg>
<span>News</span>
</a>
</li>
<li className="flow-root">
<a href="/blog/" className="flex items-center p-3 -m-3 space-x-4 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-50 dark:text-yellow-50 dark:hover:text-lime-200 dark:hover:bg-zinc-700">
<svg className="flex-shrink-0 w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
</svg>
<span>Blog</span>
</a>
</li>
<li className="flow-root">
<a href="https://discord.gg/nft-calendar" target="_blank" rel="nofollow" className="flex items-center p-3 -m-3 space-x-4 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-50 dark:text-yellow-50 dark:hover:text-lime-200 dark:hover:bg-zinc-700">
<svg className="flex-shrink-0 w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
</svg>
<span>Discord Server</span>
</a>
</li>
</ul>
</div>
<div className="block mt-6 md:hidden md:mt-0">
<h3 className="text-sm font-medium leading-5 tracking-wide text-gray-500 uppercase dark:text-yellow-100">
Contribute
</h3>
<div className="my-6">
<a href="/events/community/add/" className="inline-flex items-center justify-center px-4 py-2 mr-2 font-medium leading-5 transition duration-150 ease-in-out bg-purple-500 border border-transparent rounded md:flex text-gray-50 dark:text-black dark:bg-lime-500 dark:hover:bg-lime-400 hover:bg-purple-400 focus:outline-none focus:border-purple-700 focus:ring-purple active:bg-purple-700">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
<span className="ml-1">Submit a Drop</span>
</a>
</div>
<div className="relative min-h-[40%]">
<div className="absolute bottom-0 left-0 ">
<div className="flex mt-6 mx-auto w-1/2 items-center">
<a href="https://twitter.com/nftcalendar" target="_blank" className="dark:text-gray-400 text-gray-500 hover:text-purple-400 border-gray-300 hover:border-purple-400 dark:hover:border-lime-500 dark:border-gray-600 p-0.5 rounded border dark:hover:text-lime-500">
<span className="sr-only">Twitter</span>
<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
</svg>
</a>
<a href="https://discord.gg/nft-calendar" target="_blank" className="mx-2 dark:text-gray-400 text-gray-500 hover:text-purple-400 border-gray-300 hover:border-purple-400 dark:hover:border-lime-500 dark:border-gray-600 p-0.5 rounded border dark:hover:text-lime-500">
<span className="sr-only">Discord</span>
<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
<path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z"></path>
</svg>
</a>
<a href="https://www.instagram.com/nftcalendar/" target="_blank" className="dark:text-gray-400 text-gray-500 hover:text-purple-400 border-gray-300 hover:border-purple-400 dark:hover:border-lime-500 dark:border-gray-600 p-0.5 rounded border dark:hover:text-lime-500">
<span className="sr-only">Discord</span>
<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
<path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</nav>
<div className="hidden px-4 py-8 lg:flex lg:w-1/3 bg-gray-50 dark:bg-zinc-900 sm:py-6 sm:px-6 lg:px-8 xl:pl-12">
<div className="">
<h3 className="text-sm font-medium leading-5 tracking-wide text-gray-500 uppercase dark:text-yellow-100">
Latest News
</h3>
<a href="/news/proof-partners-with-mona-to-launch-moonbirds-monaverse/" className="">
<h4 className="inline-flex my-2 text-sm font-bold leading-tight text-black hover:text-indigo-700 dark:text-yellow-100 dark:hover:text-lime-200">
PROOF Partners With Mona to Launch Moonbirds Monaverse for Metaverse Experience
</h4>
</a>
<a href="/news/pharrell-williams-curates-wearables-for-doodles-nft-project/" className="">
<h4 className="inline-flex my-2 text-sm font-bold leading-tight text-black hover:text-indigo-700 dark:text-yellow-100 dark:hover:text-lime-200">
Pharrell Williams Curates Digital Wearables for Doodles NFT Project
</h4>
</a>
<a href="/news/google-cloud-partners-with-polygon-labs-for-web3-growth/" className="">
<h4 className="inline-flex my-2 text-sm font-bold leading-tight text-black hover:text-indigo-700 dark:text-yellow-100 dark:hover:text-lime-200">
Google Cloud Partners With Polygon Labs to Boost Web3 Growth
</h4>
</a>
</div>
</div>
</div>
</div>
        </>
    )
}
export default Menu;