import React from "react";
import Button from "./Button";

const RecipeCard = ({ img, title, des }) => {
  return (
    <div className="container flex flex-col w-[403px] h-[420px] rounded-xl shadow-md bg-[#F5F2F2]">
      <img  src={img} alt="recipeimg" className="w-[100%]" />
      <div className="detail mt-5 pl-5 flex flex-col gap-3 ">
        <p className="font-bold text-2xl">{title}</p>
        <p className="text-[#2C2B2B] text-xl">{des}</p>
        <Button />
      </div>
    </div>
  );
};

export default RecipeCard;
