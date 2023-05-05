import { GetStaticPropsContext } from "next/types/index";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NextNFT from "@/components/NextNFT";
import SeeAlso from "@/components/SeeAlso";

const article = ({ article }: any) => {
  const [popUp, setShowpopUp] = useState(false);
  return (
    <>
      <section className="bg-white border border-gray-200 rounded p-6 mt-12 ">
        <div className="   mb-6  ">
          <h1 className="font-serif text-3xl font-medium text-black md:text-4xl dark:text-yellow-100">
            {article.name}
          </h1>
          <div className="w-full h-[300px]  rounded my-4">
            <Image
              src="/assets/img.png"
              width={700}
              alt="nft img"
              height={100}
              className="w-full h-[300px]  rounded my-4"
            />
          </div>
          <div className="px-3 pt-4 pb-2 mt-4 mb-2 border border-gray-100 rounded  bg-gray-50 dark:border-gray-700 dark:bg-zinc-800">
            <div className="relative z-10 inline-flex">
              <div className="flex flex-wrap items-center ">
                <svg
                  version="1.1"
                  className="w-6 h-6 text-indigo-500 fill-current dark:text-lime-500"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M437.019,74.98C388.667,26.629,324.38,0,256,0C187.619,0,123.332,26.629,74.98,74.98C26.629,123.332,0,187.62,0,256
                            s26.629,132.667,74.98,181.019C123.332,485.371,187.62,512,256,512s132.667-26.629,181.019-74.98
                            C485.371,388.667,512,324.38,512,256S485.371,123.333,437.019,74.98z M378.306,195.073L235.241,338.139
                            c-2.929,2.929-6.768,4.393-10.606,4.393c-3.839,0-7.678-1.464-10.607-4.393l-80.334-80.333c-5.858-5.857-5.858-15.354,0-21.213
                            c5.857-5.858,15.355-5.858,21.213,0l69.728,69.727l132.458-132.46c5.857-5.858,15.355-5.858,21.213,0
                            C384.164,179.718,384.164,189.215,378.306,195.073z"
                  ></path>
                </svg>
                <span
                  className="px-1 text-sm font-medium dark:text-lime-200"
                  onMouseOver={() => setShowpopUp((prev) => !prev)}
                >
                  verified
                </span>

                {popUp ? (
                  <div id="verified pop-up">
                    <div className="absolute top-0 z-10 w-32 p-2 -mt-3 text-sm leading-tight text-white transform -translate-x-1/2 -translate-y-full bg-purple-500 rounded-lg shadow-lg dark:text-gray-300 dark:bg-slate-700">
                      Drop's mint website was verified by its submitter in our
                      <a
                        className="underline hover:no-underline hover:font-medium dark:text-lime-200"
                        href="https://discord.gg/nft-calendar"
                        rel="nofollow"
                        target="_blank"
                      >
                        Discord community
                      </a>
                    </div>
                    <svg
                      className="absolute z-10 w-6 h-6 -mt-2 text-purple-500 transform -translate-x-12 -translate-y-3 fill-current stroke-current dark:text-lime-500"
                      width="8"
                      height="8"
                    >
                      <rect
                        x="12"
                        y="-10"
                        width="8"
                        height="8"
                        transform="rotate(45)"
                      ></rect>
                    </svg>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="py-3 text-lg dark:text-yellow-50">
              {article.date}
            </div>
            <div className="flex flex-wrap items-center pt-1 gap-2">
              <a
                href="https://tacoracers.io/"
                className=" px-3 py-2 text-gray-900 bg-gray-300 rounded-lg hover:text-indigo-600 flex  dark:hover:text-black dark:text-lime-500 dark:bg-zinc-700 dark:hover:bg-lime-500"
                target="_blank"
                rel="nofollow"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 447.632 447"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m231.816406 447.050781c34.230469-4.863281 64.238282-40.589843 83.121094-93.351562-27.296875-6.113281-55.152344-9.394531-83.121094-9.785157zm0 0"></path>
                  <path d="m286.503906 438.660156c2.023438-.585937 4.039063-1.175781 6.039063-1.824218 1.6875-.542969 3.351562-1.128907 5.015625-1.710938 1.96875-.679688 3.929687-1.378906 5.882812-2.121094 1.664063-.632812 3.3125-1.304687 4.964844-1.976562 1.90625-.800782 3.808594-1.597656 5.691406-2.398438 1.644532-.722656 3.277344-1.480468 4.910156-2.242187 1.847657-.871094 3.6875-1.757813 5.511719-2.679688 1.601563-.816406 3.199219-1.648437 4.800781-2.503906 1.792969-.960937 3.574219-1.941406 5.34375-2.949219 1.601563-.90625 3.144532-1.816406 4.703126-2.753906 1.734374-1.066406 3.460937-2.132812 5.175781-3.199219 1.535156-.976562 3.066406-1.96875 4.578125-2.992187 1.6875-1.136719 3.351562-2.320313 5.007812-3.503906 1.488282-1.066407 2.96875-2.128907 4.421875-3.199219 1.601563-1.234375 3.242188-2.511719 4.847657-3.792969 1.425781-1.136719 2.847656-2.265625 4.25-3.433594 1.597656-1.328125 3.128906-2.703125 4.679687-4.078125 1.359375-1.207031 2.726563-2.402343 4.054687-3.640625 1.527344-1.425781 3.015626-2.902344 4.503907-4.367187 1.289062-1.273438 2.59375-2.527344 3.855469-3.832031.234374-.242188.457031-.503907.699218-.753907-17.449218-9.011719-35.828125-16.085937-54.816406-21.09375-9.875 31.492188-27.449219 60.03125-51.128906 83.023438.648437-.167969 1.296875-.304688 1.945312-.472657 1.710938-.480468 3.390625-1.007812 5.0625-1.503906zm0 0"></path>
                  <path d="m447.632812 231.683594h-95.921874c-.363282 37.453125-5.796876 74.683594-16.152344 110.679687 21.117187 5.640625 41.496094 13.75 60.714844 24.160157 31.554687-38.03125 49.617187-85.449219 51.359374-134.839844zm0 0"></path>
                  <path d="m231.816406 215.683594h103.894532c-.40625-36.128906-5.707032-72.035156-15.75-106.742188-28.929688 6.597656-58.476563 10.121094-88.144532 10.511719zm0 0"></path>
                  <path d="m231.816406.316406v103.136719c27.96875-.394531 55.824219-3.671875 83.121094-9.785156-18.882812-52.761719-48.890625-88.488281-83.121094-93.351563zm0 0"></path>
                  <path d="m231.816406 327.914062c29.667969.394532 59.214844 3.917969 88.144532 10.515626 10.042968-34.707032 15.34375-70.617188 15.75-106.746094h-103.894532zm0 0"></path>
                  <path d="m396.273438 80.84375c-19.21875 10.410156-39.597657 18.519531-60.714844 24.160156 10.355468 35.996094 15.789062 73.226563 16.152344 110.679688h95.921874c-1.746093-49.386719-19.808593-96.804688-51.359374-134.839844zm0 0"></path>
                  <path d="m385.464844 68.707031c-.234375-.238281-.457032-.496093-.6875-.742187-1.265625-1.304688-2.578125-2.5625-3.867188-3.832032-1.484375-1.464843-2.964844-2.945312-4.496094-4.367187-1.324218-1.234375-2.695312-2.402344-4.054687-3.632813-1.550781-1.375-3.101563-2.761718-4.695313-4.089843-1.382812-1.167969-2.800781-2.285157-4.207031-3.40625-1.601562-1.296875-3.242187-2.585938-4.890625-3.824219-1.445312-1.089844-2.910156-2.144531-4.382812-3.199219-1.671875-1.203125-3.351563-2.402343-5.054688-3.546875-1.496094-1.007812-3.015625-1.992187-4.535156-2.957031-1.730469-1.113281-3.457031-2.203125-5.21875-3.257813-1.542969-.925781-3.101562-1.839843-4.664062-2.726562-1.789063-1.023438-3.582032-2.015625-5.390626-2.984375-1.601562-.800781-3.199218-1.671875-4.800781-2.472656-1.839843-.929688-3.695312-1.824219-5.597656-2.703125-1.601563-.761719-3.226563-1.503906-4.875-2.226563-1.894531-.839843-3.808594-1.597656-5.71875-2.398437-1.648437-.671875-3.289063-1.335938-4.953125-1.96875-1.941406-.742188-3.910156-1.4375-5.878906-2.117188-1.664063-.585937-3.328125-1.167968-5.015625-1.714844-2-.648437-4-1.238281-6.054688-1.832031-1.664062-.488281-3.335937-.984375-5.019531-1.429687-.644531-.175782-1.300781-.3125-1.949219-.480469 23.679688 22.992187 41.25 51.527344 51.128907 83.023437 19.007812-5.007812 37.414062-12.085937 54.878906-21.113281zm0 0"></path>
                  <path d="m0 215.683594h95.921875c.363281-37.453125 5.796875-74.683594 16.148437-110.679688-21.113281-5.636718-41.492187-13.746094-60.710937-24.160156-31.554687 38.03125-49.617187 85.453125-51.359375 134.839844zm0 0"></path>
                  <path d="m215.816406 447.050781v-103.136719c-27.96875.394532-55.824218 3.671876-83.121094 9.785157 18.878907 52.761719 48.890626 88.488281 83.121094 93.351562zm0 0"></path>
                  <path d="m215.816406 231.683594h-103.894531c.40625 36.128906 5.703125 72.039062 15.75 106.746094 28.929687-6.601563 58.472656-10.125 88.144531-10.515626zm0 0"></path>
                  <path d="m215.816406.316406c-34.230468 4.863282-64.242187 40.589844-83.121094 93.351563 27.296876 6.117187 55.152344 9.394531 83.121094 9.785156zm0 0"></path>
                  <path d="m215.816406 119.453125c-29.667968-.390625-59.214844-3.914063-88.144531-10.511719-10.046875 34.707032-15.34375 70.613282-15.75 106.742188h103.894531zm0 0"></path>
                  <path d="m168.113281 6.789062c-.648437.167969-1.296875.304688-1.945312.472657-1.695313.453125-3.367188.957031-5.054688 1.445312-2.007812.585938-4 1.175781-6.015625 1.816407-1.699218.550781-3.371094 1.136718-5.042968 1.71875-1.957032.691406-3.917969 1.378906-5.855469 2.113281-1.671875.640625-3.320313 1.304687-4.976563 1.984375-1.902344.800781-3.808594 1.601562-5.6875 2.398437-1.648437.722657-3.277344 1.480469-4.910156 2.242188-1.847656.871093-3.6875 1.757812-5.511719 2.679687-1.601562.816406-3.203125 1.652344-4.800781 2.503906-1.792969.960938-3.570312 1.945313-5.335938 2.953126-1.601562.894531-3.175781 1.8125-4.71875 2.75-1.738281 1.046874-3.457031 2.128906-5.167968 3.199218-1.539063.984375-3.066406 1.976563-4.578125 3-1.6875 1.136719-3.351563 2.320313-5.007813 3.503906-1.488281 1.066407-2.96875 2.128907-4.425781 3.203126-1.636719 1.230468-3.199219 2.511718-4.847656 3.789062-1.421875 1.136719-2.855469 2.265625-4.246094 3.441406-1.601563 1.320313-3.121094 2.6875-4.664063 4.054688-1.367187 1.21875-2.746093 2.402344-4.082031 3.664062-1.519531 1.417969-3 2.890625-4.484375 4.351563-1.289062 1.273437-2.601562 2.53125-3.867187 3.839843-.230469.242188-.453125.507813-.695313.753907 17.445313 9.015625 35.828125 16.089843 54.816406 21.097656 9.875-31.476563 27.4375-59.996094 51.105469-82.976563zm0 0"></path>
                  <path d="m66.71875 383.234375c1.488281 1.464844 2.96875 2.945313 4.496094 4.371094 1.328125 1.230469 2.695312 2.398437 4.058594 3.628906 1.550781 1.378906 3.101562 2.761719 4.695312 4.089844 1.382812 1.160156 2.792969 2.28125 4.207031 3.40625 1.601563 1.296875 3.199219 2.585937 4.894531 3.832031 1.441407 1.082031 2.90625 2.128906 4.371094 3.203125 1.671875 1.199219 3.359375 2.398437 5.0625 3.550781 1.496094 1.007813 3.015625 1.992188 4.535156 2.960938 1.730469 1.109375 3.457032 2.199218 5.21875 3.253906 1.542969.929688 3.101563 1.839844 4.664063 2.730469 1.789063 1.023437 3.582031 2.015625 5.390625 2.980469 1.597656.800781 3.199219 1.671874 4.800781 2.472656 1.839844.929687 3.695313 1.824218 5.597657 2.707031 1.601562.753906 3.226562 1.496094 4.875 2.222656 1.894531.839844 3.804687 1.597657 5.71875 2.398438 1.648437.671875 3.289062 1.335937 4.953124 1.96875 1.941407.746093 3.910157 1.441406 5.878907 2.121093 1.664062.582032 3.328125 1.167969 5.015625 1.710938 2 .648438 4 1.242188 6.054687 1.832031 1.664063.488281 3.335938.984375 5.015625 1.433594.648438.175781 1.304688.3125 1.953125.480469-23.679687-22.996094-41.25-51.53125-51.128906-83.027344-18.988281 5.011719-37.371094 12.085938-54.816406 21.105469.234375.238281.457031.496093.691406.742187 1.199219 1.296875 2.492187 2.554688 3.796875 3.824219zm0 0"></path>
                  <path d="m51.359375 366.523438c19.21875-10.410157 39.597656-18.519532 60.710937-24.160157-10.351562-35.996093-15.785156-73.226562-16.148437-110.679687h-95.921875c1.746094 49.386718 19.804688 96.804687 51.359375 134.839844zm0 0"></path>
                </svg>

                <span className="ml-2 ">Website</span>
              </a>
              <a
                href={article.twitter}
                rel="nofollow"
                target="_blank"
                className=" px-3 py-2 text-gray-900 bg-gray-300 rounded-lg hover:text-indigo-600 flex  dark:hover:text-black dark:text-lime-500 dark:bg-zinc-700 dark:hover:bg-lime-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
                <span className="ml-2">Twitter</span>
              </a>
              <a
                href="https://discord.com/invite/tacoracers"
                rel="nofollow"
                target="_blank"
                className=" px-3 py-2 text-gray-900 bg-gray-300 rounded-lg hover:text-indigo-600 flex  dark:hover:text-black dark:text-lime-500 dark:bg-zinc-700 dark:hover:bg-lime-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z"></path>
                </svg>
                <span className="ml-2">Discord</span>
              </a>
              <a
                href=" https://wax.atomichub.io/explorer/collection/wax-mainnet/tacoracersio"
                className=" px-3 py-2 text-gray-900 bg-gray-300 rounded-lg hover:text-indigo-600 flex  dark:hover:text-black dark:text-lime-500 dark:bg-zinc-700 dark:hover:bg-lime-500"
                rel="nofollow"
                target="_blank"
              >
                <span>Marketplace URL</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full my-1 truncate lg:w-1/3">
            <div className="p-4 my-2 mr-0 border border-gray-100 rounded md:my-0 lg:mr-2 bg-gray-50 dark:border-gray-700 dark:bg-zinc-800">
              <h3 className="mb-1 dark:text-yellow-100">Marketplace:</h3>
              <a
                href="/marketplace/wax-atomichub/"
                className="inline-block px-3 py-2 text-gray-900 bg-gray-300 rounded-lg hover:text-indigo-600   dark:hover:text-black dark:text-lime-500 dark:bg-zinc-700 dark:hover:bg-lime-500"
              >
                Wax AtomicHub
              </a>
            </div>
          </div>
          <div className="w-full my-1 truncate lg:w-1/3">
            <div className="p-4 my-2 border border-gray-100 rounded md:my-0 bg-gray-50 dark:border-gray-700 dark:bg-zinc-800">
              <h3 className="mb-1 dark:text-yellow-100">Blockchain:</h3>
              <a
                href="/b/wax/"
                className="inline-block px-3 py-2 text-gray-900 bg-gray-300 rounded-lg hover:text-indigo-600   dark:hover:text-black dark:text-lime-500 dark:bg-zinc-700 dark:hover:bg-lime-500"
              >
                WAX
              </a>
            </div>
          </div>
        </div>
        <div className="my-4 content">
          <p>
            Taco Racers is an Open World player-driven economy where you can
            own, upgrade, buy &amp; sell NFTs fueled by countless mini game
            experiences.
          </p>
        </div>
      </section>

      <section id="nextNFT">
        <NextNFT />
      </section>
      <section id="See Also">
        <SeeAlso />
      </section>
    </>
  );
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const res = await fetch(`http://localhost:3004/nfts/${context.params?.id}`);

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3004/nfts`);

  const articles = await res.json();

  const ids = articles.map((article: any) => article.id);

  const paths = ids.map((id: any) => ({ params: { id: id.toString() } }));

  return {
    paths,

    fallback: false,
  };
};

export default article;
