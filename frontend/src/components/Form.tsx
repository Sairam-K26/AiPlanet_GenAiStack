import * as React from "react";
import { useNavigate } from "react-router-dom";



const ModalForm: React.FC = () => {
    
    
  const [role,setRole] = React.useState("")
  
  const navigation = useNavigate()
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black  ">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <form className="flex flex-col  pb-3.5 mt-6 max-w-full text-sm font-medium bg-white rounded-xl  shadow-2xl border-slate-200 w-[536px] max-md:mt-10">
          <div className="flex flex-col px-5 text-neutral-700 max-md:max-w-full">
            <div className="flex gap-5 justify-between text-base font-semibold text-black max-md:flex-wrap max-md:max-w-full">
              <span className="text-lg font-bold">Chat Bot</span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/faf498b335d568eea9107670341dbae054ed9d8be34489a1349712ccff0b27c6?apiKey=3d7758fb2efd4cadac0988d4c1804282&"
                alt="Creation Icon"
                className="shrink-0 my-auto w-3 aspect-square fill-black"
                
              />
            </div>
            <label htmlFor="stackName" className="self-start mt-9">
              Role
            </label>
            <input
              type="text"
              id="stackName"
              className="shrink-0 mt-3 h-10 rounded-md border border-solid border-stone-300 max-md:max-w-full"
              placeholder="Enter role of the bot"
              aria-label="Stack Name"
              onChange={(e) =>{
                setRole(e.target.value)
              }}
            />
            
            {/* <hr className="shrink-0 mt-1 h-px bg-slate-200 max-md:max-w-full" /> */}
          </div>
          <div className="flex gap-5 justify-between self-end px-5 mt-2 text-center whitespace-nowrap">
            <button type="button"  className="my-auto text-neutral-700">
              Cancel
            </button>
            <button
              type="submit"
              className="justify-center px-3.5 py-2 text-white rounded-lg bg-green-600"
              onClick={() =>{
              navigation("/ChatPage",{state:{role}})
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
