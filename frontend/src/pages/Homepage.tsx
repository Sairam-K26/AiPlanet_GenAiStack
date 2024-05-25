import React from "react";
import { useState } from "react";
import Modal from "../components/MyStacksPage";



const StackButton: React.FC<StackButtonProps> = ({ label, onClick }) => (
  <button onClick={onClick} className="flex flex-col justify-center px-12 py-5 text-lg font-bold tracking-normal text-white bg-green-600 rounded-lg">
    <div className="flex gap-2 justify-center mx-auto">
      <span className="text-xl">{label}</span>
    </div>
  </button>
);

const MyComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center pb-20 bg-slate-70 ">
      
      <section className="flex gap-5 px-5 mt-7 w-full max-w-[1336px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto my-auto text-2xl font-bold tracking-tighter leading-7 text-slate-900">
          My Stacks
        </div>
        <StackButton
          label="New Stack"
        
          onClick={openModal}
        />
      </section>
      
      <section className="flex flex-col justify-center gap-20 px-10 py-11 mt-48  text-sm font-medium bg-white rounded-3xl border border-solid border-slate-500 w-[607px] max-md:px-5 max-md:mt-10">
        <h2 className="text-3xl text-center font-bold text-black max-md:max-w-full">
          Create New Stack
        </h2>
        <p className="mt-3 text-xl font-bold leading-[143%] text-stone-500 max-md:max-w-full">
          Start building your generative AI apps with our essential tools and frameworks
        </p>
        <StackButton
          label="New Stack"
          onClick={openModal}
          
        />
      </section>
      
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default MyComponent;
