import React from 'react';
import Button from './Button';

const RecipeBanner = ({img,title,des}) => {
  return (
    <div className='flex h-[322px] w-[100%] shadow-md mb-12 bg-[#F5F2F2]  '>
         <img src={img} alt="recipe_img" />

      <div className='recipeDetails pt-16 flex flex-col gap-4 pl-8'>
         
        <p className='font-bold text-2xl'>{title}</p>
    <p className='text-[#2C2B2B] text-xl pr-10'>{des}</p>
    <Button/>

        </div>   
    </div>
  );
};

export default RecipeBanner;