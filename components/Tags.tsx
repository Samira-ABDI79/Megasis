import { useState, useEffect } from "react";
function Tags() {
  const [tags, setTags] = useState([]);

  const sendrequest = async () => {
    const response = await fetch("http://localhost:3004/tags");
    const responseData = await response.json();
    setTags(responseData);
  };
  useEffect(() => {
    sendrequest();
  }, []);
  return (
    <>
      <div className="py-2 mb-2 px-1">
        <h3 className="text-xl font-semibold py-2 text-black dark:text-yellow-100">
          Tags
        </h3>

        {tags?.map((tag: any) => (
          <a
            className="block hover:bg-gray-200 hover:text-indigo-600 dark:text-yellow-50 
      dark:hover:bg-zinc-800  dark:hover:text-lime-200 py-2"
            href="/tag/2d/"
          >
            #{tag.label}
          </a>
        ))}
      </div>
    </>
  );
}
export default Tags;
