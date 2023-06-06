import { useState } from "react";
import { BlockchainsData } from "@/data";
import Image from "next/image";
function Dropdown() {
  const [showList, setShowList] = useState(false);
  return (
    <>
      <div className="mt-1">
        <label
          htmlFor="blockchain"
          className="block text-sm font-medium text-gray-700 dark:text-yellow-100"
        >
          Blockchain
        </label>
        <input
          onFocus={() => setShowList((prev) => !prev)}
          placeholder="start typing to search"
          type="text"
          name="blockchain"
          id="blockchain"
          className="block w-full p-3 pr-10 mt-2 bg-gray-300 border
          outline-none border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      {showList ? (
        <div
          id="dropdownUsers"
          className="z-10  bg-white rounded-lg shadow w-60 dark:bg-gray-700"
        >
          <ul className="h-48 py-2 overflow-y-auto text-gray-700 dark:text-gray-200">
            {BlockchainsData?.map((item: any) => (
              <li
                key={item.id}
                className="flex flex-wrap items-center py-2 text-black align-middle group dark:text-yellow-50 hover:bg-gray-200 dark:hover:bg-zinc-800"
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
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
export default Dropdown;
