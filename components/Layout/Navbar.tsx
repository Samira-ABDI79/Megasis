import Link from "next/link";
import { useState } from "react";

import navStyles from "../../styles/Nav.module.css";
import Menu from "./Menu";




const Navbar = () => {
const [showMoal,setShowModal]=useState(false);
  return (
<>

<div className="w-full bg-white border-t-2 border-gray-800 shadow dark:bg-stone-900 dark:border-t-0 dark:border-b-2 dark:border-gray-300/10 ">
<div className="flex flex-wrap items-center justify-between md:py-2 py-1 px-2 md:px-4 mx-auto text-sm max-w-screen-2xl">
<div className="flex flex-wrap px-2 md:px-6 lg:pr-8">
<a className="flex items-center text-black hover:text-gray-600 dark:text-yellow-50 dark:hover:text-lime-200 " href="/">
<img className="inline-block w-10 h-10" src="/assets/logo/nftcalendar-logo.png" alt="NFT Calendar"/>
<span className="block p-1 text-base uppercase md:text-xl pressstart">NFTCalendar</span>
</a>
</div>
<div className="flex flex-wrap items-center">
<div className="hidden md:flex md:flex-wrap items-center">
<a href="https://twitter.com/nftcalendar" target="_blank" className="dark:text-gray-400 text-gray-500 hover:text-purple-400 border-gray-300 hover:border-purple-400 dark:hover:border-lime-500 dark:border-gray-600 p-0.5 rounded border dark:hover:text-lime-500">
<span className="sr-only">Twitter</span>
<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
</svg>
</a>
<a href="https://discord.gg/nft-calendar" target="_blank" className="mx-1 dark:text-gray-400 text-gray-500 hover:text-purple-400 border-gray-300 hover:border-purple-400 dark:hover:border-lime-500 dark:border-gray-600 p-0.5 rounded border dark:hover:text-lime-500">
<span className="sr-only">Discord</span>
<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
<path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z"></path>
</svg>
</a>
</div>
<div className="">
{/* <button className="inline-flex items-center visible p-1 space-x-2 text-base transition duration-150 ease-in-out border rounded-md md:hidden group hover:text-gray-600 dark:hover:text-gray-300 dark:focus:text-gray-300 focus:outline-none focus:text-gray-900 text-black border-transparent dark:text-gray-50" @click="openSearchBox = true" :className="{ 'text-gray-600 border-gray-200 dark:text-gray-200 dark:border-gray-400': openSearchBox, 'text-black border-transparent dark:text-gray-50' : openSearchBox === false }">
<svg className="w-8 h-8 text-gray-700 dark:text-gray-200" viewBox="0 0 20 20" fill="currentColor">
<path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
</svg>
</button> */}
</div>
<div className="relative items-center hidden py-1 mr-2 rounded md:flex">
<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
<svg className="w-5 h-5 text-gray-800 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
<path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
</svg>
</div>
<div>
<input x-data="{ q : '' }" x-model="q"  id="search" name="search" type="search" className="block w-full rounded pl-10 text-sm text-gray-800 bg-gray-50 form-input sm:leading-5 dark:bg-gray-800 dark:highlight-white dark:text-gray-300" placeholder="Search..."/>

</div>
</div>
<a href="/events/community/add/" className="items-center justify-center hidden px-4 py-2 mr-2 font-medium leading-5 transition duration-150 ease-in-out bg-purple-500 border border-transparent rounded md:flex text-gray-50 dark:text-black dark:bg-lime-500 dark:hover:bg-lime-400 hover:bg-purple-400 focus:outline-none focus:border-purple-700 focus:ring-purple active:bg-purple-700">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
<span className="ml-1">Submit a Drop</span>
</a>
<button
onClick={()=>setShowModal(prev=>!prev)}
type="button" className="inline-flex items-center p-1 space-x-2 text-base font-medium leading-6 transition duration-150 ease-in-out border rounded-md group hover:text-gray-600 dark:hover:text-gray-300 dark:focus:text-gray-300 focus:outline-none focus:text-gray-900 text-black border-transparent dark:text-gray-50" >
<svg className="w-8 h-8" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
</button>

</div>
</div>
</div>
{showMoal ? <Menu /> : <></>}
</>
  );

};




export default Navbar;