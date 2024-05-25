import * as React from "react";
import { useNavigate } from "react-router-dom";
type ModalProps = {
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [name,setName] = React.useState("")
  const [description,setDescription ] = React.useState("")
  const navigation = useNavigate()
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 bg-opacity-60 backdrop-blur-md ">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <form className="flex flex-col  pb-3.5 mt-6 max-w-full text-sm font-medium bg-white rounded-xl  shadow-2xl border-slate-200 w-[536px] max-md:mt-10">
          <div className="flex flex-col px-5 text-neutral-700 max-md:max-w-full">
            <div className="flex gap-5 justify-between text-base font-semibold text-black max-md:flex-wrap max-md:max-w-full">
              <span className="text-lg font-bold">Create New Stack</span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/faf498b335d568eea9107670341dbae054ed9d8be34489a1349712ccff0b27c6?apiKey=3d7758fb2efd4cadac0988d4c1804282&"
                alt="Creation Icon"
                className="shrink-0 my-auto w-3 aspect-square fill-black"
                onClick={onClose}
              />
            </div>
            <label htmlFor="stackName" className="self-start mt-9">
              Name
            </label>
            <input
              type="text"
              id="stackName"
              className="shrink-0 mt-3 h-10 rounded-md border border-solid border-stone-300 max-md:max-w-full"
              placeholder="Enter stack name"
              aria-label="Stack Name"
              onChange={(e) =>{
                setName(e.target.value)
              }}
            />
            <label htmlFor="stackDescription" className="self-start mt-5">
              Description
            </label>
            <textarea
              id="stackDescription"
              className="shrink-0 mt-2.5 rounded-md border border-solid border-stone-300 h-[158px] max-md:max-w-full"
              placeholder="Enter stack description"
              aria-label="Stack Description"
              onChange={(e) =>{
                setDescription(e.target.value)
              }}
            ></textarea>
            {/* <hr className="shrink-0 mt-1 h-px bg-slate-200 max-md:max-w-full" /> */}
          </div>
          <div className="flex gap-5 justify-between self-end px-5 mt-2 text-center whitespace-nowrap">
            <button type="button" onClick={onClose} className="my-auto text-neutral-700">
              Cancel
            </button>
            <button
              type="submit"
              className="justify-center px-3.5 py-2 text-white rounded-lg bg-green-600"
              onClick={() =>{
              navigation("/Dashboard",{state:{name,description}})
              }}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
