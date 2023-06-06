import { BlockchainsData } from "@/data";
interface inputData {
  description: string;
  id: string;
  name: string;
  placeholder: string;
  required: boolean;
}
function CustomInput(props: inputData) {
  return (
    <>
      <div>
        <label
          htmlFor={props.id}
          className="block font-medium text-gray-700 text-normal dark:text-yellow-100 mt-6"
        >
          {props.name}
        </label>
        <input
          type="text"
          name={props.name}
          id={props.id}
          placeholder={props.placeholder}
          value=""
          className="block w-full p-3 pr-10 mt-2 shadow-sm sm:text-sm rounded-md border
          outline-none border-gray-300
             focus:ring-indigo-500 focus:border-indigo-500  
             "
        />
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
          {props.description}
        </p>
      </div>
    </>
  );
}
export default CustomInput;
