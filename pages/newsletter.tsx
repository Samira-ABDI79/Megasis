import { useState } from "react"

export default function  Newsletter(){
    const [subscribe,setSubscribe]=useState(false)
    const onSubmit=()=>{
        setSubscribe(true)
    }
    return(
        <>
        <section  >
<div className="flex flex-grow ">
<div className=" lg:mt-6   ">
<div className="p-6 my-8 bg-white border border-white rounded lg:mx-40 lg:py-12 lg:px-24 md:mx-10 md:p-10 ">
<section className="content">
<h2 className="mx-3 md:mx-10 text-2xl font-semibold mb-2 ">
Never miss the Next Big NFT Drop with our Newsletter
</h2>
<div className="mx-3 p-6 lg:py-8 md:mx-10 md:p-16 rounded bg-gray-50 border border-gray-200 dark:bg-zinc-800 dark:border-gray-700 mb-6">
<div  className="flex justify-center mt-8 mb-4">
<form method="POST" onSubmit={onSubmit}  >
<input type="hidden" name="_token" value="UtojJkIkgNJZnpF1vUR7waTzwAUI9hVIc3ldOHtE"/> <div className="flex items-center border-b-2 border-indigo-600 dark:border-lime-600 py-2">
<input name="email" className="bg-transparent border border-gray-400 px-2 focus:border-indigo-600 dark:border-gray-500 dark:focus:border-lime-600  rounded w-full text-gray-900 dark:text-gray-300 mr-3 py-2 leading-tight focus:outline-none" type="email" placeholder="enter@your.email" aria-label="Your email" x-model="formData.email"/>
<button className="disabled:opacity-50 flex-shrink-0 items-center justify-center px-4 py-2 border border-transparent leading-5 font-medium rounded text-gray-50 dark:text-black dark:bg-lime-500 dark:hover:bg-lime-400 bg-purple-500 hover:bg-purple-400 focus:outline-none focus:border-purple-700 focus:ring-purple active:bg-purple-700 transition ease-in-out duration-150" type="submit">
Subscribe
</button>

</div>
{subscribe ? 
    <p    className="mt-2 p-4 rounded bg-purple-400 text-gray-50">You have sucessfully subscribed!</p>
:<></>}
</form>
</div>

</div>
<p className="mx-3 md:mx-10">
We thoroughly gather the most significant drops and collections and deliver the list to your inbox 3 times a week.
</p>
<p className="mx-3 md:mx-10">
Our Newsletter has featured NFT launches from Deadmau5, Playboy, NBA, Limp Bizkit, Madonna, MC Hammer and many successful community collections.
</p>
</section>
</div>
</div>
</div>
</section>
        </>
    )
}